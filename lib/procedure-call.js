'use strict';
let proto = require('./utilities/proto');
let _ = require('lodash');

module.exports = function BuildProcedureCall(service, procedure, encodedArguments) {
    if (_.isNil(service)) {
        throw new Error("Service name cannot be null");
    }
    if (_.isNil(procedure)) {
        throw new Error("Procedure name cannot be null");
    }
    if (_.isNil(encodedArguments)) {
        encodedArguments = [];
    }
    let argumentCounter = 0;
    let args = encodedArguments.map(function (argValue) {
        let arg = proto.root().Argument.create(argumentCounter, argValue.buffer);
        argumentCounter++;
        return arg;
    });
    var call = proto.root().ProcedureCall.create({service, procedure, arguments: args});
    var errMsg = proto.root().ProcedureCall.verify(call);
    return call;
};