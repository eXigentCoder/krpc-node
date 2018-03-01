'use strict';
const WebSocket = require('ws');
const _ = require('lodash');
const proto = require('./utilities/proto');
const ProtoBuf = require('protobufjs');
const EventEmitter = require('events');
const encoders = require('./encoders');
const decoders = require('./decoders');

const drawing = require('./services/drawing');
const infernalRobotics = require('./services/infernal-robotics');
const kerbalAlarmClock = require('./services/kerbal-alarm-clock');
const krpc = require('./services/krpc');
const remoteTech = require('./services/remote-tech');
const spaceCenter = require('./services/space-center');
const ui = require('./services/ui');

/**
 * Default options used to create a client. Gets merged in with the options you provide
 * @example
 * const defaultCreateClientOptions = {
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
const defaultCreateClientOptions = {
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
 * The callback that is called after attempting to create a new client
 * @callback creationResultCallback
 * @param {null|Error} error Lets the caller know if there was an error creating the client
 * @param {client} client The created client, ready to use
 */
/**
 * Async function that creates a new `krpc-node` client
 * @name createClient
 * @param {object} [options] The options used to create the client, defaults to {@link defaultCreateClientOptions}
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
 * @param {creationResultCallback} [callback] The function called once the client has been created.
 * @returns {Promise.<client>}
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
async function createClient(options, callback) {
    options = options || {};
    _.defaults(options, defaultCreateClientOptions);
    await proto.load();
    const client = await buildClient(options);
    if (callback) {
        callback(null, client);
    }
    return client;
}

createClient.createClient = createClient;
createClient.drawing = drawing;
createClient.infernalRobotics = infernalRobotics;
createClient.kerbalAlarmClock = kerbalAlarmClock;
createClient.krpc = krpc;
createClient.remoteTech = remoteTech;
createClient.spaceCenter = spaceCenter;
createClient.ui = ui;
module.exports = createClient;

async function buildClient(options) {
    /**
     * @name client A client object which can be used to communicate with the server
     * @param {function[]} callbackStack An ordered array of callback functions to call when responses are received.
     * @param {function[]} decodeStack An ordered array of decode functions to call when responses are received.
     * @param {object} rpc Contains items related to communicating directly with the server.
     * @param {WebSocket} rpc.socket The underlying websocket instance used for primary communications with the server.
     * @param {EventEmitter} rpc.emitter The event emitter for primary rpc connection to the server
     * @param {on} rpc.on Registers for one of the events for messages from the server [open, message, error, close].
     * @param {send} send Sends a one or more service call(s) to the server see {@link send}. The documentation for available service calls can be found in the services section of the{@link https://github.com/eXigentCoder/krpc-node/blob/master/README.md|main README.md}
     * @param {object} services The collection of services that can be called.
     * @param {object} services.krpc Main kRPC service, used by clients to interact with basic server functionality.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/krpc.md|See the KRPC service.}
     * @param {object} services.spaceCenter Provides functionality to interact with Kerbal Space Program. This includes controlling the active vessel, managing its resources, planning maneuver nodes and auto-piloting.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/space-center.md|See the SpaceCenter service.}
     * @param {object} services.drawing Provides functionality for drawing objects in the flight scene. For drawing and interacting with the user interface.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/drawing.md|See the Drawing service.}
     * @param {object} services.ui Provides functionality for drawing and interacting with in-game user interface elements. For drawing 3D objects in the flight scene.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/ui.md|See the UI service.}
     * @param {object} services.infernalRobotics This service provides functionality to interact with the{@link http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214|Infernal Robotics} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/infernal-robotics.md|See the InfernalRobotics service.}
     * @param {object} services.kerbalAlarmClock This service provides functionality to interact with the{@link http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/|Kerbal Alarm Clock} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/kerbal-alarm-clock.md|See the KerbalAlarmClock service.}
     * @param {object} services.remoteTech This service provides functionality to interact with{@link href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/|RemoteTech} mod.{@link https://github.com/eXigentCoder/krpc-node/blob/master/documentation/remote-tech.md|See the RemoteTech service.}
     * @param {object} encoders The raw [encoders](#encoders) that can be used to manually encode values.
     * @param {object} decoders The raw [decoders](#decoders) that can be used to manually decode values.
     * @param {object} streams Will store the streams with the string representation of their unique id as the key. Values are of type {@link stream}
     * @param {connectToStreamServer} Establishes a separate connection to the stream server.
     * @param {addStream} addStream Adds a single call to the stream communication. Make sure you call connectToStreamServer fist.
     * @param {removeStream} removeStream Removes a single call from the stream communication. Make sure you call connectToStreamServer and of course have called addStream fist.
     * @param {object} stream Contains items related to communicating with the stream server.
     * @param {WebSocket} stream.socket The underlying websocket instance used to communicate with the server for stream information.
     * @param {EventEmitter} stream.emitter The emitter that handles events for stream information.
     * @param {on} stream.on Registers for one of the events for messages from the server sent via streams [open, message, error, close].
     * @param {close} close Disconnects the client (RPC & Stream) from the server.
     */
    let client = {
        callbackStack: [],
        decodeStack: [],
        rpc: {
            socket: buildSocket(options.rpc),
            emitter: new EventEmitter(),
            /**
             * Function that allows you to register for one of the events relating to the websocket [open, message, error, close].
             * @name on
             * @param eventName The name of the event to register for
             * @param fn the function to execute when the event occurs
             */
            on: function on(eventName, fn) {
                client.rpc.emitter.on(eventName, fn);
            }
        },
        /**
         * This callback that is called after attempting to send calls to the server
         * @callback sendCallback
         * @param {null|Error} error Lets the caller know if there was an error sending the calls to the server
         * @param {response} response The server response.
         */
        /**
         * An object which represents a remote procedure call to execute on the server
         * @name procedureCall
         * @param {function} decode A function used to decode the response when it is returned by the server
         * @param {object} call The actual call and any arguments to send to the server to execute.
         */

        /**
         * Async function which sends one or more request(s) to the server
         * @name send
         * @param {procedureCall|procedureCall[]} procedureCall A list of rpc procedureCall to make on the server
         * @param {sendCallback} [sendCallback] The optional callback to execute when the request is sent.
         * @returns {Promise.<response>} A promise which will resolve to the response from the server.
         */
        send: async function send(procedureCall, sendCallback) {
            return sendRequest(client, procedureCall, sendCallback);
        },
        encoders: encoders,
        decoders: decoders,
        /**
         * An object representing a proceedure call that is being streamed from the server
         * @name stream
         * @param {string} propertyPath A unique name to represent the call
         * @param {function} decode The function used to decode responses for the server for this call
         * @param {Long} id A Long.js representation of the 64bit integer used to uniquely identify this stream on the server
         * @param {*} [value] The last known value of the call
         */
        streams: {},
        /**
         * This callback that is called after attempting to add a call to the stream
         * @callback addStreamCallback
         * @param {null|Error} error Lets the caller know if there was an error adding the call to the stream
         * @param {stream} The stream that was added
         */
        /**
         * Adds an call to the continuous update stream.
         * @name addStream
         * @param {procedureCall} procedureCall The call to add to the stream
         * @param {string} propertyPath A unique name to represent the call
         * @param {addStreamCallback} [callback] the callback function to execute when the operation has ended
         * @returns {Promise.<stream>} The stream that was added
         */
        addStream: async function addStream(call, propertyPath, addStreamCallback) {
            return _addStream(client, call, propertyPath, addStreamCallback);
        },
        /**
         * This callback that is called after attempting to remove a call from the stream
         * @callback removeStreamCallback
         * @param {null|Error} error Lets the caller know if there was an error sending the calls to the server
         */
        /**
         * Removes a call from the continuous update stream.
         * @name removeStream
         * @param propertyPath A unique name that represents the existing call that is being streamed
         * @param {removeStreamCallback} [callback] The callback function to execute when the operation has ended
         * @returns {Promise.<void>} If successful with resolve to nothing
         */
        removeStream: async function removeStream(propertyPath, removeStreamCallback) {
            return _removeStream(client, propertyPath, removeStreamCallback);
        },
        /**
         * Closes both the stream and rpc socket connection to the server. Should be called to free up resources and end the event loop.
         * @name close
         * @param {function} [callback] The callback to execute after closing.
         * @returns {Promise.<void>}
         */
        close: async function close(callback) {
            await closeStream(client.stream);
            await closeStream(client.rpc);
            if (callback) {
                return callback();
            }
        }
    };
    client.services = {
        drawing: addDirectInvoker(drawing, client),
        infernalRobotics: addDirectInvoker(infernalRobotics, client),
        kerbalAlarmClock: addDirectInvoker(kerbalAlarmClock, client),
        krpc: addDirectInvoker(krpc, client),
        remoteTech: addDirectInvoker(remoteTech, client),
        spaceCenter: addDirectInvoker(spaceCenter, client),
        ui: addDirectInvoker(ui, client)
    };
    client.connectToStreamServer = connectToStreamServer(client, options);
    client.rpc.socket.onerror = function(err, event) {
        client.rpc.emitter.emit('error', err, event);
    };
    client.rpc.socket.onclose = function(event) {
        client.rpc.emitter.emit('close', event);
    };
    client.rpc.socket.onmessage = function(event) {
        onMessage(client, event);
    };
    return new Promise(resolve => {
        client.rpc.socket.onopen = function(event) {
            resolve(client);
            //calling the resolve first allows for consumers to subscribe to the 'open' event.
            setImmediate(() => client.rpc.emitter.emit('open', event));
        };
    });
}

