'use strict';
var proto = require('./utilities/proto');
var callConstructorWithArguments = require('./utilities/call-constructor-with-arguments');

module.exports = function ProcedureCall() {
    return callConstructorWithArguments(proto.krpc.schema.ProcedureCall, arguments);
};