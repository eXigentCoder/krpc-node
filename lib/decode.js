'use strict';
let ProtoBuf = require('protobufjs');
const _ = require('lodash');

module.exports = function decode(data, typeOrDecode) {
    if (typeOrDecode instanceof ProtoBuf.Builder.Enum) {
        let buffer = new Buffer(data.toArrayBuffer());
        let enumVal = buffer.readUInt8() / 2;
        return getNameFromEnum(typeOrDecode, enumVal);
    }
    if (_.isFunction(typeOrDecode)) {
        return typeOrDecode(data);
    }
    if (typeOrDecode.decode && _.isFunction(typeOrDecode.decode)) {
        return typeOrDecode.decode(data);
    }
    throw new Error("Not sure how to decode");
};

function getNameFromEnum(enumType, value) {
    let name = null;
    Object.keys(enumType).some(function (key) {
        if (enumType[key] === value) {
            name = key;
            return true;
        }
        return false;
    });
    return name;
}