async function closeStream(stream) {
    return new Promise(resolve => {
        if (!stream || !stream.socket) {
            resolve();
        }
        stream.on('close', function() {
            resolve();
        });
        stream.socket.terminate();
    });
}

function connectToStreamServer(client, options) {
    /**
     * Connects to the stream server in order to stream continuous updates
     * @name connectToStreamServer
     * @param {string} clientId The clientId returned via krpc.getClientId
     * @param connectToStreamServerCallback [callback] The callback to execute when done connecting
     * @returns {Promise.<void>} A promise to resolve when done connecting
     */
    return async function _connectToStreamServer(clientId, callback) {
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

        client.stream.socket.onclose = function(event) {
            client.stream.emitter.emit('close', event);
        };

        client.stream.socket.onmessage = function(event) {
            onStreamMessage(client, event);
        };

        return new Promise((resolve, reject) => {
            client.stream.socket.onerror = function(err) {
                setImmediate(() => {
                    onStreamError(client, err);
                });
                if (callback && !callback.called) {
                    callback.called = true;
                    //eslint-disable-next-line callback-return
                    callback(err); //we still want the event below to fire, so don't return
                }
                reject(err);
            };
            client.stream.socket.onopen = function(event) {
                client.stream.emitter.emit('open', event);
                if (callback) {
                    callback.called = true;
                    callback();
                }
                resolve();
            };
        });
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
        let errorMessage = error.message + '\n' + parsedMessage + '\n' + error.decoded;
        return popCallback(new Error(errorMessage), null, client, event);
    }
    response.results = response.results.map(function(result) {
        let decoder = client.decodeStack.pop();
        if (result.error || decoder === null) {
            return result;
        }
        result.value = decode(client, decoder, result.value);
        return result;
    });
    popCallback(null, response, client, event);
}

