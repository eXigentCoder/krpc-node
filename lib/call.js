'use strict';
var proto = require('./proto');

module.exports = function call() {
    return new (proto.krpc.schema.ProcedureCall.bind.call(null, arguments));
};