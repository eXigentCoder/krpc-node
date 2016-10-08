'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
 * </summary>
 * </doc>
 * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Get a communications object, representing the communication capability of a particular vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.comms = function comms(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Get the antenna object for a particular part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antenna = function antenna(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The names of the ground stations.
 * </summary>
 * </doc> * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getGroundStations = function getGroundStations() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('RemoteTech', 'get_GroundStations', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Get the part containing this antenna.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetPart = function antennaGetPart(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetHasConnection = function antennaGetHasConnection(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_HasConnection', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The object that the antenna is targetting.
 * This property can be used to set the target to <see cref="M:RemoteTech.Target.None" /> or <see cref="M:RemoteTech.Target.ActiveVessel" />.
 * To set the target to a celestial body, ground station or vessel see <see cref="M:RemoteTech.Antenna.TargetBody" />,
 * <see cref="M:RemoteTech.Antenna.TargetGroundStation" /> and <see cref="M:RemoteTech.Antenna.TargetVessel" />.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTarget = function antennaGetTarget(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Target', encodedArguments),
        decode: decoders.enum({0 : 'ActiveVessel', 1 : 'CelestialBody', 2 : 'GroundStation', 3 : 'Vessel', 4 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * The object that the antenna is targetting.
 * This property can be used to set the target to <see cref="M:RemoteTech.Target.None" /> or <see cref="M:RemoteTech.Target.ActiveVessel" />.
 * To set the target to a celestial body, ground station or vessel see <see cref="M:RemoteTech.Antenna.TargetBody" />,
 * <see cref="M:RemoteTech.Antenna.TargetGroundStation" /> and <see cref="M:RemoteTech.Antenna.TargetVessel" />.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value 
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTarget = function antennaSetTarget(antenna, value) {
    let encodedArguments = [
        encoders.uInt64(antenna), 
        encoders.enum({0 : 'ActiveVessel', 1 : 'CelestialBody', 2 : 'GroundStation', 3 : 'Vessel', 4 : 'None'})(value)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_Target', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetBody = function antennaGetTargetBody(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetBody', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetBody = function antennaSetTargetBody(antenna, value) {
    let encodedArguments = [
        encoders.uInt64(antenna), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetBody', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetGroundStation = function antennaGetTargetGroundStation(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetGroundStation', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetGroundStation = function antennaSetTargetGroundStation(antenna, value) {
    let encodedArguments = [
        encoders.uInt64(antenna), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetGroundStation', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetVessel = function antennaGetTargetVessel(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetVessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetVessel = function antennaSetTargetVessel(antenna, value) {
    let encodedArguments = [
        encoders.uInt64(antenna), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetVessel', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The signal delay between the this vessel and another vessel, in seconds.
 * </summary>
 *   <param name="other">
 *   </param>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} other - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsSignalDelayToVessel = function commsSignalDelayToVessel(comms, other) {
    let encodedArguments = [
        encoders.uInt64(comms), 
        encoders.uInt64(other)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_SignalDelayToVessel', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Get the vessel.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetVessel = function commsGetVessel(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Vessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasLocalControl = function commsGetHasLocalControl(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasLocalControl', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a flight computer on board.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasFlightComputer = function commsGetHasFlightComputer(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasFlightComputer', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has any connection.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasConnection = function commsGetHasConnection(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnection', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a connection to a ground station.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasConnectionToGroundStation = function commsGetHasConnectionToGroundStation(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnectionToGroundStation', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The shortest signal delay to the vessel, in seconds.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetSignalDelay = function commsGetSignalDelay(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelay', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The signal delay between the vessel and the closest ground station, in seconds.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetSignalDelayToGroundStation = function commsGetSignalDelayToGroundStation(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelayToGroundStation', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The antennas for this vessel.
 * </summary>
 * </doc>
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetAntennas = function commsGetAntennas(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Antennas', encodedArguments),
        decode: proto.krpc.schema.List
    };
};
