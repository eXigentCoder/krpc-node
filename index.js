'use strict';
var WebSocket = require('ws');
var ProtoBuf = require('protobufjs');

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

sock.onmessage = (ev) => {
    var buf = Buffer.from(ev.data);
    //let resp = proto.krpc.schema.ConnectionResponse.decode(ev.data);
    var msg = buf.toString('utf8');
    console.log(msg);
};
