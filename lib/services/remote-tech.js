'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
 * </summary>
 * </doc>*/


/**
 * <doc>
 *   <summary>
 * Get a communications object, representing the communication capability of a particular vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @returns {RemoteTech.Comms}
*/
module.exports.comms = function comms(vessel) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms', vessel),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Get the antenna object for a particular part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @returns {RemoteTech.Antenna}
*/
module.exports.antenna = function antenna(part) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna', part),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * The names of the ground stations.
 * </summary>
 * </doc> * @returns {string[]}
*/
module.exports.getGroundStations = function getGroundStations() {
    return {
        call: buildProcedureCall('RemoteTech', 'get_GroundStations'),
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
 * @returns {SpaceCenter.Part}
*/
module.exports.antennaGetPart = function antennaGetPart(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Part', antenna),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @returns {boolean}
*/
module.exports.antennaGetHasConnection = function antennaGetHasConnection(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_HasConnection', antenna),
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
 * @returns {RemoteTech.Target}
*/
module.exports.antennaGetTarget = function antennaGetTarget(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Target', antenna),
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
*/
module.exports.antennaSetTarget = function antennaSetTarget(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_Target', antenna, value),
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
 * @returns {SpaceCenter.CelestialBody}
*/
module.exports.antennaGetTargetBody = function antennaGetTargetBody(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetBody', antenna),
        decode: proto.krpc.schema.Stream
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
*/
module.exports.antennaSetTargetBody = function antennaSetTargetBody(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetBody', antenna, value),
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
 * @returns {string}
*/
module.exports.antennaGetTargetGroundStation = function antennaGetTargetGroundStation(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetGroundStation', antenna),
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
*/
module.exports.antennaSetTargetGroundStation = function antennaSetTargetGroundStation(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetGroundStation', antenna, value),
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
 * @returns {SpaceCenter.Vessel}
*/
module.exports.antennaGetTargetVessel = function antennaGetTargetVessel(antenna) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_TargetVessel', antenna),
        decode: proto.krpc.schema.Stream
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
*/
module.exports.antennaSetTargetVessel = function antennaSetTargetVessel(antenna, value) {
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_TargetVessel', antenna, value),
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
 * @returns {number}
*/
module.exports.commsSignalDelayToVessel = function commsSignalDelayToVessel(comms, other) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_SignalDelayToVessel', comms, other),
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
 * @returns {SpaceCenter.Vessel}
*/
module.exports.commsGetVessel = function commsGetVessel(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Vessel', comms),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {boolean}
*/
module.exports.commsGetHasLocalControl = function commsGetHasLocalControl(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasLocalControl', comms),
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
 * @returns {boolean}
*/
module.exports.commsGetHasFlightComputer = function commsGetHasFlightComputer(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasFlightComputer', comms),
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
 * @returns {boolean}
*/
module.exports.commsGetHasConnection = function commsGetHasConnection(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnection', comms),
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
 * @returns {boolean}
*/
module.exports.commsGetHasConnectionToGroundStation = function commsGetHasConnectionToGroundStation(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_HasConnectionToGroundStation', comms),
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
 * @returns {number}
*/
module.exports.commsGetSignalDelay = function commsGetSignalDelay(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelay', comms),
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
 * @returns {number}
*/
module.exports.commsGetSignalDelayToGroundStation = function commsGetSignalDelayToGroundStation(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_SignalDelayToGroundStation', comms),
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
 * @returns {RemoteTech.Antenna[]}
*/
module.exports.commsGetAntennas = function commsGetAntennas(comms) {
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Antennas', comms),
        decode: proto.krpc.schema.List
    };
};
