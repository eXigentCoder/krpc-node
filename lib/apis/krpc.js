'use strict';
let call = require('../procedure-call');
let proto = require('../utilities/proto');
module.exports = {
    status: {
        get: getStatus,
        decode: decodeStatus
    },
    services: {
        get: getServices,
        decode: decodeServices
    },
    clients: {
        get: getClients,
        decode: decodeClients
    },
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
    return call('KRPC', 'GetServices');
}

function decodeServices(data) {
    return proto.krpc.schema.Services.decode(data);
}

function getClients() {
    return call('KRPC', 'get_Clients');
}

function decodeClients(data) {
    return proto.custom.krpc.schema.Clients.decode(data);
}

function getCurrentGameScene() {
    return call('KRPC', 'get_CurrentGameScene');
}

function addStream() {
    return call('KRPC', 'AddStream');
}