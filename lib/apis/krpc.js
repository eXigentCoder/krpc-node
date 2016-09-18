'use strict';
let call = require('../procedure-call');
let proto = require('../utilities/proto');
let ProtoBuf = require('protobufjs');
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
    currentGameScene: {
        get: getCurrentGameScene,
        decode: decodeCurrentGameScene
    },
    stream: {
        add: addStream,
        remove: removeStream
    }
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
function decodeCurrentGameScene(data) {
    return decode(data, proto.custom.krpc.schema.GameScene);
}

function addStream() {
    return call('KRPC', 'AddStream');
}

function removeStream(id) {
    throw new Error('not implemented');
}

function decode(value, type) {
    if (type instanceof ProtoBuf.Builder.Enum) {
        let buffer = new Buffer(value.toArrayBuffer());
        let enumVal = buffer.readUInt8() / 2;
        return proto.getNameFromEnum(type, enumVal);
    }
}