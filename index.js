'use strict';
var WebSocket = require('ws');
var ProtoBuf = require('protobufjs');
var util = require('util');
var os = require('os');
var builder = ProtoBuf.loadProtoFile('./krpc.proto');
var proto = builder.build();
var socket = new WebSocket('ws://127.0.0.1:50000');
socket.binaryType = 'arraybuffer';
var rpcHelloMessage = new Buffer('KRPC-RPC');

socket.onopen = connectionOpened;
function connectionOpened() {
    //getStatus(); // Error: Illegal wire type for unknown field 7 in Message .krpc.schema.Response#decode: 7
    //sendHello(); // messageReceived never gets called

    //sendConnectionRequest();
    /*
     Error: Illegal offset: 0 <= 757 (+1) <= 757
     Error receiving message
     Service node-test not found
     at KRPC.Service.Services.GetProcedureSignature (System.String service, System.String procedure) [0x00000] in <filename unknown>:0
     at KRPC.Server.ProtocolBuffers.MessageExtensions.ToMessage (KRPC.Schema.KRPC.Request request) [0x00000] in <filename unknown>:0
     at KRPC.Server.WebSockets.RPCStream.Read (KRPC.Service.Messages.Request& request, System.Byte[] data, Int32 offset, Int32 length) [0x00000] in <filename unknown>:0
     at KRPC.Server.Message.RPCStream.Poll () [0x00000] in <filename unknown>:0
     at KRPC.Server.Message.RPCStream.get_DataAvailable () [0x00000] in <filename unknown>:0
     at KRPC.Core.PollRequests (IList`1 yieldedContinuations) [0x00000] in <filename unknown>:0
     at WebSocket.messageReceived (C:\Development\krpc-node\index.js:49:15)
     at WebSocket.onMessage (C:\Development\krpc-node\node_modules\ws\lib\WebSocket.js:442:14)
     at emitTwo (events.js:106:13)
     at WebSocket.emit (events.js:191:7)
     at Receiver.onbinary (C:\Development\krpc-node\node_modules\ws\lib\WebSocket.js:848:10)
     at C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:628:18
     at Receiver.applyExtensions (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:371:5)
     at C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:604:14
     at Receiver.flush (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:347:3)
     at Receiver.finish (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:633:12)
     */

    //getServices();
    /*
     Error: Illegal wire type for unknown field 28636 in Message .krpc.schema.Response#decode: 6
     ��
     �{
     UI�
     AddCanvasdUICanvas"�<doc>
     <summary>
     Add a new canvas.
     </summary>
     <remarks>
     If you want to add UI elements to KSPs stock UI canvas, use <see cref="M:UI.StockCanvas" />.
     </remarks>
     </doc>�
     Message
     content
     duration
     */

    //getClients();
    /*
     Error: Illegal wire type for unknown field 4 in Message .krpc.schema.Response#decode: 6
     &$
     "
     3-n��X7I��R�J�R
     
     */

    //getCurrentGameScene();
    /*
     Error: Illegal offset: 0 <= 4 (+1) <= 4
     
     at WebSocket.messageReceived (C:\Development\krpc-node\index.js:115:15)
     at WebSocket.onMessage (C:\Development\krpc-node\node_modules\ws\lib\WebSocket.js:442:14)
     at emitTwo (events.js:106:13)
     at WebSocket.emit (events.js:191:7)
     at Receiver.onbinary (C:\Development\krpc-node\node_modules\ws\lib\WebSocket.js:848:10)
     at C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:628:18
     at Receiver.applyExtensions (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:371:5)
     at C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:604:14
     at Receiver.flush (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:347:3)
     at Receiver.finish (C:\Development\krpc-node\node_modules\ws\lib\Receiver.js:633:12)
     */
    getStatus();
}

function sendHello() {
    socket.send(toArrayBuffer(rpcHelloMessage));
}

function sendConnectionRequest() {
    let clientName = "node-test";
    let connectionRequest = new proto.krpc.schema.ConnectionRequest(clientName);
    socket.send(connectionRequest.toArrayBuffer());
}
function getStatus() {
    let req = new proto.krpc.schema.Request('KRPC', 'GetStatus');
    socket.send(req.toArrayBuffer());
}

function getServices() {
    let req = new proto.krpc.schema.Request('KRPC', 'GetServices');
    socket.send(req.toArrayBuffer());
}

function getClients() {
    let req = new proto.krpc.schema.Request('KRPC', 'get_Clients');
    socket.send(req.toArrayBuffer());
}

function getCurrentGameScene() {
    let req = new proto.krpc.schema.Request('KRPC', 'get_CurrentGameScene');
    socket.send(req.toArrayBuffer());
}

socket.onmessage = messageReceived;

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

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

function toBuffer(ab) {
    var buf = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}