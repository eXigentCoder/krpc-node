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
    enum: decodeEnum,
    bytes: decodeBytes
};

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `double` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {number|*}
 */
function decodeDouble(buffer) {
    return buffer.readDouble();
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `float` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {number|*}
 */
function decodeFloat(buffer) {
    return buffer.readFloatLE();
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `sInt32` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {number}
 */
function decodeSInt32(buffer) {
    return buffer.readVarint32ZigZag() | 0;
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `sInt64` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {!Long|!{value: Long, length: number}|!Long|{value: !Long, length: number}}
 */
function decodeSInt64(buffer) {
    return buffer.readVarint64ZigZag();
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `uInt32` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {{value, length}|number|!{value: number, length: number}}
 */
function decodeUInt32(buffer) {
    return buffer.readVarint32() >>> 0;
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `uInt64` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {*}
 */
function decodeUInt64(buffer) {
    return buffer.readVarint64().toUnsigned();
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `bool` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {boolean}
 */
function decodeBool(buffer) {
    return Boolean(buffer.readVarint32());
}

/**
 * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `string` and decodes it.
 * @param {ByteBuffer} buffer - The buffer object
 * @return {string|!{string: string, length: number}|{string, length}}
 */
function decodeString(buffer) {
    return buffer.readVString();
}

/**
 * Returns a function that can be used to decode a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} into an entry from the provided enum definition.
 * @param {object} enumDefinition - The key-value enum object. Keys should be numbers, values should be strings.
 * @return {Function} The [function](#decodeBufferToEnumValue) that will do the decoding.
 */
function decodeEnum(enumDefinition) {
    /**
     * Takes in a [ByteBuffer]{@link https://www.npmjs.com/package/bytebuffer} object representing a `double` and decodes it.
     * @param {ByteBuffer} buffer - The buffer object
     */
    return function decodeBufferToEnumValue(buffer) {
        let enumValue = decodeSInt32(buffer);
        return enumDefinition[enumValue];
    };
}

function decodeBytes(buffer) {
    return buffer.slice(1);
}