'use strict';

module.exports = {
    double: encodeDouble,
    float: encodeFloat,
    sInt32: encodeSInt32,
    sInt64: encodeSInt64,
    uInt32: encodeUInt32,
    uInt64: encodeUInt64,
    bool: encodeBool,
    string: encodeString,
    bytes: encodeBytes,
    enum: encodeEnum
};

function encodeDouble(buffer) {
    return buffer.readDouble();
}

function encodeFloat(buffer) {
    return buffer.readFloat();
}

function encodeSInt32(buffer) {
    return buffer.readVarint32ZigZag() | 0;
}

function encodeSInt64(buffer) {
    return buffer.readVarint64ZigZag();
}

function encodeUInt32(buffer) {
    return buffer.readVarint32() >>> 0;
}

function encodeUInt64(buffer) {
    return buffer.readVarint64().toUnsigned();
}

function encodeBool(buffer) {
    return Boolean(buffer.readVarint32());
}

function encodeString(buffer) {
    return buffer.readVString();
}

function encodeBytes(buffer) {
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

function encodeEnum(enumDefinition) {
    return function (data) {
        throw new Error("Not implemented", enumDefinition, data);
    };
}