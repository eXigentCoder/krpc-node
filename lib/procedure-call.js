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
        let arg = new proto.Argument(argumentCounter, argValue.buffer);
        argumentCounter++;
        return arg;
    });
    return new proto.ProcedureCall(service, procedure, args);
};