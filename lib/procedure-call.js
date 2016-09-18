'use strict';
let proto = require('./utilities/proto');
let callConstructorWithArguments = require('./utilities/call-constructor-with-arguments');

module.exports = function ProcedureCall() {
    return callConstructorWithArguments(proto.krpc.schema.ProcedureCall, arguments);
};