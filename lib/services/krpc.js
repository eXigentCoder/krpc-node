'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
const _ = require('lodash');
/**
 * @constructor KRPC
 * @name KRPC
 * @description Main kRPC service, used by clients to interact with basic server functionality.
 * @result {void}
 * @returns {void}
 */


/**
 * @augments KRPC
 * @description Returns the identifier for the current client.
 * @result {bytes}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getClientId = function getClientId() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetClientID', encodedArguments),
        decode: decoders.bytes
    };
};

/**
 * @augments KRPC
 * @description Returns some information about the server, such as the version.
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getStatus = function getStatus() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetStatus', encodedArguments),
        decode: proto.Status
    };
};

/**
 * @augments KRPC
 * @description Returns information on all services, procedures, classes, properties etc. provided by the server.
 * Can be used by client libraries to automatically create functionality such as stubs.
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getServices = function getServices() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetServices', encodedArguments),
        decode: proto.Services
    };
};

/**
 * @augments KRPC
 * @description Add a streaming request and return its identifier.
 * @param {Object} procedureCall
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.addStream = function addStream(procedureCall) {
    var argument = new proto.Argument(0, procedureCall.toArrayBuffer());
    var newCall = new proto.ProcedureCall('KRPC', 'AddStream', [argument]);
    return {
        call: newCall,
        decode: proto.Stream
    };
};

/**
 * @augments KRPC
 * @description Remove a streaming request.
 * @param {number} id
 * @result {void}
 * @returns {void}
 */
module.exports.removeStream = function removeStream(id) {
    let encodedArguments = [
        encoders.uInt64(id)
    ];
    return {
        call: buildProcedureCall('KRPC', 'RemoveStream', encodedArguments),
        decode: null
    };
};

/**
 * @augments KRPC
 * @description A list of RPC clients that are currently connected to the server.
 * Each entry in the list is a clients identifier, name and address.
 * @result {{bytes, string, string}[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getClients = function getClients() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_Clients', encodedArguments),
        decode: proto.List
    };
};

/**
 * @augments KRPC
 * @description Get the current game scene.
 * @result {Long} A long value representing the id for the KRPC.GameScene see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getCurrentGameScene = function getCurrentGameScene() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_CurrentGameScene', encodedArguments),
        decode: decoders.enum({0: 'SpaceCenter', 1: 'Flight', 2: 'TrackingStation', 3: 'EditorVAB', 4: 'EditorSPH'})
    };
};
