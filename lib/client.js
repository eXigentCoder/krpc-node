'use strict';
const async = require('async');
let WebSocket = require('ws');
let _ = require('lodash');
let proto = require('./utilities/proto');
let ProtoBuf = require('protobufjs');
const EventEmitter = require('events');
let util = require('util');
let os = require('os');
let encoders = require('./encoders');
let decoders = require('./decoders');
let defaultOptions = {
    rpc: {
        protocol: 'ws',
        host: '127.0.0.1',
        port: '50000',
        wsProtocols: null,
        wsOptions: null
    },
    stream: {
        protocol: 'ws',
        host: '127.0.0.1',
        port: '50001',
        wsProtocols: null,
        wsOptions: null
    }
};

module.exports = function Client(options, callback) {
    options = options || {};
    _.defaults(options, defaultOptions);
    async.waterfall([proto.load, async.apply(buildClient, options)], callback);
};

function buildClient(options, callback) {
    let client = {
        callbackStack: [],
        decodeStack: [],
        rpc: {
            socket: buildSocket(options.rpc),
            emitter: new EventEmitter(),
            on: function on(eventName, fn) {
                client.rpc.emitter.on(eventName, fn);
            }
        },
        send: function send(calls, sendCallback) {
            sendRequest(client, calls, sendCallback);
        },
        services: {
            /*eslint-disable global-require*/
            drawing: require('./services/drawing'),
            infernalRobotics: require('./services/infernal-robotics'),
            kerbalAlarmClock: require('./services/kerbal-alarm-clock'),
            krpc: require('./services/krpc'),
            remoteTech: require('./services/remote-tech'),
            spaceCenter: require('./services/space-center'),
            ui: require('./services/ui')
            /*eslint-enable global-require*/
        },
        encoders: encoders,
        decoders: decoders,
        streams: {}, //references streams & metadata by their id's
        streamLink: {}, //references streams by their path
        streamState: {}, //tracks the most recent values of the items subscribed to on the streams
        addStream: function addStream(call, propertyPath, addStreamCallback) {
            _addStream(client, call, propertyPath, addStreamCallback);
        },
        removeStream: function removeStream(propertyPath, removeStreamCallback) {
            _removeStream(client, propertyPath, removeStreamCallback);
        }
    };
    client.connectToStreamServer = connectToStreamServer(client, options);
    client.rpc.socket.onerror = function(err) {
        onMessageError(client, err);
    };
    client.rpc.socket.onclose = function(event) {
        client.rpc.emitter.emit('close', event);
    };
    client.rpc.socket.onmessage = function(event) {
        onMessage(client, event);
    };
    client.rpc.socket.onopen = function(event) {
        onOpen(event, client, callback);
    };
}

function connectToStreamServer(client, options) {
    return function _connectToStreamServer(clientId, callback) {
        if (!clientId) {
            throw new Error('Client id cannot be blank');
        }
        client.stream = {
            socket: buildSocket(options.stream, '?id=' + clientId.toString()),
            emitter: new EventEmitter(),
            on: function on(eventName, fn) {
                client.stream.emitter.on(eventName, fn);
            }
        };
        client.stream.socket.onerror = function(err) {
            if (callback && !callback.called) {
                callback.called = true;
                //eslint-disable-next-line callback-return
                callback(err); //we still want the event below to fire, so don't return
            }
            onStreamError(client, err);
        };
        client.stream.socket.onclose = function(event) {
            client.stream.emitter.emit('close', event);
        };
        client.stream.socket.onmessage = function(event) {
            onStreamMessage(client, event);
        };
        client.stream.socket.onopen = function(event) {
            client.stream.emitter.emit('open', event);
            if (callback) {
                callback.called = true;
                return callback();
            }
        };
    };
}

function buildSocket(options, queryString) {
    let url = options.protocol + '://' + options.host + ':' + options.port.toString();
    if (queryString) {
        url += queryString;
    }
    let socket = new WebSocket(url, options.wsProtocols, options.wsOptions);
    socket.binaryType = 'arraybuffer';
    return socket;
}