function popCallback(cbErr, cbResponse, client, event) {
    if (client.callbackStack.length <= 0) {
        return;
    }
    let callback = client.callbackStack.pop();
    if (cbErr) {
        client.rpc.emitter.emit('error', cbErr, event);
        return callback(cbErr);
    }
    client.rpc.emitter.emit('message', cbResponse, event);
    return callback(null, cbResponse);
}

function decode(client, decoder, data) {
    if (decoder instanceof ProtoBuf.Type) {
        return decoder.decode(data);
    }
    if (decoder.isCollection) {
        return decodeCollection(client, decoder, data);
    }
    if (decoder.isObject) {
        return decodeObject(client, decoder, data);
    }
    return decoder(data);
}

function decodeCollection(client, decoder, data) {
    let subData = decode(client, decoder.decode, data);
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
                throw new Error(`Unknown decoder name ${decoder.decode.name}`);
            }
            if (!subDecoder) {
                throw new Error(`No sub-decoder ${i} ${JSON.stringify(decoder)}`);
            }
            subData.items[i] = decode(client, subDecoder, dataItem);
        }
    } else if (subData.entries) {
        let result = {};
        for (let i = 0; i < subData.entries.length; i++) {
            let entry = subData.entries[i];
            let key = decode(client, decoder.subTypes[0], entry.key);
            result[key] = decode(client, decoder.subTypes[1], entry.value);
        }
        return result;
    } else {
        throw new Error(`Unknown collection item ${JSON.stringify(decoder)}`);
    }
    return subData;
}

