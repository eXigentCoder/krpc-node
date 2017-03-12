'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor RemoteTech
 * @name RemoteTech
 * @description This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/139167-12-remotetech-v180-2016-10-15/">RemoteTech</a>.
 * @result {void}
 * @returns {void}
 */


/**
 * @augments RemoteTech
 * @description Get a communications object, representing the communication capability of a particular vessel.
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel
 * @result {Long} A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description Get the antenna object for a particular part.
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part
 * @result {Long} A long value representing the id for the RemoteTech.Antenna
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
 * @augments RemoteTech
 * @description Whether RemoteTech is installed.
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getAvailable = function getAvailable() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('RemoteTech', 'get_Available', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments RemoteTech
 * @description The names of the ground stations.
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getGroundStations = function getGroundStations() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('RemoteTech', 'get_GroundStations', encodedArguments),
        decode: proto.List
    };
};

/**
 * @augments RemoteTech
 * @description Get the part containing this antenna.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @result {Long} A long value representing the id for the SpaceCenter.Part
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
 * @augments RemoteTech
 * @description Whether the antenna has a connection.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
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
 * @augments RemoteTech
 * @description The object that the antenna is targetting.
 * This property can be used to set the target to {@link M:RemoteTech.Target.None} or {@link M:RemoteTech.Target.ActiveVessel}.
 * To set the target to a celestial body, ground station or vessel see {@link M:RemoteTech.Antenna.TargetBody},
 * {@link M:RemoteTech.Antenna.TargetGroundStation} and {@link M:RemoteTech.Antenna.TargetVessel}.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @result {Long} A long value representing the id for the RemoteTech.Target
 * @returns {{call :Object, decode: function}}
 */
module.exports.antennaGetTarget = function antennaGetTarget(antenna) {
    let encodedArguments = [
        encoders.uInt64(antenna)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_get_Target', encodedArguments),
        decode: decoders.enum({0: 'ActiveVessel', 1: 'CelestialBody', 2: 'GroundStation', 3: 'Vessel', 4: 'None'})
    };
};

/**
 * @augments RemoteTech
 * @description The object that the antenna is targetting.
 * This property can be used to set the target to {@link M:RemoteTech.Target.None} or {@link M:RemoteTech.Target.ActiveVessel}.
 * To set the target to a celestial body, ground station or vessel see {@link M:RemoteTech.Antenna.TargetBody},
 * {@link M:RemoteTech.Antenna.TargetGroundStation} and {@link M:RemoteTech.Antenna.TargetVessel}.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @param {Long} value - A long value representing the id for the RemoteTech.Target
 * @result {void}
 * @returns {void}
 */
module.exports.antennaSetTarget = function antennaSetTarget(antenna, value) {
    let encodedArguments = [
        encoders.uInt64(antenna),
        encoders.enum({0: 'ActiveVessel', 1: 'CelestialBody', 2: 'GroundStation', 3: 'Vessel', 4: 'None'})(value)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Antenna_set_Target', encodedArguments),
        decode: null
    };
};

/**
 * @augments RemoteTech
 * @description The celestial body the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @result {Long} A long value representing the id for the SpaceCenter.CelestialBody
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
 * @augments RemoteTech
 * @description The celestial body the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody
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
 * @augments RemoteTech
 * @description The ground station the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
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
 * @augments RemoteTech
 * @description The ground station the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
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
 * @augments RemoteTech
 * @description The vessel the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @result {Long} A long value representing the id for the SpaceCenter.Vessel
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
 * @augments RemoteTech
 * @description The vessel the antenna is targetting.
 * @param {Long} antenna - A long value representing the id for the RemoteTech.Antenna
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel
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
 * @augments RemoteTech
 * @description The signal delay between the this vessel and another vessel, in seconds.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
 * @param {Long} other - A long value representing the id for the SpaceCenter.Vessel
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
 * @augments RemoteTech
 * @description Get the vessel.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
 * @result {Long} A long value representing the id for the SpaceCenter.Vessel
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
 * @augments RemoteTech
 * @description Whether the vessel can be controlled locally.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description Whether the vessel has a flight computer on board.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description Whether the vessel has any connection.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description Whether the vessel has a connection to a ground station.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description The shortest signal delay to the vessel, in seconds.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description The signal delay between the vessel and the closest ground station, in seconds.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
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
 * @augments RemoteTech
 * @description The antennas for this vessel.
 * @param {Long} comms - A long value representing the id for the RemoteTech.Comms
 * @result {Long[]} A list of long values representing the ids for the RemoteTech.Antenna
 * @returns {{call :Object, decode: function}}
 */
module.exports.commsGetAntennas = function commsGetAntennas(comms) {
    let encodedArguments = [
        encoders.uInt64(comms)
    ];
    return {
        call: buildProcedureCall('RemoteTech', 'Comms_get_Antennas', encodedArguments),
        decode: proto.List
    };
};
