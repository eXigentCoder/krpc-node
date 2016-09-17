'use strict';
var proto = require('./proto');
var callConstructorWithArguments = require('./call-constructor-with-arguments');

module.exports = function ProcedureCall() {
    return callConstructorWithArguments(proto.krpc.schema.ProcedureCall, arguments);
};