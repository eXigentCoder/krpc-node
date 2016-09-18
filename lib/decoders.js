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

/*eslint-disable no-unused-vars*/
function decodeDouble(data) {
    throw new Error("Not implemented");
}

function decodeFloat(data) {
    throw new Error("Not implemented");
}
function decodeSInt32(data) {
    throw new Error("Not implemented");
}
function decodeSInt64(data) {
    throw new Error("Not implemented");
}
function decodeUInt32(data) {
    throw new Error("Not implemented");
}
function decodeUInt64(data) {
    throw new Error("Not implemented");
}
function decodeBool(data) {
    throw new Error("Not implemented");
}
function decodeString(data) {
    throw new Error("Not implemented");
}
function decodeBytes(data) {
    throw new Error("Not implemented");
}

function decodeEnum(enumDefinition) {
    return function (data) {
        throw new Error("Not implemented");
    };
}
/*eslint-enable no-unused-vars*/