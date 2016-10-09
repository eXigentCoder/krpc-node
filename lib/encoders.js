'use strict';
let ByteBuffer = require("bytebuffer");
var util = require("util");

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

function encodeDouble(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeFloat64(value);
}

function encodeFloat(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeFloat32(value);
}

function encodeSInt32(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint32ZigZag(value);
}

function encodeSInt64(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint64ZigZag(value);
}

function encodeUInt32(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint32(value);
}

function encodeUInt64(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint64(value);
}

function encodeBool(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    if (typeof value === 'string') {
        return buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : !!value);
    }
    return buffer.writeVarint32(value ? 1 : 0);
}

function encodeString(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVString(value);
}

function encodeBytes(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    if (value.remaining() < 0) {
        throw Error("Illegal value for bytes : " + value.remaining() + " bytes remaining");
    }
    let prevOffset = value.offset;
    buffer.writeVarint32(value.remaining());
    buffer.append(value);
    value.offset = prevOffset;
    return buffer;
}

function encodeEnum(enumDefinition) {
    return function (value) {
        let buffer = new ByteBuffer();
        if (value === null) {
            return buffer;
        }
        let foundEnumVal;
        Object.keys(enumDefinition).some(function (key) {
            let enumValue = enumDefinition[key].toLowerCase();
            if (enumValue === value.toLowerCase()) {
                foundEnumVal = Number(key);
                return true;
            }
            return false;
        });
        if (!foundEnumVal) {
            throw Error(util.format("Invalid enum value , should have been one of %j", value, enumDefinition));
        }
        return encodeSInt32(foundEnumVal);
    };
}