'use strict';
var WebSocket = require('ws');
var ProtoBuf = require('protobufjs');
var util = require('util');
var os = require('os');
var builder = ProtoBuf.loadProtoFile('./krpc.proto');
var proto = builder.build();

var sock = new WebSocket('ws://127.0.0.1:50000');
sock.binaryType = 'arraybuffer';

sock.onopen = () => {
    let clientName = "node-test";
    let clientId = new Buffer('1');
    let connectionRequest = new proto.krpc.schema.ConnectionRequest(clientName, clientId);
    sock.send(connectionRequest.toArrayBuffer());
};

sock.onmessage = messageReceived;

function messageReceived(event) {
    let resp;
    try {
        resp = proto.krpc.schema.Response.decode(event.data);
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
