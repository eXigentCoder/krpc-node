'use strict';
let ProtoBuf = require('protobufjs');
let path = require('path');
let protoPath = path.join(__dirname, '../krpc.proto');
let _root = null;
module.exports = {
    load
};

async function load() {
    const root = await ProtoBuf.load(protoPath);
    _root = root.lookup('krpc').nested.schema;
    Object.keys(_root).forEach(function(propertyName) {
        module.exports[propertyName] = _root[propertyName];
    });
}
