'use strict';
let chai = require('chai');
let dirtyChai = require('dirty-chai');
chai.use(dirtyChai);

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

process.on('uncaughtException', function(err) {
    console.error('Uncaught Exception', err, err.stack);
    throw err;
});

after(function() {
    // eslint-disable-next-line no-process-exit
    process.exit(0);
});