function onMessage(client, event) {
    let response;
    try {
        let buff = arrayBufferToBuffer(event.data);
        response = proto.Response.decode(buff);
    } catch (error) {
        let parsedMessage;
        try {
            let buf = Buffer.from(event.data);
            parsedMessage = buf.toString('utf8');
        } catch (parsingError) {
            parsedMessage = 'Error parsing binary data :' + parsingError.message;
        }
        let errorMessage = util.format(error.message, os.EOL, parsedMessage, error.decoded);
        return client.rpc.emitter.emit('error', new Error(errorMessage));
    }
    response.results = response.results.map(function(result) {
        let decoder = client.decodeStack.pop();
        if (result.error || decoder === null) {
            return result;
        }
        result.value = decode(decoder, result.value);
        return result;
    });
    client.rpc.emitter.emit('message', response, event);
    if (client.callbackStack.length > 0) {
        let callback = client.callbackStack.pop();
        return callback(null, response);
    }
}

function decode(decoder, data) {
    if (decoder instanceof ProtoBuf.Type) {
        return decoder.decode(data);
    }
    if (decoder.isCollection) {
        return decodeCollection(decoder, data);
    }
    return decoder(data);
}

function decodeCollection(decoder, data) {
    let subData = decode(decoder.decode, data);
    if (subData.items) {
        for (let i = 0; i < subData.items.length; i++) {
            let dataItem = subData.items[i];
            let subDecoder;
            if (decoder.decode.name === 'List') {
                subDecoder = decoder.subTypes[0];
            } else if (decoder.decode.name === 'Tuple') {
                subDecoder = decoder.subTypes[i];
            } else if (decoder.decode.name === 'Set') {
                subDecoder = decoder.subTypes[0];
            } else {
                throw new Error(util.format('Unknown decoder name %s', decoder.decode.name));
            }
            if (!subDecoder) {
                throw new Error(util.format('No sub-decoder', i, decoder));
            }
            subData.items[i] = decode(subDecoder, dataItem);
        }
    } else if (subData.entries) {
        let result = {};
        for (let i = 0; i < subData.entries.length; i++) {
            let entry = subData.entries[i];
            let key = decode(decoder.subTypes[0], entry.key);
            result[key] = decode(decoder.subTypes[1], entry.value);
        }
        return result;
    } else {
        throw new Error(util.format('Unknown collection item %j', decoder));
    }
    return subData;
}

function onMessageError(client, err) {
    client.rpc.emitter.emit('error', err);
    if (client.callbackStack.length > 0) {
        let callback = client.callbackStack.pop();
        return callback(err);
    }
}

function onOpen(event, client, callback) {
    //eslint-disable-next-line callback-return
    callback(null, client);
    //calling the callback first allows for consumers to subscribe to the 'open' event.
    client.rpc.emitter.emit('open', event);
}

function onStreamMessage(client, event) {
    let streamUpdate;
    try {
        let buff = arrayBufferToBuffer(event.data);
        streamUpdate = proto.StreamUpdate.decode(buff);
    } catch (error) {
        let parsedMessage;
        try {
            let buf = Buffer.from(event.data);
            parsedMessage = buf.toString('utf8');
        } catch (parsingError) {
            parsedMessage = 'Error parsing binary data :' + parsingError.message;
        }
        let errorMessage = util.format(error.message, os.EOL, parsedMessage, error.decoded);
        return client.stream.emitter.emit('error', new Error(errorMessage));
    }
    if (Object.keys(client.streams).length === 0) {
        return client.stream.emitter.emit('message', client.streamState, streamUpdate, event);
    }
    streamUpdate.results.forEach(function(update) {
        if (update.result.error) {
            console.error(update.result.error);
            return;
        }
        let stream = client.streams[update.id.toString()];
        if (!stream) {
            return;
        }

        let decodedValue = decode(stream.decode, update.result.value);
        _.set(client.streamState, stream.propertyPath, decodedValue);
    });
    return client.stream.emitter.emit('message', client.streamState, streamUpdate, event);
}

