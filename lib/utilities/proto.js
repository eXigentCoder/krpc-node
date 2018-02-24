'use strict';
let ProtoBuf = require('protobufjs');
let path = require('path');
let protoPath = path.join(__dirname, '../krpc.proto');
let _root = null;
module.exports = {
    load,
    root: function() {
        return _root;
    }
};

function load(callback) {
    ProtoBuf.load(protoPath, protoBuffLoaded);

    function protoBuffLoaded(err, root) {
        if (err) {
            return callback(err);
        }
        _root = root.lookup('krpc').nested.schema;
        Object.keys(_root).forEach(function(propertyName) {
            module.exports[propertyName] = _root[propertyName];
        });
        callback();
    }
}
