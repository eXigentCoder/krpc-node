'use strict';
var ProtoBuf = require('protobufjs');
var krpcBuilder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
var customBuilder = ProtoBuf.loadProtoFile('./resources/custom.proto');
module.exports = krpcBuilder.build();
module.exports.custom = customBuilder.build();