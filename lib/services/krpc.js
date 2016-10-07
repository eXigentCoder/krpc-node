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
 * </doc> * @result {void}
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
    return {
        call: buildProcedureCall('KRPC', 'GetStatus'),
        encode: [],
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
    return {
        call: buildProcedureCall('KRPC', 'GetServices'),
        encode: [],
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
    return {
        call: buildProcedureCall('KRPC', 'AddStream', call),
        encode: [proto.krpc.schema.ProcedureCall],
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
    return {
        call: buildProcedureCall('KRPC', 'RemoveStream', id),
        encode: [encoders.uInt64],
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
    return {
        call: buildProcedureCall('KRPC', 'get_Clients'),
        encode: [],
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Get the current game scene.
 * </summary>
 * </doc> * @result {KRPC.GameScene}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getCurrentGameScene = function getCurrentGameScene() {
    return {
        call: buildProcedureCall('KRPC', 'get_CurrentGameScene'),
        encode: [],
        decode: decoders.enum({0 : 'SpaceCenter', 1 : 'Flight', 2 : 'TrackingStation', 3 : 'EditorVAB', 4 : 'EditorSPH'})
    };
};
