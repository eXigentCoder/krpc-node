'use strict';
var call = require('./procedure-call');

module.exports = {
    getStatus: getStatus,
    getServices: getServices,
    getClients: getClients,
    getCurrentGameScene: getCurrentGameScene,
    addStream: addStream
};

function getStatus() {
    return call('KRPC', 'GetStatus');
}

function getServices() {
    return call('KRPC', 'GetServices ');
}

function getClients() {
    return call('KRPC', 'get_Clients');
}

function getCurrentGameScene() {
    return call('KRPC', 'get_CurrentGameScene');
}

function addStream() {
    return call('KRPC', 'AddStream');
}