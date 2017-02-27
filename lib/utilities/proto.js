'use strict';
let ProtoBuf = require('protobufjs');
let path = require('path');
let protoPath = path.join(__dirname, '../krpc.proto');
let krpcBuilder = ProtoBuf.loadProtoFile(protoPath);
/**
 * @name proto
 * The protobuff class
 */
module.exports = krpcBuilder.build().krpc.schema;