function onStreamError(client, err) {
    client.stream.emitter.emit('error', err);
}

function arrayBufferToBuffer(ab) {
    let buf = Buffer.alloc(ab.byteLength);
    let view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

function sendRequest(client, calls, callback) {
    if (_.isNil(calls)) {
        throw new Error('The calls argument must be provided when calling sendRequest');
    }
    if (!_.isObject(calls)) {
        throw new Error(
            'The calls argument must either be an object or an array of objects when calling sendRequest'
        );
    }
    if (!_.isArray(calls)) {
        calls = [calls];
    }
    let procedureCalls = [];
    calls.forEach(function(call) {
        if (_.isUndefined(call.call)) {
            throw new Error(
                'Each call added must have both a call and decode property, missing call'
            );
        }
        if (_.isUndefined(call.decode)) {
            throw new Error(
                'Each call added must have both a call and decode property, missing decode'
            );
        }
        client.decodeStack.splice(0, 0, call.decode);
        procedureCalls.push(call.call);
    });
    let req = proto.Request.create({ calls: procedureCalls });
    let buff = proto.Request.encode(req).finish();
    client.rpc.socket.send(buff);
    if (callback) {
        client.callbackStack.splice(0, 0, callback);
    }
}

function _addStream(client, procedure, propertyPath, callback) {
    if (!client.stream) {
        return callback(
            new Error(
                'Before you call `client.addStream` you must first connect to the stream server by calling `client.connectToStreamServer`.'
            )
        );
    }
    if (_.isArray(procedure)) {
        return callback(
            new Error('You can only pass one procedure call to `client.addStream` at a time.')
        );
    }
    if (!procedure.call) {
        return callback(new Error('Procedure must have a call property on it.'));
    }
    let existingStream = _.get(client.streamState, propertyPath);
    if (typeof existingStream !== 'undefined') {
        return callback(
            new Error(
                util.format(
                    'client.streamState.%s was already set. The propertyPath must be unique.',
                    propertyPath
                )
            )
        );
    }
    _.set(client.streamState, propertyPath, null);
    let addStreamCall = client.services.krpc.addStream(procedure.call, true);
    client.send(addStreamCall, streamAdded);

    function streamAdded(err, response) {
        if (err) {
            return callback(err);
        }
        if (response.error) {
            return callback(new Error(response.error));
        }
        let firstResult = response.results[0];
        if (firstResult.error) {
            return callback(new Error(firstResult.error));
        }
        let stream = firstResult.value;

        client.streams[stream.id.toString()] = {
            propertyPath: propertyPath,
            decode: procedure.decode,
            id: stream.id
        };
        _.set(client.streamLink, propertyPath, client.streams[stream.id.toString()]);
        return callback(null, stream);
    }
}

function _removeStream(client, propertyPath, callback) {
    if (!client.stream) {
        return callback(
            new Error(
                'Before you call `client.addStream` you must first connect to the stream server by calling `client.connectToStreamServer`.'
            )
        );
    }
    let existingStreamValue = _.get(client.streamState, propertyPath);
    if (typeof existingStreamValue === 'undefined') {
        return callback(
            new Error(
                util.format(
                    'client.streamState.%s was not set and cannot be removed.',
                    propertyPath
                )
            )
        );
    }
    let existingStream = _.get(client.streamLink, propertyPath);
    if (!existingStream) {
        return callback(
            new Error(
                util.format('client.streamLink.%s was not set and cannot be removed.', propertyPath)
            )
        );
    }
    let removeStream = client.services.krpc.removeStream(existingStream.id);
    client.send(removeStream, streamRemoved);

    function streamRemoved(err, response) {
        if (err) {
            return callback(err);
        }
        if (response.error) {
            return callback(new Error(response.error));
        }
        let firstResult = response.results[0];
        if (firstResult.error) {
            return callback(new Error(firstResult.error));
        }
        _.unset(client.streams, existingStream.id.toString());
        _.unset(client.streamLink, propertyPath);
        _.unset(client.streamState, propertyPath);
        return callback();
    }
}
