'use strict';
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

/**
 * A procedure call with a decode function an a procedure object to send to the server
 * @typedef {object} procedureCall
 * @name procedureCall
 * @property {function} decode - The function used to decode the response from the server.
 * @property {object} call - The actual call + arguments to send to the server to execute.
 */

/**
 * Create a new krpc-node client
 * @constructor
 * @name ClientConstructorFunction
 * @param {object} options - The options used to create the client
 * @param {string} options.protocol="ws" - The protocol to use to connect to the server. ws or wss.
 * @param {string} options.host="127.0.0.1" - The host address of the server.
 * @param {string|number} options.port="50000" - The port number on which to connect to the server.
 * @param {string|string[]} [options.wsProtocols] - WebSocket protocols.
 * @param {object} [options.wsOptions] - Additional connection options.
 * @emits error Emitted by the returned client when an error occurs. Includes the error object.
 * @emits close Emitted by the returned client when the server terminates the connection with the client. Includes the close event.
 * @emits message Emitted by the returned client when the client receives a new message from the server. Includes the message.
 * @emits open Emitted by the returned client when the connection to the server has been established. Includes the event.
 * @returns {client} The client instance.
 * @example
 * let util = require('util');
 * let Client = require('krpc-node');
 * let client = Client();
 * client.rpc.on('open', function (event) {
 *     console.log(util.format('Connection Opened : %j', event));
 *     client.rpc.send(client.services.krpc.getClients());
 * });
 * client.rpc.on('error', function (err) {
 *     console.log(util.format('Error : %j', err));
 * });
 * client.rpc.on('message', function (response , event) {
 *     console.log(util.format('Response : %j', response));
 * });
 * client.rpc.on('close', function (event) {
 *     console.log(util.format('Connection Closed : %j', event));
 * });
 */
module.exports = function Client(options) {
    options = options || {};
    _.defaults(options, defaultOptions);

    /**
     * An instance of the Client class
     * @typedef {Object} client
     * @property {WebSocket} socket - The underlying websocket instance
     * @property {EventEmitter} emitter - The emitter that handles events.
     * @property {function[]} decodeStack - The stack of functions to use to decode responses from the server.
     * @property {function} send - Sends one or more calls to the server to process
     * @property {function} on - Registers for one of the events [open, message, error, close].
     * @property {object} services - The collection of services that can be called. Each function within a service will return a procedureCall object.
     * @property {object} services.drawing - Provides functionality for drawing objects in the flight scene. For drawing and interacting with the user interface, see the UI service.
     * @property {object} services.infernalRobotics - This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214/">Infernal Robotics</a>.
     * @property {object} services.kerbalAlarmClock - This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/">Kerbal Alarm Clock</a>.
     * @property {object} services.krpc - Main kRPC service, used by clients to interact with basic server functionality.
     * @property {object} services.remoteTech - This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
     * @property {object} services.spaceCenter - Provides functionality to interact with Kerbal Space Program. This includes controlling the active vessel, managing its resources, planning maneuver nodes and auto-piloting.
     * @property {object} services.ui - Provides functionality for drawing and interacting with in-game user interface elements. For drawing 3D objects in the flight scene, see the Drawing service.
     * @property {object} encoders - The raw [encoders](#encoders) that can be used to manually encode values.
     * @property {object} decoders - The raw [decoders](#decoders) that can be used to manually decode values.
     */
    let client = {
        rpc: {
            socket: buildSocket(options.rpc),
            emitter: new EventEmitter(),
            decodeStack: [],
            /**
             * Sends one or more calls to the server to process
             * @memberOf client
             * @name Send
             * @param {procedureCall|procedureCall[]} calls - One or more calls to send to the server.
             */
            send: function send(calls) {
                sendRequest(client.rpc, calls);
            },
            /**
             * Registers for one of the events [open, message, error, close].
             * @memberOf client
             * @name On
             * @param {string} eventName - The event to register for [open, message, error, close].
             * @param {function} fn - The function to execute when an event happens
             */
            on: function on(eventName, fn) {
                client.rpc.emitter.on(eventName, fn);
            }
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
        connectToStreamServer: connectToStreamServer
    };
    registerEvents(client.rpc);
    return client;

    function connectToStreamServer() {
        client.stream = {
            socket: buildSocket(options.stream),
            emitter: new EventEmitter(),
            decodeStack: [],
            send: function send(calls) {
                sendRequest(options, calls);
            },
            on: function on(eventName, fn) {
                client.stream.emitter.on(eventName, fn);
            }
        };
        registerEvents(client.stream);
    }
};

function registerEvents(options) {
    options.socket.onerror = function (err) {
        options.emitter.emit('error', err);
    };
    options.socket.onclose = function (event) {
        options.emitter.emit('close', event);
    };
    options.socket.onmessage = function (event) {
        onMessage(options, event);
    };
    options.socket.onopen = function (event) {
        options.emitter.emit('open', event);
    };
}

function buildSocket(options) {
    let socket = new WebSocket(options.protocol + '://' + options.host + ':' + options.port.toString(), options.wsProtocols, options.wsOptions);
    socket.binaryType = 'arraybuffer';
    return socket;
}

function onMessage(options, event) {
    let response;
    try {
        response = proto.Response.decode(event.data);
    }
    catch (error) {
        let parsedMessage;
        try {
            let buf = Buffer.from(event.data);
            parsedMessage = buf.toString('utf8');
        }
        catch (parsingError) {
            parsedMessage = "Error parsing binary data :" + parsingError.message;
        }
        let errorMessage = util.format(error.message, os.EOL, parsedMessage, error.decoded);
        return options.emitter.emit('error', new Error(errorMessage));
    }
    response.results = response.results.map(function (result) {
        let decoder = options.decodeStack.pop();
        if (result.error || decoder === null) {
            return result;
        }
        if (decoder.prototype instanceof ProtoBuf.Builder.Message) {
            result.value = new decoder.decode(result.value);
        } else {
            result.value = decoder(result.value);
        }
        return result;
    });
    options.emitter.emit('message', response, event);
}

/**
 * @private
 * @param {client} options
 * @param {procedureCall| procedureCall[]} calls
 */
function sendRequest(options, calls) {
    if (_.isNil(calls)) {
        throw new Error("The calls argument must be provided when calling sendRequest");
    }
    if (!_.isObject(calls)) {
        throw new Error("The calls argument must either be an object or an array of objects when calling sendRequest");
    }
    if (!_.isArray(calls)) {
        calls = [calls];
    }
    let procedureCalls = [];
    calls.forEach(function (call) {
        if (_.isUndefined(call.call)) {
            throw new Error("Each call added must have both a call and decode property, missing call");
        }
        if (_.isUndefined(call.decode)) {
            throw new Error("Each call added must have both a call and decode property, missing decode");
        }
        options.decodeStack.push(call.decode);
        procedureCalls.push(call.call);
    });
    let req = new proto.Request(procedureCalls);
    options.socket.send(req.toArrayBuffer());
}