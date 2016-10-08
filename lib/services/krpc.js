'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * Main kRPC service, used by clients to interact with basic server functionality.
 * </summary>
 * </doc>
 * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Returns some information about the server, such as the version.
 * </summary>
 * </doc> * @result {Object} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getStatus = function getStatus() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetStatus', encodedArguments),
        decode: proto.krpc.schema.Status
    };
};

/**
 * <doc>
 *   <summary>
 * Returns information on all services, procedures, classes, properties etc. provided by the server.
 * Can be used by client libraries to automatically create functionality such as stubs.
 * </summary>
 * </doc> * @result {Object} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getServices = function getServices() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetServices', encodedArguments),
        decode: proto.krpc.schema.Services
    };
};

/**
 * <doc>
 *   <summary>
 * Add a streaming request and return its identifier.
 * </summary>
 * </doc>
 * @param {Object} call 
 * @result {Object} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.addStream = function addStream(call) {
    let encodedArguments = [
        new proto.krpc.schema.ProcedureCall(call)
    ];
    return {
        call: buildProcedureCall('KRPC', 'AddStream', encodedArguments),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Remove a streaming request.
 * </summary>
 * </doc>
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
 * <doc>
 *   <summary>
 * A list of RPC clients that are currently connected to the server.
 * Each entry in the list is a clients identifier, name and address.
 * </summary>
 * </doc> * @result {{bytes, string, string}[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getClients = function getClients() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_Clients', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Get the current game scene.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the KRPC.GameScene see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getCurrentGameScene = function getCurrentGameScene() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_CurrentGameScene', encodedArguments),
        decode: decoders.enum({0 : 'SpaceCenter', 1 : 'Flight', 2 : 'TrackingStation', 3 : 'EditorVAB', 4 : 'EditorSPH'})
    };
};
