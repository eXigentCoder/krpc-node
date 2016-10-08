'use strict';
let ProtoBuf = require('protobufjs');
let krpcBuilder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
module.exports = krpcBuilder.build().krpc.schema;