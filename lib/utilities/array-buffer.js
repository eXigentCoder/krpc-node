'use strict';

module.exports = {
    bufferToArrayBuffer: bufferToArrayBuffer,
    arrayBufferToBuffer: arrayBufferToBuffer
};

function bufferToArrayBuffer(buffer) {
    var arrayBuffer = new ArrayBuffer(buffer.length);
    var bytes = new Uint8Array(arrayBuffer);
    for (var i = 0; i < buffer.length; ++i) {
        bytes[i] = buffer[i];
    }
    return arrayBuffer;
}

function arrayBufferToBuffer(arrayBuffer) {
    var buffer = new Buffer(arrayBuffer.byteLength);
    var bytes = new Uint8Array(arrayBuffer);
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = bytes[i];
    }
    return buffer;
}