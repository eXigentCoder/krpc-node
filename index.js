'use strict';

var WebSocket = require('ws');
var ProtoBuf = require('protobufjs');

var builder = ProtoBuf.loadProtoFile('./krpc.proto');
var proto = builder.build();

var sock = new WebSocket('ws://127.0.0.1:50000');
sock.binaryType = 'arraybuffer';

sock.onopen = (ev) => {
    let req = new proto.krpc.schema.Request('KRPC', 'GetStatus');
    sock.send(req.toArrayBuffer());
};

sock.onmessage = (ev) => {
    var raw = uintToString(ev.data);
    let resp = proto.krpc.schema.Response.decode(ev.data);
    let status = proto.krpc.schema.Status.decode(resp.return_value);
    console.log(status);
};

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary.toString('base64');
}


function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

function stringToUint(string) {
    var string = btoa(unescape(encodeURIComponent(string))),
        charList = string.split(''),
        uintArray = [];
    for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
        decodedString = decodeURIComponent(escape(atob(encodedString)));
    return decodedString;
}

function atob(string) {
    return new Buffer(string).toString('base64');
}
function btoa(string) {
    new Buffer(string, 'base64').toString('ascii');
}