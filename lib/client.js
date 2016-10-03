'use strict';
let WebSocket = require('ws');
let _ = require('lodash');
let proto = require('./utilities/proto');
const decode = require('./decode');
const EventEmitter = require('events');
let util = require('util');
let os = require('os');
let krpc = require('./apis/krpc');
let defaultOptions = {
    protocol: 'ws',
    host: '127.0.0.1',
    port: '50000',
    wsProtocols: null,
    wsOptions: null
};
//todo rk deprecate
let apis = {
    krpc: krpc
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
        send: function (calls) {
            sendRequest(socket, calls);
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
    client.apis = apis;
    client.decode = decode;
    client.services = services;
    return client;
};
//todo deprecate
module.exports.apis = apis;
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
    client.emitter.emit('message', response);
}

function sendRequest(socket, calls) {
    if (_.isNil(calls)) {
        throw new Error("The calls argument must be provided when calling sendRequest");
    }
    if (!_.isObject(calls)) {
        throw new Error("The calls argument must either be an object or an array of objects when calling sendRequest");
    }
    if (!_.isArray(calls)) {
        calls = [calls];
    }
    let req = new proto.krpc.schema.Request(calls);
    socket.send(req.toArrayBuffer());
}