'use strict';
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
    getStatus();
}

// function sendHello() {
//     socket.send(toArrayBuffer(rpcHelloMessage));
// }
//
// function sendConnectionRequest() {
//     let clientName = "node-test";
//     let connectionRequest = new proto.krpc.schema.ConnectionRequest(clientName);
//     socket.send(connectionRequest.toArrayBuffer());
// }

function getStatus() {
    let call = krpc.getStatus('KRPC', 'GetStatus');
    let req = new proto.krpc.schema.Request([call]);
    socket.send(req.toArrayBuffer());
}

// function getServices() {
//     let req = new proto.krpc.schema.Request('KRPC', 'GetServices');
//     socket.send(req.toArrayBuffer());
// }
//
// function getClients() {
//     let req = new proto.krpc.schema.Request('KRPC', 'get_Clients');
//     socket.send(req.toArrayBuffer());
// }
//
// function getCurrentGameScene() {
//     let req = new proto.krpc.schema.Request('KRPC', 'get_CurrentGameScene');
//     socket.send(req.toArrayBuffer());
// }


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