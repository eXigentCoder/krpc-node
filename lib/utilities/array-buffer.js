'use strict';

module.exports = {
    bufferToArrayBuffer: bufferToArrayBuffer,
    arrayBufferToBuffer: arrayBufferToBuffer
};

function bufferToArrayBuffer(buffer) {
    let arrayBuffer = new ArrayBuffer(buffer.length);
    let bytes = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
        bytes[i] = buffer[i];
    }
    return arrayBuffer;
}

function arrayBufferToBuffer(arrayBuffer) {
    let buffer = new Buffer(arrayBuffer.byteLength);
    let bytes = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
        buffer[i] = bytes[i];
    }
    return buffer;
}