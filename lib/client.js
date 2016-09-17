'use strict';
let WebSocket = require('ws');
let _ = require('lodash');
let proto = require('./utilities/proto');
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
let apis = {
    krpc: krpc
};
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
    socket.onclose = function () {
        client.emitter.emit('close');
    };
    socket.onmessage = function (event) {
        onMessage(client, event);
    };
    socket.onopen = function (event) {
        client.emitter.emit('open', event);
    };
    client.apis = apis;
    return client;
};
module.exports.apis = apis;

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