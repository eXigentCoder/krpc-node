'use strict';
let ProtoBuf = require('protobufjs');
let krpcBuilder = ProtoBuf.loadProtoFile('./resources/krpc.proto');
/**
 * @name proto
 * The protobuff class
 */
module.exports = krpcBuilder.build().krpc.schema;