function decodeObject(client, decoder, data) {
    const service = client.services[decoder.service];
    const map = service.classMaps[decoder.type];
    console.log(map);
    const object = {
        _type: decoder.type,
        id: decoder.decode(data)
    };
    Object.keys(map).forEach(propertyName => {
        const value = map[propertyName];
        propertyName = _.camelCase(propertyName);
        if (typeof value === 'string') {
            //todo need to pass in this object's id sometimes
            object[propertyName] = service['_' + value];
            return;
        }
        if (typeof value !== 'object') {
            throw new Error(
                `Incorrect map for '${propertyName}', the value should either have been a string or object but was ${value}`
            );
        }
        object[propertyName] = {};
        Object.keys(value).forEach(subPropertyName => {
            const subValue = value[subPropertyName];
            subPropertyName = _.camelCase(subPropertyName);
            //todo need to pass in this object's id sometimes
            object[propertyName][subPropertyName] = service['_' + subValue];
        });
    });
    return object;
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
        let errorMessage = error.message + '\n' + parsedMessage + '\n' + error.decoded;
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

        let decodedValue = decode(client, stream.decode, update.result.value);
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

async function sendRequest(client, calls, callback) {
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
        return client.callbackStack.splice(0, 0, callback);
    }
    return new Promise((resolve, reject) => {
        client.callbackStack.splice(0, 0, function(err, response) {
            if (err) {
                return reject(err);
            }
            resolve(response);
        });
    });
}

async function _addStream(client, procedureCall, propertyPath, callback) {
    if (!client.stream) {
        return handleErr(
            new Error(
                'Before you call `client.addStream` you must first connect to the stream server by calling `client.connectToStreamServer`.'
            )
        );
    }
    if (_.isArray(procedureCall)) {
        return handleErr(
            new Error('You can only pass one procedureCall call to `client.addStream` at a time.')
        );
    }
    if (!procedureCall.call) {
        return handleErr(new Error('Procedure must have a call property on it.'));
    }
    let existingStream = findStreamByPropertyPath(client.streams, propertyPath);
    if (typeof existingStream !== 'undefined') {
        return handleErr(
            new Error(
                `client.streams already had a stream with a propertyPath of ${propertyPath}. The propertyPath must be unique.`
            )
        );
    }
    let addStreamCall = client.services.krpc.addStream(procedureCall.call, true);
    let response;
    try {
        response = await client.send(addStreamCall);
    } catch (err) {
        return handleErr(err);
    }
    if (response.error) {
        return handleErr(new Error(response.error));
    }
    let firstResult = response.results[0];
    if (firstResult.error) {
        return handleErr(new Error(firstResult.error));
    }
    let stream = firstResult.value;
    client.streams[stream.id.toString()] = {
        propertyPath: propertyPath,
        decode: procedureCall.decode,
        id: stream.id,
        value: null
    };
    if (callback) {
        return callback(null, stream);
    }
    return stream;

    function handleErr(err) {
        if (callback) {
            return callback(err);
        }
        throw err;
    }
}

async function _removeStream(client, propertyPath, callback) {
    if (!client.stream) {
        return handleErr(
            new Error(
                'Before you call `client.addStream` you must first connect to the stream server by calling `client.connectToStreamServer`.'
            )
        );
    }
    let existingStream = findStreamByPropertyPath(client.streams, propertyPath);
    if (!existingStream) {
        return handleErr(
            new Error(
                `client.streams did not have a stream with the propertyPath ${propertyPath} and cannot be removed.`
            )
        );
    }
    let removeStream = client.services.krpc.removeStream(existingStream.id);
    let response;
    try {
        response = await client.send(removeStream);
    } catch (err) {
        return handleErr(err);
    }
    if (response.error) {
        return handleErr(new Error(response.error));
    }
    let firstResult = response.results[0];
    if (firstResult.error) {
        return handleErr(new Error(firstResult.error));
    }
    _.unset(client.streams, existingStream.id.toString());
    if (callback) {
        return callback();
    }

    function handleErr(err) {
        if (callback) {
            return callback(err);
        }
        throw err;
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

function addDirectInvoker(service, client) {
    const wrappedService = {};
    Object.keys(service).forEach(key => {
        const originalFunction = service[key];
        wrappedService[key] = originalFunction;
        wrappedService['_' + key] = async function() {
            const procedure = originalFunction.apply(originalFunction, arguments);
            return client.send(procedure);
        };
    });
    return wrappedService;
}
