'use strict';
let WebSocket = require('ws');
let _ = require('lodash');
let proto = require('./utilities/proto');
let ProtoBuf = require('protobufjs');
const decode = require('./decode');
const EventEmitter = require('events');
let util = require('util');
let os = require('os');
let defaultOptions = {
    protocol: 'ws',
    host: '127.0.0.1',
    port: '50000',
    wsProtocols: null,
    wsOptions: null
};

let services = {
    drawing: require('./services/drawing'),
    infernalRobotics: require('./services/infernal-robotics'),
    kerbalAlarmClock: require('./services/kerbal-alarm-clock'),
    krpc: require('./services/krpc'),
    remoteTech: require('./services/remote-tech'),
    spaceCenter: require('./services/space-center'),
    ui: require('./services/ui')
};

/*
 NB: Requests are processed in order of receipt. The next request from a client will not be processed until
 the previous one completes execution and it’s response has been received by the client.
 When there are multiple client connections, requests are processed in round-robin order.
 */
module.exports = function Client(options) {
    options = options || {};
    _.defaults(options, defaultOptions);
    let socket = new WebSocket(options.protocol + '://' + options.host + ':' + options.port, options.wsProtocols, options.wsOptions);
    socket.binaryType = 'arraybuffer';
    let client = {
        socket: socket,
        emitter: new EventEmitter(),
        decodeStack: [],
        send: function (calls) {
            sendRequest(client, calls);
        },
        on: function (eventName, fn) {
            client.emitter.on(eventName, fn);
        }
    };
    socket.onerror = function (err) {
        client.emitter.emit('error', err);
    };
    socket.onclose = function (event) {
        client.emitter.emit('close', event);
    };
    socket.onmessage = function (event) {
        onMessage(client, event);
    };
    socket.onopen = function (event) {
        client.emitter.emit('open', event);
    };
    //todo deprecate
    client.decode = decode;
    client.services = services;
    return client;
};
//todo deprecate
module.exports.decode = decode;
module.exports.services = services;

function onMessage(client, event) {
    let response;
    try {
        response = proto.krpc.schema.Response.decode(event.data);
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
        return client.emitter.emit('error', new Error(errorMessage));
    }
    response.results = response.results.map(function (result) {
        let decoder = client.decodeStack.pop();
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
    client.emitter.emit('message', response);
}

function sendRequest(client, calls) {
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
        client.decodeStack.push(call.decode);
        procedureCalls.push(call.call);
    });
    let req = new proto.krpc.schema.Request(procedureCalls);
    client.socket.send(req.toArrayBuffer());
}