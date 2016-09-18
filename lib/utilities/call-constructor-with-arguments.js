'use strict';

module.exports = function callConstructorWithArguments(Constructor, inputArgs) {
    let args = [null];
    for (let i = 0; i < inputArgs.length; i++) {
        args.push(inputArgs[i]);
    }
    return new (Constructor.bind.apply(Constructor, args));
};