'use strict';
let ProtoBuf = require('protobufjs');
let krpcBuilder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
let customBuilder = ProtoBuf.loadProtoFile('./resources/custom.proto');
module.exports = krpcBuilder.build();
module.exports.custom = customBuilder.build();