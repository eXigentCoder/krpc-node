'use strict';
var _ = require('lodash');
var WebSocket = require('ws');
var util = require('util');
var os = require('os');
var proto = require('./lib/proto');
var socket = new WebSocket('ws://127.0.0.1:50000');
socket.binaryType = 'arraybuffer';
//var rpcHelloMessage = new Buffer('KRPC-RPC');
socket.onopen = connectionOpened;
socket.onerror = socketError;
socket.onclose = socketClosed;
socket.onmessage = messageReceived;
var krpc = require('./lib/krpc');

function connectionOpened() {
    console.log("Socket Connection Opened");
    sendRequest(krpc.getStatus());
}

function sendRequest(calls) {
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

function messageReceived(event) {
    let resp;
    try {
        resp = proto.krpc.schema.Response.decode(event.data);
        let status = proto.krpc.schema.Status.decode(resp.results[0].value);
        console.log(status);
    }
    catch (err) {
        var parsedMessage;
        try {
            var buf = Buffer.from(event.data);
            parsedMessage = buf.toString('utf8');
        }
        catch (parsingError) {
            parsedMessage = "Error parsing binary data :" + parsingError;
        }
        throw new Error(util.format(err.message, os.EOL, parsedMessage));
    }
    console.log(resp);
}

// function toArrayBuffer(buf) {
//     var ab = new ArrayBuffer(buf.length);
//     var view = new Uint8Array(ab);
//     for (var i = 0; i < buf.length; ++i) {
//         view[i] = buf[i];
//     }
//     return ab;
// }
//
// function toBuffer(ab) {
//     var buf = new Buffer(ab.byteLength);
//     var view = new Uint8Array(ab);
//     for (var i = 0; i < buf.length; ++i) {
//         buf[i] = view[i];
//     }
//     return buf;
// }

function socketError(err) {
    console.error('Error on socket', err);
}
function socketClosed() {
    console.log("Socket Connection Closed");
}

process.on('uncaughtException', function (err) {
    console.error(err, err.stack);
    throw err;
});