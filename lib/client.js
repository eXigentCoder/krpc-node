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
var ByteBuffer = require("bytebuffer");
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
module.exports = function Client(options, callback) {
    options = options || {};
    _.defaults(options, defaultOptions);
    async.waterfall([
        proto.load,
        async.apply(buildClient, options)
    ], callback);

};

function buildClient(options, callback) {
    let client = {
        rpc: {
            socket: buildSocket(options.rpc),
            emitter: new EventEmitter(),
            decodeStack: [],
            send: function send(calls) {
                sendRequest(client.rpc, calls);
            },
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
    return callback(null, client);

    function connectToStreamServer(clientId) {
        if (!clientId) {
            throw new Error("Client id cannot be blank");
        }
        client.stream = {
            socket: buildSocket(options.stream, "?id=" + clientId.toString()),
            emitter: new EventEmitter(),
            decodeStack: [],
            send: function send(calls) {
                sendRequest(options, calls);
            },
            on: function on(eventName, fn) {
                client.stream.emitter.on(eventName, fn);
            },
            onMessage: onStreamMessage
        };
        registerEvents(client.stream);
    }
}

function registerEvents(options) {
    options.socket.onerror = function (err) {
        options.emitter.emit('error', err);
    };
    options.socket.onclose = function (event) {
        options.emitter.emit('close', event);
    };
    options.socket.onmessage = function (event) {
        if (options.onMessage) {
            return options.onMessage(options, event);
        }
        onMessage(options, event);
    };
    options.socket.onopen = function (event) {
        options.emitter.emit('open', event);
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

function onMessage(options, event) {
    let response;
    try {
        var buff = toBuffer(event.data);
        response = proto.Response.decode(buff);
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
        var bb = ByteBuffer.wrap(result.value);
        if (decoder instanceof ProtoBuf.Type) {
            result.value = decoder.decode(result.value);
        } else {
            result.value = decoder(bb);
        }
        return result;
    });
    options.emitter.emit('message', response, event);
}

function toBuffer(ab) {
    let buf = new Buffer(ab.byteLength);
    let view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

function onStreamMessage(options, event) {
    let streamUpdate;
    try {
        var buff = toBuffer(event.data);
        streamUpdate = proto.StreamUpdate.decode(buff);
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
    streamUpdate.results.forEach(function (streamResult) {
        streamResult.result.value = ByteBuffer.wrap(streamResult.result.value);
    });
    options.emitter.emit('message', streamUpdate, event);
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
    let req = proto.Request.create({calls: procedureCalls});
    let buff = proto.Request.encode(req).finish();
    options.socket.send(buff);
}