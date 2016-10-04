'use strict';
let ProtoBuf = require('protobufjs');
let krpcBuilder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
let customBuilder = ProtoBuf.loadProtoFile('./resources/custom.proto');
module.exports = krpcBuilder.build();
module.exports.custom = customBuilder.build();
module.exports.builder = krpcBuilder;
module.exports.getNameFromEnum = function (enumType, value) {
    let name = null;
    Object.keys(enumType).some(function (key) {
        if (enumType[key] === value) {
            name = key;
            return true;
        }
        return false;
    });
    return name;
};