'use strict';
var call = require('./procedure-call');

module.exports = {
    getStatus: getStatus
};

function getStatus() {
    return call('KRPC', 'GetStatus');
}