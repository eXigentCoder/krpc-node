'use strict';
const async = require('async');
const WebSocket = require('ws');
const _ = require('lodash');
const proto = require('./utilities/proto');
const ProtoBuf = require('protobufjs');
const EventEmitter = require('events');
const util = require('util');
const os = require('os');
const encoders = require('./encoders');
const decoders = require('./decoders');

/**
 * Default options used to create a client. Gets merged in with the options you provide
 * @example
 * const defaultOptions = {
 *      rpc: {
 *          protocol: 'ws',
 *          host: '127.0.0.1',
 *          port: '50000',
 *          wsProtocols: null,
 *          wsOptions: null
 *      },
 *      stream: {
 *          protocol: 'ws',
 *          host: '127.0.0.1',
 *          port: '50001',
 *          wsProtocols: null,
 *          wsOptions: null
 *      }
 *  };
 */
const defaultOptions = {
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

/**
 * This callback that is called after attempting to create a new client
 *
 * @callback creationResultCallback
 * @param {null|Error} error Lets the caller know if there was an error creating the client
 * @param {client} client The created client, ready to use
 */

/**
 * Async function that creates a new krpc-node client
 * @name createClient
 * @param {object} [options] The options used to create the client, defaults to {@link defaultOptions}
 * @param {object} [options.rpc] The options used to create the web socket client for primary rpc calls to the server
 * @param {string} [options.rpc.protocol=ws] The protocol to use to connect to the server. `ws` or `wss`.
 * @param {string} [options.rpc.host="127.0.0.1"] The host address of the server.
 * @param {string|number} [options.rpc.port="50000"] The port number on which to connect to the server.
 * @param {string|string[]} [options.rpc.wsProtocols] WebSocket protocols to pass to the [ws](https://www.npmjs.com/package/ws) library.
 * @param {object} [options.rpc.wsOptions] Additional connection options  to pass to the [ws](https://www.npmjs.com/package/ws) library.
 * @param {object} [options.stream] The options used to create the web socket client for stream rpc calls to the server
 * @param {string} [options.stream.protocol=ws] The protocol to use to connect to the server. `ws` or `wss`.
 * @param {string} [options.stream.host="127.0.0.1"] The host address of the server.
 * @param {string|number} [options.stream.port="50000"] The port number on which to connect to the server.
 * @param {string|string[]} [options.stream.wsProtocols] WebSocket protocols to pass to the [ws](https://www.npmjs.com/package/ws) library.
 * @param {object} [options.stream.wsOptions] Additional connection options  to pass to the [ws](https://www.npmjs.com/package/ws) library.
 * @param {creationResultCallback} callback The function called once the client has been created.
 * @example
 * const createClient = require('krpc-node');
 *
 *       createClient(null, clientCreated);
 *
 *       function clientCreated(err, client) {
 *           if (err) {
 *               throw err;
 *           }
 *           console.log('Connection Opened');
 *           client.send(client.services.krpc.getClients(), getClientsCompleted);
 *       }
 *
 *       function getClientsCompleted(err, response) {
 *           if (err) {
 *               throw err;
 *           }
 *           expect(response.error).to.not.be.ok();
 *           expect(response.results.length).to.equal(1);
 *           let result = response.results[0];
 *           expect(result.error).to.not.be.ok();
 *           result.value.items.forEach(function(item) {
 *               expect(item).to.be.ok();
 *               console.log(item);
 *           });
 *       }
 *
 */
module.exports = function createClient(options, callback) {
    options = options || {};
    _.defaults(options, defaultOptions);
    async.waterfall([proto.load, async.apply(buildClient, options)], callback);
};

function buildClient(options, callback) {
    /**
     * @name client A client object which can be used to communicate with the server
     * @param {function[]} callbackStack An ordered array of callback functions to call when responses are received.
     * @param {function[]} decodeStack An ordered array of decode functions to call when responses are received.
     * @param {object} rpc Contains items related to communicating directly with the server.
     * @param {WebSocket} rpc.socket The underlying websocket instance used for primary communications with the server.
     * @param {EventEmitter} rpc.emitter The event emitter for primary rpc connection to the server
     * @param {function} rpc.on Registers for one of the events for messages from the server [open, message, error, close].
     * @param {function} send Sends a one or more service call(s) to the server see {@link send}. The documentation for available service calls can be found in the services section of the{@link https://github.com/eXigentCoder/krpc-node/blob/master/README.md|main README.md}
     * @param {object} services The collection of services that can be called.
     * @param {object} services.krpc Main kRPC service, used by clients to interact with basic server functionality.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/krpc.md|See the KRPC service.}
     * @param {object} services.spaceCenter Provides functionality to interact with Kerbal Space Program. This includes controlling the active vessel, managing its resources, planning maneuver nodes and auto-piloting.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/space-center.md|See the SpaceCenter service.}
     * @param {object} services.drawing Provides functionality for drawing objects in the flight scene. For drawing and interacting with the user interface.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/drawing.md|See the Drawing service.}
     * @param {object} services.ui Provides functionality for drawing and interacting with in-game user interface elements. For drawing 3D objects in the flight scene.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/ui.md|See the UI service.}
     * @param {object} services.infernalRobotics This service provides functionality to interact with the{@link http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214|Infernal Robotics} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/infernal-robotics.md|See the InfernalRobotics service.}
     * @param {object} services.kerbalAlarmClock This service provides functionality to interact with the{@link http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/|Kerbal Alarm Clock} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/kerbal-alarm-clock.md|See the KerbalAlarmClock service.}
     * @param {object} services.remoteTech This service provides functionality to interact with{@link href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/|RemoteTech} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/remote-tech.md|See the RemoteTech service.}

     */
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
        /**
         * This callback that is called after attempting to send calls to the server
         *
         * @callback sendCallback
         * @param {null|Error} error Lets the caller know if there was an error sending the calls to the server
         * @param {response} response The server response
         */
        /**
         * Sends a request to the server
         * @param {call|call[]} calls A list of rpc calls to make on the server
         * @param {sendCallback} sendCallback
         */
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
        streams: {},
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
        return client.stream.emitter.emit(
            'message',
            getValuesOnly(client.streams),
            streamUpdate,
            event
        );
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
        stream.value = decodedValue;
    });
    return client.stream.emitter.emit(
        'message',
        getValuesOnly(client.streams),
        streamUpdate,
        event
    );
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
    let existingStream = findStreamByPropertyPath(client.streams, propertyPath);
    if (typeof existingStream !== 'undefined') {
        return callback(
            new Error(
                `client.streams already had a stream with a propertyPath of ${
                    propertyPath
                }. The propertyPath must be unique.`
            )
        );
    }
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
            id: stream.id,
            value: null
        };
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
    let existingStream = findStreamByPropertyPath(client.streams, propertyPath);
    if (!existingStream) {
        return callback(
            new Error(
                `client.streams did not have a stream with the propertyPath ${
                    propertyPath
                } and cannot be removed.`
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
        return callback();
    }
}

function findStreamByPropertyPath(streams, propertyPath) {
    const existingStreamId = _.findKey(streams, stream => stream.propertyPath === propertyPath);
    return streams[existingStreamId];
}

function getValuesOnly(streams) {
    const values = {};
    Object.values(streams).forEach(function(item) {
        values[item.propertyPath] = item.value;
    });
    return values;
}
