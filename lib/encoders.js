'use strict';
let ByteBuffer = require("bytebuffer");
let util = require("util");

module.exports = {
    double: encodeDouble,
    float: encodeFloat,
    sInt32: encodeSInt32,
    sInt64: encodeSInt64,
    uInt32: encodeUInt32,
    uInt64: encodeUInt64,
    bool: encodeBool,
    string: encodeString,
    enum: encodeEnum
};

/**
 * Takes in a value and encodes it as a `double` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeDouble(value) {
    let buffer = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    if (value === null) {
        return buffer;
    }
    return buffer.writeDouble(value);
}

/**
 * Takes in a value and encodes it as a `float` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeFloat(value) {
    let buffer = new ByteBuffer();
    buffer.littleEndian = true;
    buffer.limit = 8;
    if (value === null) {
        return buffer;
    }
    return buffer.writeFloat(value);
}

/**
 * Takes in a value and encodes it as a `sInt32` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeSInt32(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint32ZigZag(value);
}

/**
 * Takes in a value and encodes it as a `sInt64` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeSInt64(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint64ZigZag(value);
}

/**
 * Takes in a value and encodes it as a `uInt32` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeUInt32(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint32(value);
}

/**
 * Takes in a value and encodes it as a `uInt64` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeUInt64(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVarint64(value);
}

/**
 * Takes in a value and encodes it as a `bool` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeBool(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    if (typeof value === 'string') {
        return buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : Boolean(value));
    }
    return buffer.writeVarint32(value ? 1 : 0);
}

/**
 * Takes in a value and encodes it as a `string` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
 * @param value - The value to encode.
 * @return {ByteBuffer|void}
 */
function encodeString(value) {
    let buffer = new ByteBuffer();
    if (value === null) {
        return buffer;
    }
    return buffer.writeVString(value);
}

/**
 * Returns a function that can be used to encode a string as the specific enum value.
 * @param {object} enumDefinition - The key-value enum object. Keys should be numbers, values should be strings.
 * @return {Function} The [function](#encodeValueBasedOnEnum) that will do the encoding.
 */
function encodeEnum(enumDefinition) {
    /**
     * Takes in a string value and using the provided enum definition encodes it as a `sInt` stored in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object for use with the protobufjs library.
     * @param value - The value to encode.
     * @throws {Error} If the provided value was not found in the enum definition
     * @return {ByteBuffer|void}
     */
    return function encodeValueBasedOnEnum(value) {
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