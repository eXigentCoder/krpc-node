'use strict';
var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
var proto = builder.build();
module.exports = proto;