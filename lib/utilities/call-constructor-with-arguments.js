'use strict';
let proto = require('../utilities/proto');

module.exports = function callConstructorWithArguments(Constructor, inputArgs) {
    let args = [null];
    for (let i = 0; i < inputArgs.length; i++) {
        if (i > 1) {
            args.push(callConstructorWithArguments(proto.krpc.schema.Argument, i, inputArgs[i]));
        } else {
            args.push(inputArgs[i]);
        }

    }
    return new (Constructor.bind.apply(Constructor, args));
};