'use strict';
var call = require('./../procedure-call');
var proto = require('./../utilities/proto');
module.exports = {
    status: {
        get: getStatus,
        decode: decodeStatus
    },
    getServices: getServices,
    getClients: getClients,
    getCurrentGameScene: getCurrentGameScene,
    addStream: addStream
};

function getStatus() {
    return call('KRPC', 'GetStatus');
}

function decodeStatus(data) {
    return proto.krpc.schema.Status.decode(data);
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