'use strict';

module.exports = {
    double: decodeDouble,
    float: decodeFloat,
    sInt32: decodeSInt32,
    sInt64: decodeSInt64,
    uInt32: decodeUInt32,
    uInt64: decodeUInt64,
    bool: decodeBool,
    string: decodeString,
    bytes: decodeBytes,
    enum: decodeEnum
};

function decodeDouble(buffer) {
    return buffer.readDouble();
}

function decodeFloat(buffer) {
    return buffer.readFloat();
}

function decodeSInt32(buffer) {
    return buffer.readVarint32ZigZag() | 0;
}

function decodeSInt64(buffer) {
    return buffer.readVarint64ZigZag();
}

function decodeUInt32(buffer) {
    return buffer.readVarint32() >>> 0;
}

function decodeUInt64(buffer) {
    return buffer.readVarint64().toUnsigned();
}

function decodeBool(buffer) {
    return Boolean(buffer.readVarint32());
}

function decodeString(buffer) {
    return buffer.readVString();
}

function decodeBytes(buffer) {
    let value;
    let nBytes = buffer.readVarint32();
    if (buffer.remaining() < nBytes) {
        throw Error("Illegal number of bytes for buffer: " + nBytes + " required but got only " + buffer.remaining());
    }
    value = buffer.clone(); // Offset already set
    value.limit = value.offset + nBytes;
    buffer.offset += nBytes;
    return value;
}

function decodeEnum(enumDefinition) {
    return function (data) {
        throw new Error("Not implemented", enumDefinition, data);
    };
}