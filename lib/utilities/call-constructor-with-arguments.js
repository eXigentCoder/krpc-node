'use strict';
let proto = require('../utilities/proto');

module.exports = function callConstructorWithArguments(Constructor, inputArgs) {
    let args = [null];
    let argumentCounter = 0;
    for (let i = 0; i < inputArgs.length; i++) {
        if (i > 1) {
            var argValue = inputArgs[i];
            var arg = new proto.krpc.schema.Argument(argumentCounter, argValue);
            args.push(arg);
            argumentCounter++;

        } else {
            args.push(inputArgs[i]);
        }

    }
    return new (Constructor.bind.apply(Constructor, args));
};