'use strict';
let call = require('../procedure-call');
let proto = require('../utilities/proto');
let ProtoBuf = require('protobufjs');
let _ = require('lodash');

module.exports = {
    getStatus: getStatus,
    status: {
        get: getStatusCall,
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
    },
    decode: decode
};

function getStatus() {
    return {
        call: call('KRPC', 'GetStatus'),
        decode: proto.krpc.schema.Status
    };
}

function getStatusCall() {
    return call('KRPC', 'GetStatus');
}

function decodeStatus(data) {
    return decode(data, proto.krpc.schema.Status);
}

function getServices() {
    return call('KRPC', 'GetServices');
}

function decodeServices(data) {
    return decode(data, proto.krpc.schema.Services);
}

function getClients() {
    return call('KRPC', 'get_Clients');
}

function decodeClients(data) {
    return decode(data, proto.custom.krpc.schema.Clients);
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

function decode(data, type) {
    if (type instanceof ProtoBuf.Builder.Enum) {
        let buffer = new Buffer(data.toArrayBuffer());
        let enumVal = buffer.readUInt8() / 2;
        return proto.getNameFromEnum(type, enumVal);
    }
    if (type.decode && _.isFunction(type.decode)) {
        return type.decode(data);
    }
}