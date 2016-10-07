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
 * </doc> * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Get a communications object, representing the communication capability of a particular vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {RemoteTech.Comms}
 * @returns {{call :Object, decode: function}}
*/
module.exports.comms = function comms(vessel) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms', vessel),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Get the antenna object for a particular part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {RemoteTech.Antenna}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antenna = function antenna(part) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna', part),
        encode: [encoders.uInt64],
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
    return {
        call: buildProcedureCall('RemoteTech', 'get_GroundStations'),
        encode: [],
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Get the part containing this antenna.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetPart = function antennaGetPart(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Part', antenna),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetHasConnection = function antennaGetHasConnection(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_HasConnection', antenna),
        encode: [encoders.uInt64],
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
 * @param {RemoteTech.Antenna} antenna
 * @result {RemoteTech.Target}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTarget = function antennaGetTarget(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Target', antenna),
        encode: [encoders.uInt64],
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
 * @param {RemoteTech.Antenna} antenna
 * @param {RemoteTech.Target} value
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTarget = function antennaSetTarget(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_Target', antenna, value),
        encode: [encoders.uInt64, decoders.enum({0 : 'ActiveVessel', 1 : 'CelestialBody', 2 : 'GroundStation', 3 : 'Vessel', 4 : 'None'})],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetBody = function antennaGetTargetBody(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetBody', antenna),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetBody = function antennaSetTargetBody(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetBody', antenna, value),
        encode: [encoders.uInt64, encoders.uInt64],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetGroundStation = function antennaGetTargetGroundStation(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetGroundStation', antenna),
        encode: [encoders.uInt64],
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetGroundStation = function antennaSetTargetGroundStation(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetGroundStation', antenna, value),
        encode: [encoders.uInt64, encoders.string],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.antennaGetTargetVessel = function antennaGetTargetVessel(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetVessel', antenna),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {SpaceCenter.Vessel} value
 * @result {void}
 * @returns {void}
*/
module.exports.antennaSetTargetVessel = function antennaSetTargetVessel(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetVessel', antenna, value),
        encode: [encoders.uInt64, encoders.uInt64],
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
 * @param {RemoteTech.Comms} comms
 * @param {SpaceCenter.Vessel} other
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsSignalDelayToVessel = function commsSignalDelayToVessel(comms, other) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_SignalDelayToVessel', comms, other),
        encode: [encoders.uInt64, encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Get the vessel.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetVessel = function commsGetVessel(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Vessel', comms),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasLocalControl = function commsGetHasLocalControl(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasLocalControl', comms),
        encode: [encoders.uInt64],
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a flight computer on board.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasFlightComputer = function commsGetHasFlightComputer(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasFlightComputer', comms),
        encode: [encoders.uInt64],
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has any connection.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasConnection = function commsGetHasConnection(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnection', comms),
        encode: [encoders.uInt64],
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a connection to a ground station.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetHasConnectionToGroundStation = function commsGetHasConnectionToGroundStation(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnectionToGroundStation', comms),
        encode: [encoders.uInt64],
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The shortest signal delay to the vessel, in seconds.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetSignalDelay = function commsGetSignalDelay(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelay', comms),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The signal delay between the vessel and the closest ground station, in seconds.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetSignalDelayToGroundStation = function commsGetSignalDelayToGroundStation(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelayToGroundStation', comms),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The antennas for this vessel.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @result {RemoteTech.Antenna[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.commsGetAntennas = function commsGetAntennas(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Antennas', comms),
        encode: [encoders.uInt64],
        decode: proto.krpc.schema.List
    };
};
