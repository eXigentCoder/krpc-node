'use strict';
var call = require('./call');

module.exports = {
    getStatus: getStatus
};

function getStatus() {
    return call('KRPC', 'GetStatus');
}