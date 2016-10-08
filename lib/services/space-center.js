'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * Provides functionality to interact with Kerbal Space Program. This includes controlling
 * the active vessel, managing its resources, planning maneuver nodes and auto-piloting.
 * </summary>
 * </doc>
 * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Clears the current target.
 * </summary>
 * </doc> * @result {void}
 * @returns {void}
*/
module.exports.clearTarget = function clearTarget() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'ClearTarget', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a list of vessels from the given <paramref name="craftDirectory" /> that can be launched.
 * </summary>
 *   <param name="craftDirectory">Name of the directory in the current saves "Ships" directory. For example <c>"VAB"</c> or <c>"SPH"</c>.</param>
 * </doc>
 * @param {string} craftDirectory 
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.launchableVessels = function launchableVessels(craftDirectory) {
    let encodedArguments = [
        encoders.string(craftDirectory)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchableVessels', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Launch a vessel.
 * </summary>
 *   <param name="craftDirectory">Name of the directory in the current saves "Ships" directory, that contains the craft file. For example <c>"VAB"</c> or <c>"SPH"</c>.</param>
 *   <param name="name">Name of the vessel to launch. This is the name of the ".craft" file in the save directory, without the ".craft" file extension.</param>
 *   <param name="launchSite">Name of the launch site. For example <c>"LaunchPad"</c> or <c>"Runway"</c>.</param>
 * </doc>
 * @param {string} craftDirectory 
 * @param {string} name 
 * @param {string} launchSite 
 * @result {void}
 * @returns {void}
*/
module.exports.launchVessel = function launchVessel(craftDirectory, name, launchSite) {
    let encodedArguments = [
        encoders.string(craftDirectory), 
        encoders.string(name), 
        encoders.string(launchSite)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVessel', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Launch a new vessel from the VAB onto the launchpad.
 * </summary>
 *   <param name="name">Name of the vessel to launch.</param>
 *   <remarks>
 * This is equivalent to calling <see cref="M:SpaceCenter.LaunchVessel" /> with the craft directory set to "VAB" and the launch site set to "LaunchPad".
 * </remarks>
 * </doc>
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.launchVesselFromVab = function launchVesselFromVab(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVesselFromVAB', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Launch a new vessel from the SPH onto the runway.
 * </summary>
 *   <param name="name">Name of the vessel to launch.</param>
 *   <remarks>
 * This is equivalent to calling <see cref="M:SpaceCenter.LaunchVessel" /> with the craft directory set to "SPH" and the launch site set to "Runway".
 * </remarks>
 * </doc>
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.launchVesselFromSph = function launchVesselFromSph(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVesselFromSPH', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Save the game with a given name.
 * This will create a save file called <c>name.sfs</c> in the folder of the current save game.
 * </summary>
 * </doc>
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.save = function save(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Save', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Load the game with the given name.
 * This will create a load a save file called <c>name.sfs</c> from the folder of the current save game.
 * </summary>
 * </doc>
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.load = function load(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Load', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Save a quicksave.
 * </summary>
 *   <remarks>
 * This is the same as calling <see cref="M:SpaceCenter.Save" /> with the name "quicksave".
 * </remarks>
 * </doc> * @result {void}
 * @returns {void}
*/
module.exports.quicksave = function quicksave() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'Quicksave', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Load a quicksave.
 * </summary>
 *   <remarks>
 * This is the same as calling <see cref="M:SpaceCenter.Load" /> with the name "quicksave".
 * </remarks>
 * </doc> * @result {void}
 * @returns {void}
*/
module.exports.quickload = function quickload() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'Quickload', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Returns <c>true</c> if regular "on-rails" time warp can be used, at the specified warp
 * <paramref name="factor" />. The maximum time warp rate is limited by various things,
 * including how close the active vessel is to a planet. See
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Time_warp">the KSP wiki</a> for details.
 * </summary>
 *   <param name="factor">The warp factor to check.</param>
 * </doc>
 * @param {number} factor 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.canRailsWarpAt = function canRailsWarpAt(factor) {
    let encodedArguments = [
        encoders.sInt32(factor)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CanRailsWarpAt', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Uses time acceleration to warp forward to a time in the future, specified
 * by universal time <paramref name="ut" />. This call blocks until the desired
 * time is reached. Uses regular "on-rails" or physical time warp as appropriate.
 * For example, physical time warp is used when the active vessel is traveling
 * through an atmosphere. When using regular "on-rails" time warp, the warp
 * rate is limited by <paramref name="maxRailsRate" />, and when using physical
 * time warp, the warp rate is limited by <paramref name="maxPhysicsRate" />.
 * </summary>
 *   <param name="ut">The universal time to warp to, in seconds.</param>
 *   <param name="maxRailsRate">The maximum warp rate in regular "on-rails" time warp.</param>
 *   <param name="maxPhysicsRate">The maximum warp rate in physical time warp.</param>
 *   <returns>When the time warp is complete.</returns>
 * </doc>
 * @param {number} ut 
 * @param {number} maxRailsRate 
 * @param {number} maxPhysicsRate 
 * @result {void}
 * @returns {void}
*/
module.exports.warpTo = function warpTo(ut, maxRailsRate, maxPhysicsRate) {
    let encodedArguments = [
        encoders.double(ut), 
        encoders.float(maxRailsRate), 
        encoders.float(maxPhysicsRate)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'WarpTo', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Converts a position vector from one reference frame to another.
 * </summary>
 *   <param name="position">Position vector in reference frame <paramref name="from" />.</param>
 *   <param name="from">The reference frame that the position vector is in.</param>
 *   <param name="to">The reference frame to covert the position vector to.</param>
 *   <returns>The corresponding position vector in reference frame <paramref name="to" />.</returns>
 * </doc>
 * @param {{number, number, number}} position 
 * @param {Long} from - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} to - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformPosition = function transformPosition(position, from, to) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(position), 
        encoders.uInt64(from), 
        encoders.uInt64(to)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Converts a direction vector from one reference frame to another.
 * </summary>
 *   <param name="direction">Direction vector in reference frame <paramref name="from" />.</param>
 *   <param name="from">The reference frame that the direction vector is in.</param>
 *   <param name="to">The reference frame to covert the direction vector to.</param>
 *   <returns>The corresponding direction vector in reference frame <paramref name="to" />.</returns>
 * </doc>
 * @param {{number, number, number}} direction 
 * @param {Long} from - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} to - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformDirection = function transformDirection(direction, from, to) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(direction), 
        encoders.uInt64(from), 
        encoders.uInt64(to)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformDirection', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Converts a rotation from one reference frame to another.
 * </summary>
 *   <param name="rotation">Rotation in reference frame <paramref name="from" />.</param>
 *   <param name="from">The reference frame that the rotation is in.</param>
 *   <param name="to">The corresponding rotation in reference frame <paramref name="to" />.</param>
 *   <returns>The corresponding rotation in reference frame <paramref name="to" />.</returns>
 * </doc>
 * @param {{number, number, number, number}} rotation 
 * @param {Long} from - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} to - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformRotation = function transformRotation(rotation, from, to) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(rotation), 
        encoders.uInt64(from), 
        encoders.uInt64(to)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformRotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Converts a velocity vector (acting at the specified position vector) from one
 * reference frame to another. The position vector is required to take the
 * relative angular velocity of the reference frames into account.
 * </summary>
 *   <param name="position">Position vector in reference frame <paramref name="from" />.</param>
 *   <param name="velocity">Velocity vector in reference frame <paramref name="from" />.</param>
 *   <param name="from">The reference frame that the position and velocity vectors are in.</param>
 *   <param name="to">The reference frame to covert the velocity vector to.</param>
 *   <returns>The corresponding velocity in reference frame <paramref name="to" />.</returns>
 * </doc>
 * @param {{number, number, number}} position 
 * @param {{number, number, number}} velocity 
 * @param {Long} from - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} to - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformVelocity = function transformVelocity(position, velocity, from, to) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(position), 
        new proto.krpc.schema.Tuple(velocity), 
        encoders.uInt64(from), 
        encoders.uInt64(to)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformVelocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getActiveVessel = function getActiveVessel() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_ActiveVessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc>
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.setActiveVessel = function setActiveVessel(value) {
    let encodedArguments = [
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_ActiveVessel', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all the vessels in the game.
 * </summary>
 * </doc> * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getVessels = function getVessels() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Vessels', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A dictionary of all celestial bodies (planets, moons, etc.) in the game,
 * keyed by the name of the body.
 * </summary>
 * </doc> * @result {key : Long} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getBodies = function getBodies() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Bodies', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetBody = function getTargetBody() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetBody', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc>
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetBody = function setTargetBody(value) {
    let encodedArguments = [
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetBody', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetVessel = function getTargetVessel() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetVessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc>
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetVessel = function setTargetVessel(value) {
    let encodedArguments = [
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetVessel', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetDockingPort = function getTargetDockingPort() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetDockingPort', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc>
 * @param {Long} value - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetDockingPort = function setTargetDockingPort(value) {
    let encodedArguments = [
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetDockingPort', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The waypoint manager.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.WaypointManager see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWaypointManager = function getWaypointManager() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WaypointManager', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An object that can be used to control the camera.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getCamera = function getCamera() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Camera', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The current universal time in seconds.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getUt = function getUt() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_UT', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The value of the <a href="https://en.wikipedia.org/wiki/Gravitational_constant">gravitational constant</a>
 * G in <math>N(m/kg)^2</math>.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getG = function getG() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_G', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The current time warp mode. Returns <see cref="M:SpaceCenter.WarpMode.None" /> if time
 * warp is not active, <see cref="M:SpaceCenter.WarpMode.Rails" /> if regular "on-rails" time warp
 * is active, or <see cref="M:SpaceCenter.WarpMode.Physics" /> if physical time warp is active.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the SpaceCenter.WarpMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWarpMode = function getWarpMode() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpMode', encodedArguments),
        decode: decoders.enum({0 : 'Rails', 1 : 'Physics', 2 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current warp rate. This is the rate at which time is passing for
 * either on-rails or physical time warp. For example, a value of 10 means
 * time is passing 10x faster than normal. Returns 1 if time warp is not
 * active.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWarpRate = function getWarpRate() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpRate', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The current warp factor. This is the index of the rate at which time
 * is passing for either regular "on-rails" or physical time warp. Returns 0
 * if time warp is not active. When in on-rails time warp, this is equal to
 * <see cref="M:SpaceCenter.RailsWarpFactor" />, and in physics time warp, this is equal to
 * <see cref="M:SpaceCenter.PhysicsWarpFactor" />.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWarpFactor = function getWarpFactor() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpFactor', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The time warp rate, using regular "on-rails" time warp. A value between
 * 0 and 7 inclusive. 0 means no time warp. Returns 0 if physical time warp
 * is active.
 * 
 * If requested time warp factor cannot be set, it will be set to the next
 * lowest possible value. For example, if the vessel is too close to a
 * planet. See <a href="http://wiki.kerbalspaceprogram.com/wiki/Time_warp">
 * the KSP wiki</a> for details.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getRailsWarpFactor = function getRailsWarpFactor() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_RailsWarpFactor', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The time warp rate, using regular "on-rails" time warp. A value between
 * 0 and 7 inclusive. 0 means no time warp. Returns 0 if physical time warp
 * is active.
 * 
 * If requested time warp factor cannot be set, it will be set to the next
 * lowest possible value. For example, if the vessel is too close to a
 * planet. See <a href="http://wiki.kerbalspaceprogram.com/wiki/Time_warp">
 * the KSP wiki</a> for details.
 * </summary>
 * </doc>
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.setRailsWarpFactor = function setRailsWarpFactor(value) {
    let encodedArguments = [
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_RailsWarpFactor', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The physical time warp rate. A value between 0 and 3 inclusive. 0 means
 * no time warp. Returns 0 if regular "on-rails" time warp is active.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getPhysicsWarpFactor = function getPhysicsWarpFactor() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_PhysicsWarpFactor', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The physical time warp rate. A value between 0 and 3 inclusive. 0 means
 * no time warp. Returns 0 if regular "on-rails" time warp is active.
 * </summary>
 * </doc>
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.setPhysicsWarpFactor = function setPhysicsWarpFactor(value) {
    let encodedArguments = [
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'set_PhysicsWarpFactor', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current maximum regular "on-rails" warp factor that can be set.
 * A value between 0 and 7 inclusive.  See
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Time_warp">the KSP wiki</a> for details.
 * </summary>
 * </doc> * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getMaximumRailsWarpFactor = function getMaximumRailsWarpFactor() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_MaximumRailsWarpFactor', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Whether <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a> is installed.
 * </summary>
 * </doc> * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.getFarAvailable = function getFarAvailable() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('SpaceCenter', 'get_FARAvailable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Engage the auto-pilot.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotEngage = function autoPilotEngage(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Engage', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Disengage the auto-pilot.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotDisengage = function autoPilotDisengage(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Disengage', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Blocks until the vessel is pointing in the target direction and has the target roll (if set).
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotWait = function autoPilotWait(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Wait', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set target pitch and heading angles.
 * </summary>
 *   <param name="pitch">Target pitch angle, in degrees between -90° and +90°.</param>
 *   <param name="heading">Target heading angle, in degrees between 0° and 360°.</param>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} pitch 
 * @param {number} heading 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotTargetPitchAndHeading = function autoPilotTargetPitchAndHeading(autoPilot, pitch, heading) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.float(pitch), 
        encoders.float(heading)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_TargetPitchAndHeading', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the direction the ship has been asked
 * to point in and the direction it is pointing in. Returns zero if the auto-pilot
 * has not been engaged and SAS is not enabled or is in stability assist mode.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetError = function autoPilotGetError(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_Error', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target pitch.
 * Returns zero if the auto-pilot has not been engaged.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetPitchError = function autoPilotGetPitchError(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_PitchError', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target heading.
 * Returns zero if the auto-pilot has not been engaged.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetHeadingError = function autoPilotGetHeadingError(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_HeadingError', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target roll.
 * Returns zero if the auto-pilot has not been engaged or no target roll is set.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollError = function autoPilotGetRollError(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollError', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame for the target direction (<see cref="M:SpaceCenter.AutoPilot.TargetDirection" />).
 * </summary>
 *   <remarks>
 * An error will be thrown if this property is set to a reference frame that rotates with the vessel being controlled,
 * as it is impossible to rotate the vessel in such a reference frame. 
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetReferenceFrame = function autoPilotGetReferenceFrame(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame for the target direction (<see cref="M:SpaceCenter.AutoPilot.TargetDirection" />).
 * </summary>
 *   <remarks>
 * An error will be thrown if this property is set to a reference frame that rotates with the vessel being controlled,
 * as it is impossible to rotate the vessel in such a reference frame. 
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetReferenceFrame = function autoPilotSetReferenceFrame(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetPitch = function autoPilotGetTargetPitch(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetPitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetPitch = function autoPilotSetTargetPitch(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetPitch', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetHeading = function autoPilotGetTargetHeading(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetHeading', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetHeading = function autoPilotSetTargetHeading(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetHeading', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetRoll = function autoPilotGetTargetRoll(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetRoll', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetRoll = function autoPilotSetTargetRoll(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetRoll', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetDirection = function autoPilotGetTargetDirection(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetDirection', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetDirection = function autoPilotSetTargetDirection(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetDirection', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SAS" /></remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetSas = function autoPilotGetSas(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_SAS', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SAS" /></remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetSas = function autoPilotSetSas(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_SAS', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SASMode" /></remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.SASMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetSasMode = function autoPilotGetSasMode(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_SASMode', encodedArguments),
        decode: decoders.enum({0 : 'StabilityAssist', 1 : 'Maneuver', 2 : 'Prograde', 3 : 'Retrograde', 4 : 'Normal', 5 : 'AntiNormal', 6 : 'Radial', 7 : 'AntiRadial', 8 : 'Target', 9 : 'AntiTarget'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SASMode" /></remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.SASMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetSasMode = function autoPilotSetSasMode(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.enum({0 : 'StabilityAssist', 1 : 'Maneuver', 2 : 'Prograde', 3 : 'Retrograde', 4 : 'Normal', 5 : 'AntiNormal', 6 : 'Radial', 7 : 'AntiRadial', 8 : 'Target', 9 : 'AntiTarget'})(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_SASMode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The threshold at which the autopilot will try to match the target roll angle, if any.
 * Defaults to 5 degrees.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollThreshold = function autoPilotGetRollThreshold(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollThreshold', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The threshold at which the autopilot will try to match the target roll angle, if any.
 * Defaults to 5 degrees.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetRollThreshold = function autoPilotSetRollThreshold(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_RollThreshold', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of time that the vessel should need to come to a complete stop.
 * This determines the maximum angular velocity of the vessel.
 * A vector of three stopping times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 0.5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetStoppingTime = function autoPilotGetStoppingTime(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_StoppingTime', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of time that the vessel should need to come to a complete stop.
 * This determines the maximum angular velocity of the vessel.
 * A vector of three stopping times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 0.5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetStoppingTime = function autoPilotSetStoppingTime(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_StoppingTime', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The time the vessel should take to come to a stop pointing in the target direction.
 * This determines the angular acceleration used to decelerate the vessel.
 * A vector of three times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetDecelerationTime = function autoPilotGetDecelerationTime(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_DecelerationTime', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The time the vessel should take to come to a stop pointing in the target direction.
 * This determines the angular acceleration used to decelerate the vessel.
 * A vector of three times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetDecelerationTime = function autoPilotSetDecelerationTime(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_DecelerationTime', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The angle at which the autopilot considers the vessel to be pointing close to the target.
 * This determines the midpoint of the target velocity attenuation function.
 * A vector of three angles, in degrees, one for each of the pitch, roll and yaw axes.
 * Defaults to 1° for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetAttenuationAngle = function autoPilotGetAttenuationAngle(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_AttenuationAngle', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The angle at which the autopilot considers the vessel to be pointing close to the target.
 * This determines the midpoint of the target velocity attenuation function.
 * A vector of three angles, in degrees, one for each of the pitch, roll and yaw axes.
 * Defaults to 1° for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetAttenuationAngle = function autoPilotSetAttenuationAngle(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_AttenuationAngle', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the rotation rate controllers PID parameters should be automatically tuned using the
 * vessels moment of inertia and available torque. Defaults to <c>true</c>.
 * See <see cref="M:SpaceCenter.AutoPilot.TimeToPeak" /> and  <see cref="M:SpaceCenter.AutoPilot.Overshoot" />.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetAutoTune = function autoPilotGetAutoTune(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_AutoTune', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the rotation rate controllers PID parameters should be automatically tuned using the
 * vessels moment of inertia and available torque. Defaults to <c>true</c>.
 * See <see cref="M:SpaceCenter.AutoPilot.TimeToPeak" /> and  <see cref="M:SpaceCenter.AutoPilot.Overshoot" />.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetAutoTune = function autoPilotSetAutoTune(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_AutoTune', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target time to peak used to autotune the PID controllers.
 * A vector of three times, in seconds, for each of the pitch, roll and yaw axes.
 * Defaults to 3 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTimeToPeak = function autoPilotGetTimeToPeak(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TimeToPeak', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The target time to peak used to autotune the PID controllers.
 * A vector of three times, in seconds, for each of the pitch, roll and yaw axes.
 * Defaults to 3 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTimeToPeak = function autoPilotSetTimeToPeak(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TimeToPeak', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target overshoot percentage used to autotune the PID controllers.
 * A vector of three values, between 0 and 1, for each of the pitch, roll and yaw axes.
 * Defaults to 0.01 for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetOvershoot = function autoPilotGetOvershoot(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_Overshoot', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The target overshoot percentage used to autotune the PID controllers.
 * A vector of three values, between 0 and 1, for each of the pitch, roll and yaw axes.
 * Defaults to 0.01 for each axis.
 * </summary>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetOvershoot = function autoPilotSetOvershoot(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_Overshoot', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the pitch PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetPitchPidGains = function autoPilotGetPitchPidGains(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_PitchPIDGains', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the pitch PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetPitchPidGains = function autoPilotSetPitchPidGains(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_PitchPIDGains', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the roll PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollPidGains = function autoPilotGetRollPidGains(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollPIDGains', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the roll PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetRollPidGains = function autoPilotSetRollPidGains(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_RollPIDGains', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the yaw PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetYawPidGains = function autoPilotGetYawPidGains(autoPilot) {
    let encodedArguments = [
        encoders.uInt64(autoPilot)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_YawPIDGains', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Gains for the yaw PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Long} autoPilot - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetYawPidGains = function autoPilotSetYawPidGains(autoPilot, value) {
    let encodedArguments = [
        encoders.uInt64(autoPilot), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_YawPIDGains', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CameraMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMode = function cameraGetMode(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Mode', encodedArguments),
        decode: decoders.enum({0 : 'Automatic', 1 : 'Free', 2 : 'Chase', 3 : 'Locked', 4 : 'Orbital', 5 : 'IVA', 6 : 'Map'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CameraMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetMode = function cameraSetMode(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.enum({0 : 'Automatic', 1 : 'Free', 2 : 'Chase', 3 : 'Locked', 4 : 'Orbital', 5 : 'IVA', 6 : 'Map'})(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Mode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetPitch = function cameraGetPitch(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Pitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetPitch = function cameraSetPitch(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Pitch', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetHeading = function cameraGetHeading(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Heading', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetHeading = function cameraSetHeading(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Heading', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The distance from the camera to the subject, in meters.
 * A value between <see cref="M:SpaceCenter.Camera.MinDistance" /> and <see cref="M:SpaceCenter.Camera.MaxDistance" />.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetDistance = function cameraGetDistance(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Distance', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The distance from the camera to the subject, in meters.
 * A value between <see cref="M:SpaceCenter.Camera.MinDistance" /> and <see cref="M:SpaceCenter.Camera.MaxDistance" />.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetDistance = function cameraSetDistance(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Distance', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pitch of the camera.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMinPitch = function cameraGetMinPitch(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MinPitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum pitch of the camera.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMaxPitch = function cameraGetMaxPitch(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MaxPitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Minimum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMinDistance = function cameraGetMinDistance(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MinDistance', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMaxDistance = function cameraGetMaxDistance(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MaxDistance', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Default distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetDefaultDistance = function cameraGetDefaultDistance(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_DefaultDistance', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the celestial body that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a celestial body.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedBody = function cameraGetFocussedBody(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedBody', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the celestial body that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a celestial body.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedBody = function cameraSetFocussedBody(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedBody', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the vessel that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a vessel.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedVessel = function cameraGetFocussedVessel(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedVessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the vessel that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a vessel.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedVessel = function cameraSetFocussedVessel(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedVessel', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the maneuver node that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a maneuver node.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedNode = function cameraGetFocussedNode(camera) {
    let encodedArguments = [
        encoders.uInt64(camera)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedNode', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * In map mode, the maneuver node that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a maneuver node.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Long} camera - A long value representing the id for the SpaceCenter.Camera see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedNode = function cameraSetFocussedNode(camera, value) {
    let encodedArguments = [
        encoders.uInt64(camera), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedNode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The height of the surface relative to mean sea level at the given position,
 * in meters. When over water this is equal to 0.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodySurfaceHeight = function celestialBodySurfaceHeight(celestialBody, latitude, longitude) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_SurfaceHeight', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The height of the surface relative to mean sea level at the given position,
 * in meters. When over water, this is the height of the sea-bed and is therefore a
 * negative value.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBedrockHeight = function celestialBodyBedrockHeight(celestialBody, latitude, longitude) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BedrockHeight', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The position at mean sea level at the given latitude and longitude, in the given reference frame.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 *   <param name="referenceFrame">Reference frame for the returned position vector</param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyMslPosition = function celestialBodyMslPosition(celestialBody, latitude, longitude, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_MSLPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the surface at the given latitude and longitude, in the given
 * reference frame. When over water, this is the position of the surface of the water.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 *   <param name="referenceFrame">Reference frame for the returned position vector</param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodySurfacePosition = function celestialBodySurfacePosition(celestialBody, latitude, longitude, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_SurfacePosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the surface at the given latitude and longitude, in the given
 * reference frame. When over water, this is the position at the bottom of the sea-bed.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 *   <param name="referenceFrame">Reference frame for the returned position vector</param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBedrockPosition = function celestialBodyBedrockPosition(celestialBody, latitude, longitude, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BedrockPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The biomes at the given latitude and longitude, in degrees.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBiomeAt = function celestialBodyBiomeAt(celestialBody, latitude, longitude) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.double(latitude), 
        encoders.double(longitude)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BiomeAt', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the center of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyPosition = function celestialBodyPosition(celestialBody, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the velocity vector of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyVelocity = function celestialBodyVelocity(celestialBody, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Velocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the rotation of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyRotation = function celestialBodyRotation(celestialBody, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the direction in which the north pole of the celestial body is
 * pointing, as a unit vector, in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyDirection = function celestialBodyDirection(celestialBody, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the angular velocity of the body in the specified reference
 * frame. The magnitude of the vector is the rotational speed of the body, in
 * radians per second, and the direction of the vector indicates the axis of
 * rotation, using the right-hand rule.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyAngularVelocity = function celestialBodyAngularVelocity(celestialBody, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(celestialBody), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_AngularVelocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the body.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetName = function celestialBodyGetName(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * A list of celestial bodies that are in orbit around this celestial body.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSatellites = function celestialBodyGetSatellites(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Satellites', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The mass of the body, in kilograms.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetMass = function celestialBodyGetMass(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Mass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Standard_gravitational_parameter">standard
 * gravitational parameter</a> of the body in <math>m^3s^{-2}</math>.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetGravitationalParameter = function celestialBodyGetGravitationalParameter(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_GravitationalParameter', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The acceleration due to gravity at sea level (mean altitude) on the body, in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSurfaceGravity = function celestialBodyGetSurfaceGravity(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SurfaceGravity', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The sidereal rotational period of the body, in seconds.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetRotationalPeriod = function celestialBodyGetRotationalPeriod(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_RotationalPeriod', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rotational speed of the body, in radians per second.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetRotationalSpeed = function celestialBodyGetRotationalSpeed(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_RotationalSpeed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The equatorial radius of the body, in meters.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetEquatorialRadius = function celestialBodyGetEquatorialRadius(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_EquatorialRadius', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The radius of the sphere of influence of the body, in meters.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSphereOfInfluence = function celestialBodyGetSphereOfInfluence(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SphereOfInfluence', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The orbit of the body.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetOrbit = function celestialBodyGetOrbit(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Orbit', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the body has an atmosphere.
 *            </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetHasAtmosphere = function celestialBodyGetHasAtmosphere(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_HasAtmosphere', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The depth of the atmosphere, in meters.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetAtmosphereDepth = function celestialBodyGetAtmosphereDepth(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_AtmosphereDepth', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if there is oxygen in the atmosphere, required for air-breathing engines.
 *            </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetHasAtmosphericOxygen = function celestialBodyGetHasAtmosphericOxygen(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_HasAtmosphericOxygen', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The biomes present on this body.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetBiomes = function celestialBodyGetBiomes(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Biomes', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be flying "high" when doing science.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetFlyingHighAltitudeThreshold = function celestialBodyGetFlyingHighAltitudeThreshold(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_FlyingHighAltitudeThreshold', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be in "high" space when doing science.
 * </summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSpaceHighAltitudeThreshold = function celestialBodyGetSpaceHighAltitudeThreshold(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SpaceHighAltitudeThreshold', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the celestial body.
 * <list type="bullet"><item><description>The origin is at the center of the body.
 * </description></item><item><description>The axes rotate with the body.</description></item><item><description>The x-axis points from the center of the body
 * towards the intersection of the prime meridian and equator (the
 * position at 0° longitude, 0° latitude).</description></item><item><description>The y-axis points from the center of the body
 * towards the north pole.</description></item><item><description>The z-axis points from the center of the body
 * towards the equator at 90°E longitude.</description></item></list></summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetReferenceFrame = function celestialBodyGetReferenceFrame(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to this celestial body, and
 * orientated in a fixed direction (it does not rotate with the body).
 * <list type="bullet"><item><description>The origin is at the center of the body.</description></item><item><description>The axes do not rotate.</description></item><item><description>The x-axis points in an arbitrary direction through the
 * equator.</description></item><item><description>The y-axis points from the center of the body towards
 * the north pole.</description></item><item><description>The z-axis points in an arbitrary direction through the
 * equator.</description></item></list></summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetNonRotatingReferenceFrame = function celestialBodyGetNonRotatingReferenceFrame(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_NonRotatingReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the reference frame that is fixed relative to this celestial body, but
 * orientated with the body's orbital prograde/normal/radial directions.
 * <list type="bullet"><item><description>The origin is at the center of the body.
 * </description></item><item><description>The axes rotate with the orbital prograde/normal/radial
 * directions.</description></item><item><description>The x-axis points in the orbital anti-radial direction.
 * </description></item><item><description>The y-axis points in the orbital prograde direction.
 * </description></item><item><description>The z-axis points in the orbital normal direction.
 * </description></item></list></summary>
 * </doc>
 * @param {Long} celestialBody - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetOrbitalReferenceFrame = function celestialBodyGetOrbitalReferenceFrame(celestialBody) {
    let encodedArguments = [
        encoders.uInt64(celestialBody)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_OrbitalReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Activates the next stage. Equivalent to pressing the space bar in-game.
 * </summary>
 *   <returns>A list of vessel objects that are jettisoned from the active vessel.</returns>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlActivateNextStage = function controlActivateNextStage(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_ActivateNextStage', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Returns <c>true</c> if the given action group is enabled.
 * </summary>
 *   <param name="group">A number between 0 and 9 inclusive.</param>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} group 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetActionGroup = function controlGetActionGroup(control, group) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.uInt32(group)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_GetActionGroup', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Sets the state of the given action group (a value between 0 and 9
 * inclusive).
 * </summary>
 *   <param name="group">A number between 0 and 9 inclusive.</param>
 *   <param name="state">
 *   </param>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} group 
 * @param {boolean} state 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetActionGroup = function controlSetActionGroup(control, group, state) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.uInt32(group), 
        encoders.bool(state)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_SetActionGroup', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Toggles the state of the given action group.
 * </summary>
 *   <param name="group">A number between 0 and 9 inclusive.</param>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} group 
 * @result {void}
 * @returns {void}
*/
module.exports.controlToggleActionGroup = function controlToggleActionGroup(control, group) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.uInt32(group)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_ToggleActionGroup', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Creates a maneuver node at the given universal time, and returns a
 * <see cref="T:SpaceCenter.Node" /> object that can be used to modify it.
 * Optionally sets the magnitude of the delta-v for the maneuver node
 * in the prograde, normal and radial directions.
 * </summary>
 *   <param name="ut">Universal time of the maneuver node.</param>
 *   <param name="prograde">Delta-v in the prograde direction.</param>
 *   <param name="normal">Delta-v in the normal direction.</param>
 *   <param name="radial">Delta-v in the radial direction.</param>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} ut 
 * @param {number} prograde 
 * @param {number} normal 
 * @param {number} radial 
 * @result {Long} - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlAddNode = function controlAddNode(control, ut, prograde, normal, radial) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.double(ut), 
        encoders.float(prograde), 
        encoders.float(normal), 
        encoders.float(radial)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_AddNode', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Remove all maneuver nodes.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.controlRemoveNodes = function controlRemoveNodes(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_RemoveNodes', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SAS" /></remarks>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSas = function controlGetSas(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SAS', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SAS" /></remarks>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSas = function controlSetSas(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SAS', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to
 * the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SASMode" /></remarks>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.SASMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSasMode = function controlGetSasMode(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SASMode', encodedArguments),
        decode: decoders.enum({0 : 'StabilityAssist', 1 : 'Maneuver', 2 : 'Prograde', 3 : 'Retrograde', 4 : 'Normal', 5 : 'AntiNormal', 6 : 'Radial', 7 : 'AntiRadial', 8 : 'Target', 9 : 'AntiTarget'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to
 * the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SASMode" /></remarks>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.SASMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSasMode = function controlSetSasMode(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.enum({0 : 'StabilityAssist', 1 : 'Maneuver', 2 : 'Prograde', 3 : 'Retrograde', 4 : 'Normal', 5 : 'AntiNormal', 6 : 'Radial', 7 : 'AntiRadial', 8 : 'Target', 9 : 'AntiTarget'})(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SASMode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SpeedMode" /> of the navball.
 * This is the mode displayed next to the speed at the top of the navball.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.SpeedMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSpeedMode = function controlGetSpeedMode(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SpeedMode', encodedArguments),
        decode: decoders.enum({0 : 'Orbit', 1 : 'Surface', 2 : 'Target'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SpeedMode" /> of the navball.
 * This is the mode displayed next to the speed at the top of the navball.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.SpeedMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSpeedMode = function controlSetSpeedMode(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.enum({0 : 'Orbit', 1 : 'Surface', 2 : 'Target'})(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SpeedMode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRcs = function controlGetRcs(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_RCS', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRcs = function controlSetRcs(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_RCS', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetGear = function controlGetGear(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Gear', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetGear = function controlSetGear(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Gear', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetLights = function controlGetLights(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Lights', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetLights = function controlSetLights(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Lights', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetBrakes = function controlGetBrakes(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Brakes', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetBrakes = function controlSetBrakes(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Brakes', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetAbort = function controlGetAbort(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Abort', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetAbort = function controlSetAbort(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Abort', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetThrottle = function controlGetThrottle(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Throttle', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetThrottle = function controlSetThrottle(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Throttle', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the pitch control.
 * A value between -1 and 1.
 * Equivalent to the w and s keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetPitch = function controlGetPitch(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Pitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the pitch control.
 * A value between -1 and 1.
 * Equivalent to the w and s keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetPitch = function controlSetPitch(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Pitch', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the yaw control.
 * A value between -1 and 1.
 * Equivalent to the a and d keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetYaw = function controlGetYaw(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Yaw', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the yaw control.
 * A value between -1 and 1.
 * Equivalent to the a and d keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetYaw = function controlSetYaw(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Yaw', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the roll control.
 * A value between -1 and 1.
 * Equivalent to the q and e keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRoll = function controlGetRoll(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Roll', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the roll control.
 * A value between -1 and 1.
 * Equivalent to the q and e keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRoll = function controlSetRoll(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Roll', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the forward translational control.
 * A value between -1 and 1.
 * Equivalent to the h and n keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetForward = function controlGetForward(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Forward', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the forward translational control.
 * A value between -1 and 1.
 * Equivalent to the h and n keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetForward = function controlSetForward(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Forward', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the up translational control.
 * A value between -1 and 1.
 * Equivalent to the i and k keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetUp = function controlGetUp(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Up', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the up translational control.
 * A value between -1 and 1.
 * Equivalent to the i and k keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetUp = function controlSetUp(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Up', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the right translational control.
 * A value between -1 and 1.
 * Equivalent to the j and l keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRight = function controlGetRight(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Right', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the right translational control.
 * A value between -1 and 1.
 * Equivalent to the j and l keys.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRight = function controlSetRight(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Right', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel throttle.
 * A value between -1 and 1.
 * A value of 1 rotates the wheels forwards, a value of -1 rotates
 * the wheels backwards.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetWheelThrottle = function controlGetWheelThrottle(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_WheelThrottle', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel throttle.
 * A value between -1 and 1.
 * A value of 1 rotates the wheels forwards, a value of -1 rotates
 * the wheels backwards.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetWheelThrottle = function controlSetWheelThrottle(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_WheelThrottle', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel steering.
 * A value between -1 and 1.
 * A value of 1 steers to the left, and a value of -1 steers to the right.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetWheelSteering = function controlGetWheelSteering(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_WheelSteering', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel steering.
 * A value between -1 and 1.
 * A value of 1 steers to the left, and a value of -1 steers to the right.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetWheelSteering = function controlSetWheelSteering(control, value) {
    let encodedArguments = [
        encoders.uInt64(control), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_WheelSteering', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current stage of the vessel. Corresponds to the stage number in
 * the in-game UI.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetCurrentStage = function controlGetCurrentStage(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_CurrentStage', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a list of all existing maneuver nodes, ordered by time from first to last.
 * </summary>
 * </doc>
 * @param {Long} control - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetNodes = function controlGetNodes(control) {
    let encodedArguments = [
        encoders.uInt64(control)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Nodes', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The current G force acting on the vessel in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetGForce = function flightGetGForce(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_GForce', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude above sea level, in meters.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetMeanAltitude = function flightGetMeanAltitude(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_MeanAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude above the surface of the body or sea level, whichever is closer, in meters.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSurfaceAltitude = function flightGetSurfaceAltitude(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SurfaceAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetBedrockAltitude = function flightGetBedrockAltitude(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_BedrockAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The elevation of the terrain under the vessel, in meters. This is the height of the terrain above sea level,
 * and is negative when the vessel is over the sea.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetElevation = function flightGetElevation(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Elevation', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Latitude">latitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLatitude = function flightGetLatitude(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Latitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Longitude">longitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLongitude = function flightGetLongitude(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Longitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The velocity vector of the vessel. The magnitude of the vector is the speed of the vessel in meters per second.
 * The direction of the vector is the direction of the vessels motion.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetVelocity = function flightGetVelocity(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Velocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSpeed = function flightGetSpeed(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Speed', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The horizontal speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetHorizontalSpeed = function flightGetHorizontalSpeed(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_HorizontalSpeed', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The vertical speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetVerticalSpeed = function flightGetVerticalSpeed(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_VerticalSpeed', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetCenterOfMass = function flightGetCenterOfMass(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_CenterOfMass', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The rotation of the vessel.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRotation = function flightGetRotation(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction vector that the vessel is pointing in.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDirection = function flightGetDirection(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch angle of the vessel relative to the horizon, in degrees. A value between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetPitch = function flightGetPitch(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Pitch', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The heading angle of the vessel relative to north, in degrees. A value between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetHeading = function flightGetHeading(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Heading', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The roll angle of the vessel relative to the horizon, in degrees. A value between -180° and +180°.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRoll = function flightGetRoll(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Roll', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the prograde direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetPrograde = function flightGetPrograde(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Prograde', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the retrograde direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRetrograde = function flightGetRetrograde(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Retrograde', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the normal direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetNormal = function flightGetNormal(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Normal', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-normal direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAntiNormal = function flightGetAntiNormal(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AntiNormal', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the radial direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRadial = function flightGetRadial(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Radial', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-radial direction.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAntiRadial = function flightGetAntiRadial(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AntiRadial', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The current density of the atmosphere around the vessel, in <math>kg/m^3</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAtmosphereDensity = function flightGetAtmosphereDensity(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AtmosphereDensity', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The dynamic pressure acting on the vessel, in Pascals. This is a measure of the strength of the
 * aerodynamic forces. It is equal to <math>\frac{1}{2} . \mbox{air density} .  \mbox{velocity}^2</math>.
 * It is commonly denoted <math>Q</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDynamicPressure = function flightGetDynamicPressure(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_DynamicPressure', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure at mean sea level, in Pascals.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticPressureAtMsl = function flightGetStaticPressureAtMsl(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticPressureAtMSL', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure acting on the vessel, in Pascals.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticPressure = function flightGetStaticPressure(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticPressure', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total aerodynamic forces acting on the vessel, as a vector pointing in the direction of the force, with its
 * magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAerodynamicForce = function flightGetAerodynamicForce(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AerodynamicForce', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Aerodynamic_force">aerodynamic lift</a> currently acting on the vessel,
 * as a vector pointing in the direction of the force, with its magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLift = function flightGetLift(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Lift', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Aerodynamic_force">aerodynamic drag</a> currently acting on the vessel,
 * as a vector pointing in the direction of the force, with its magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDrag = function flightGetDrag(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Drag', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of sound, in the atmosphere around the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSpeedOfSound = function flightGetSpeedOfSound(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SpeedOfSound', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of the vessel, in multiples of the speed of sound.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetMach = function flightGetMach(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Mach', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The vessels Reynolds number.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetReynoldsNumber = function flightGetReynoldsNumber(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_ReynoldsNumber', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_airspeed">true air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTrueAirSpeed = function flightGetTrueAirSpeed(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TrueAirSpeed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Equivalent_airspeed">equivalent air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetEquivalentAirSpeed = function flightGetEquivalentAirSpeed(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_EquivalentAirSpeed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * An estimate of the current terminal velocity of the vessel, in <math>m/s</math>.
 * This is the speed at which the drag forces cancel out the force of gravity.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTerminalVelocity = function flightGetTerminalVelocity(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TerminalVelocity', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the pitch angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAngleOfAttack = function flightGetAngleOfAttack(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AngleOfAttack', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the yaw angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSideslipAngle = function flightGetSideslipAngle(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SideslipAngle', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Total_air_temperature">total air temperature</a> of the atmosphere
 * around the vessel, in Kelvin. This temperature includes the <see cref="M:SpaceCenter.Flight.StaticAirTemperature" /> and the vessel's kinetic energy.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTotalAirTemperature = function flightGetTotalAirTemperature(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TotalAirTemperature', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Total_air_temperature">static (ambient) temperature</a> of the
 * atmosphere around the vessel, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticAirTemperature = function flightGetStaticAirTemperature(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticAirTemperature', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the current amount of stall, between 0 and 1. A value greater than 0.005 indicates a minor stall
 * and a value greater than 0.5 indicates a large-scale stall.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStallFraction = function flightGetStallFraction(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StallFraction', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the coefficient of drag. This is the amount of drag produced by the vessel. It depends on air speed,
 * air density and wing area.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDragCoefficient = function flightGetDragCoefficient(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_DragCoefficient', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the coefficient of lift. This is the amount of lift produced by the vessel, and depends on air speed, air density and wing area.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLiftCoefficient = function flightGetLiftCoefficient(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_LiftCoefficient', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the <a href="https://en.wikipedia.org/wiki/Ballistic_coefficient">ballistic coefficient</a>.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetBallisticCoefficient = function flightGetBallisticCoefficient(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_BallisticCoefficient', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the thrust specific fuel consumption for the jet engines on the vessel. This is a measure of the
 * efficiency of the engines, with a lower value indicating a more efficient vessel. This value is the
 * number of Newtons of fuel that are burned, per hour, to produce one newton of thrust.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Long} flight - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetThrustSpecificFuelConsumption = function flightGetThrustSpecificFuelConsumption(flight) {
    let encodedArguments = [
        encoders.uInt64(flight)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_ThrustSpecificFuelConsumption', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a vector whose direction the direction of the maneuver node burn, and whose magnitude
 * is the delta-v of the burn in m/s.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 *   <remarks>
 * Does not change when executing the maneuver node. See <see cref="M:SpaceCenter.Node.RemainingBurnVector" />.
 * </remarks>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeBurnVector = function nodeBurnVector(node, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_BurnVector', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a vector whose direction the direction of the maneuver node burn, and whose magnitude
 * is the delta-v of the burn in m/s. The direction and magnitude change as the burn is executed.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeRemainingBurnVector = function nodeRemainingBurnVector(node, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_RemainingBurnVector', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the maneuver node.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.nodeRemove = function nodeRemove(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the maneuver node in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodePosition = function nodePosition(node, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the unit direction vector of the maneuver nodes burn in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeDirection = function nodeDirection(node, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetPrograde = function nodeGetPrograde(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Prograde', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetPrograde = function nodeSetPrograde(node, value) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Prograde', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetNormal = function nodeGetNormal(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Normal', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetNormal = function nodeSetNormal(node, value) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Normal', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetRadial = function nodeGetRadial(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Radial', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetRadial = function nodeSetRadial(node, value) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Radial', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The delta-v of the maneuver node, in meters per second.
 * </summary>
 *   <remarks>
 * Does not change when executing the maneuver node. See <see cref="M:SpaceCenter.Node.RemainingDeltaV" />.
 * </remarks>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetDeltaV = function nodeGetDeltaV(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_DeltaV', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The delta-v of the maneuver node, in meters per second.
 * </summary>
 *   <remarks>
 * Does not change when executing the maneuver node. See <see cref="M:SpaceCenter.Node.RemainingDeltaV" />.
 * </remarks>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetDeltaV = function nodeSetDeltaV(node, value) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_DeltaV', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the remaining delta-v of the maneuver node, in meters per second. Changes as the node
 * is executed. This is equivalent to the delta-v reported in-game.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetRemainingDeltaV = function nodeGetRemainingDeltaV(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_RemainingDeltaV', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetUt = function nodeGetUt(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_UT', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetUt = function nodeSetUt(node, value) {
    let encodedArguments = [
        encoders.uInt64(node), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_UT', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the maneuver node will be encountered, in seconds.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetTimeTo = function nodeGetTimeTo(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_TimeTo', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The orbit that results from executing the maneuver node.
 * </summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetOrbit = function nodeGetOrbit(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Orbit', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the reference frame that is fixed relative to the maneuver node's burn.
 * <list type="bullet"><item><description>The origin is at the position of the maneuver node.</description></item><item><description>The y-axis points in the direction of the burn.</description></item><item><description>The x-axis and z-axis point in arbitrary but fixed directions.</description></item></list></summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetReferenceFrame = function nodeGetReferenceFrame(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the reference frame that is fixed relative to the maneuver node, and
 * orientated with the orbital prograde/normal/radial directions of the
 * original orbit at the maneuver node's position.
 * <list type="bullet"><item><description>The origin is at the position of the maneuver node.</description></item><item><description>The x-axis points in the orbital anti-radial direction of the original
 * orbit, at the position of the maneuver node.</description></item><item><description>The y-axis points in the orbital prograde direction of the original
 * orbit, at the position of the maneuver node.</description></item><item><description>The z-axis points in the orbital normal direction of the original orbit,
 * at the position of the maneuver node.</description></item></list></summary>
 * </doc>
 * @param {Long} node - A long value representing the id for the SpaceCenter.Node see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetOrbitalReferenceFrame = function nodeGetOrbitalReferenceFrame(node) {
    let encodedArguments = [
        encoders.uInt64(node)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_OrbitalReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector that is normal to the orbits reference plane, in the given
 * reference frame. The reference plane is the plane from which the orbits inclination is measured.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitStaticReferencePlaneNormal = function orbitStaticReferencePlaneNormal(referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_static_ReferencePlaneNormal', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector from which the orbits longitude of ascending node is measured,
 * in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitStaticReferencePlaneDirection = function orbitStaticReferencePlaneDirection(referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_static_ReferencePlaneDirection', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The orbital radius at the point in the orbit given by the true anomaly.
 * </summary>
 *   <param name="trueAnomaly">The true anomaly.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} trueAnomaly 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitRadiusAtTrueAnomaly = function orbitRadiusAtTrueAnomaly(orbit, trueAnomaly) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(trueAnomaly)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_RadiusAtTrueAnomaly', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The true anomaly at the given orbital radius.
 * </summary>
 *   <param name="radius">The orbital radius in meters.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} radius 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitTrueAnomalyAtRadius = function orbitTrueAnomalyAtRadius(orbit, radius) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(radius)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_TrueAnomalyAtRadius', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The true anomaly at the given time.
 * </summary>
 *   <param name="ut">The universal time in seconds.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} ut 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitTrueAnomalyAtUt = function orbitTrueAnomalyAtUt(orbit, ut) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(ut)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_TrueAnomalyAtUT', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The universal time, in seconds, corresponding to the given true anomaly.
 * </summary>
 *   <param name="trueAnomaly">True anomaly.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} trueAnomaly 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitUtAtTrueAnomaly = function orbitUtAtTrueAnomaly(orbit, trueAnomaly) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(trueAnomaly)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_UTAtTrueAnomaly', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The eccentric anomaly at the given universal time.
 * </summary>
 *   <param name="ut">The universal time, in seconds.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} ut 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitEccentricAnomalyAtUt = function orbitEccentricAnomalyAtUt(orbit, ut) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(ut)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_EccentricAnomalyAtUT', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The orbital speed at the given time, in meters per second.
 * </summary>
 *   <param name="time">Time from now, in seconds.</param>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} time 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitOrbitalSpeedAt = function orbitOrbitalSpeedAt(orbit, time) {
    let encodedArguments = [
        encoders.uInt64(orbit), 
        encoders.double(time)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_OrbitalSpeedAt', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body (e.g. planet or moon) around which the object is orbiting.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetBody = function orbitGetBody(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Body', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the apoapsis of the orbit, in meters, from the center of mass of the body being orbited.
 * </summary>
 *   <remarks>
 * For the apoapsis altitude reported on the in-game map view, use <see cref="M:SpaceCenter.Orbit.ApoapsisAltitude" />.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetApoapsis = function orbitGetApoapsis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Apoapsis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The periapsis of the orbit, in meters, from the center of mass of the body being orbited.
 * </summary>
 *   <remarks>
 * For the periapsis altitude reported on the in-game map view, use <see cref="M:SpaceCenter.Orbit.PeriapsisAltitude" />.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriapsis = function orbitGetPeriapsis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Periapsis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The apoapsis of the orbit, in meters, above the sea level of the body being orbited.
 * </summary>
 *   <remarks>
 * This is equal to <see cref="M:SpaceCenter.Orbit.Apoapsis" /> minus the equatorial radius of the body.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetApoapsisAltitude = function orbitGetApoapsisAltitude(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_ApoapsisAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The periapsis of the orbit, in meters, above the sea level of the body being orbited.
 * </summary>
 *   <remarks>
 * This is equal to <see cref="M:SpaceCenter.Orbit.Periapsis" /> minus the equatorial radius of the body.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriapsisAltitude = function orbitGetPeriapsisAltitude(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_PeriapsisAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The semi-major axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSemiMajorAxis = function orbitGetSemiMajorAxis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_SemiMajorAxis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The semi-minor axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSemiMinorAxis = function orbitGetSemiMinorAxis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_SemiMinorAxis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The current radius of the orbit, in meters. This is the distance between the center
 * of mass of the object in orbit, and the center of mass of the body around which it is orbiting.
 * </summary>
 *   <remarks>
 * This value will change over time if the orbit is elliptical.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetRadius = function orbitGetRadius(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Radius', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The current orbital speed of the object in meters per second.
 * </summary>
 *   <remarks>
 * This value will change over time if the orbit is elliptical.
 * </remarks>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSpeed = function orbitGetSpeed(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Speed', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The orbital period, in seconds.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriod = function orbitGetPeriod(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Period', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the object reaches apoapsis, in seconds.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToApoapsis = function orbitGetTimeToApoapsis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToApoapsis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the object reaches periapsis, in seconds.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToPeriapsis = function orbitGetTimeToPeriapsis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToPeriapsis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Orbital_eccentricity">eccentricity</a> of the orbit.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEccentricity = function orbitGetEccentricity(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Eccentricity', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Orbital_inclination">inclination</a> of the orbit,
 * in radians.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetInclination = function orbitGetInclination(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Inclination', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Longitude_of_the_ascending_node">longitude of the
 * ascending node</a>, in radians.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetLongitudeOfAscendingNode = function orbitGetLongitudeOfAscendingNode(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_LongitudeOfAscendingNode', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Argument_of_periapsis">argument of periapsis</a>, in radians.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetArgumentOfPeriapsis = function orbitGetArgumentOfPeriapsis(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_ArgumentOfPeriapsis', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly at epoch</a>.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetMeanAnomalyAtEpoch = function orbitGetMeanAnomalyAtEpoch(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_MeanAnomalyAtEpoch', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time since the epoch (the point at which the
 * <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly at epoch</a> was measured, in seconds.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEpoch = function orbitGetEpoch(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Epoch', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly</a>.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetMeanAnomaly = function orbitGetMeanAnomaly(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_MeanAnomaly', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Eccentric_anomaly">eccentric anomaly</a>.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEccentricAnomaly = function orbitGetEccentricAnomaly(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_EccentricAnomaly', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_anomaly">true anomaly</a>.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTrueAnomaly = function orbitGetTrueAnomaly(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TrueAnomaly', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * If the object is going to change sphere of influence in the future, returns the new orbit
 * after the change. Otherwise returns <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetNextOrbit = function orbitGetNextOrbit(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_NextOrbit', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the object changes sphere of influence, in seconds. Returns <c>NaN</c> if the
 * object is not going to change sphere of influence.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToSoiChange = function orbitGetTimeToSoiChange(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToSOIChange', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The current orbital speed in meters per second.
 * </summary>
 * </doc>
 * @param {Long} orbit - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetOrbitalSpeed = function orbitGetOrbitalSpeed(orbit) {
    let encodedArguments = [
        encoders.uInt64(orbit)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_OrbitalSpeed', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this cargo bay.
 * </summary>
 * </doc>
 * @param {Long} cargoBay - A long value representing the id for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetPart = function cargoBayGetPart(cargoBay) {
    let encodedArguments = [
        encoders.uInt64(cargoBay)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the cargo bay.
 * </summary>
 * </doc>
 * @param {Long} cargoBay - A long value representing the id for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CargoBayState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetState = function cargoBayGetState(cargoBay) {
    let encodedArguments = [
        encoders.uInt64(cargoBay)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Open', 1 : 'Closed', 2 : 'Opening', 3 : 'Closing'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {Long} cargoBay - A long value representing the id for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetOpen = function cargoBayGetOpen(cargoBay) {
    let encodedArguments = [
        encoders.uInt64(cargoBay)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_Open', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {Long} cargoBay - A long value representing the id for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.cargoBaySetOpen = function cargoBaySetOpen(cargoBay, value) {
    let encodedArguments = [
        encoders.uInt64(cargoBay), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_set_Open', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this control surface.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetPart = function controlSurfaceGetPart(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetPitchEnabled = function controlSurfaceGetPitchEnabled(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_PitchEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetPitchEnabled = function controlSurfaceSetPitchEnabled(controlSurface, value) {
    let encodedArguments = [
        encoders.uInt64(controlSurface), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_PitchEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetYawEnabled = function controlSurfaceGetYawEnabled(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_YawEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetYawEnabled = function controlSurfaceSetYawEnabled(controlSurface, value) {
    let encodedArguments = [
        encoders.uInt64(controlSurface), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_YawEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetRollEnabled = function controlSurfaceGetRollEnabled(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_RollEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetRollEnabled = function controlSurfaceSetRollEnabled(controlSurface, value) {
    let encodedArguments = [
        encoders.uInt64(controlSurface), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_RollEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetInverted = function controlSurfaceGetInverted(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Inverted', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetInverted = function controlSurfaceSetInverted(controlSurface, value) {
    let encodedArguments = [
        encoders.uInt64(controlSurface), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_Inverted', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetDeployed = function controlSurfaceGetDeployed(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetDeployed = function controlSurfaceSetDeployed(controlSurface, value) {
    let encodedArguments = [
        encoders.uInt64(controlSurface), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Surface area of the control surface in <math>m^2</math>.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetSurfaceArea = function controlSurfaceGetSurfaceArea(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_SurfaceArea', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * </summary>
 * </doc>
 * @param {Long} controlSurface - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetAvailableTorque = function controlSurfaceGetAvailableTorque(controlSurface) {
    let encodedArguments = [
        encoders.uInt64(controlSurface)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_AvailableTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Fires the decoupler. Returns the new vessel created when the decoupler fires.
 * Throws an exception if the decoupler has already fired.
 * </summary>
 * </doc>
 * @param {Long} decoupler - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerDecouple = function decouplerDecouple(decoupler) {
    let encodedArguments = [
        encoders.uInt64(decoupler)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_Decouple', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this decoupler.
 * </summary>
 * </doc>
 * @param {Long} decoupler - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetPart = function decouplerGetPart(decoupler) {
    let encodedArguments = [
        encoders.uInt64(decoupler)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the decoupler has fired.
 * </summary>
 * </doc>
 * @param {Long} decoupler - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetDecoupled = function decouplerGetDecoupled(decoupler) {
    let encodedArguments = [
        encoders.uInt64(decoupler)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Decoupled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the decoupler is enabled in the staging sequence.
 * </summary>
 * </doc>
 * @param {Long} decoupler - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetStaged = function decouplerGetStaged(decoupler) {
    let encodedArguments = [
        encoders.uInt64(decoupler)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Staged', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The impulse that the decoupler imparts when it is fired, in Newton seconds.
 * </summary>
 * </doc>
 * @param {Long} decoupler - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetImpulse = function decouplerGetImpulse(decoupler) {
    let encodedArguments = [
        encoders.uInt64(decoupler)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Impulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Undocks the docking port and returns the new <see cref="T:SpaceCenter.Vessel" /> that is created.
 * This method can be called for either docking port in a docked pair.
 * Throws an exception if the docking port is not docked to anything.
 * </summary>
 *   <remarks>
 * After undocking, the active vessel may change. See <see cref="M:SpaceCenter.ActiveVessel" />.
 * </remarks>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortUndock = function dockingPortUndock(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Undock', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the docking port in the given reference frame.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortPosition = function dockingPortPosition(dockingPort, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(dockingPort), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction that docking port points in, in the given reference frame.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortDirection = function dockingPortDirection(dockingPort, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(dockingPort), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The rotation of the docking port, in the given reference frame.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortRotation = function dockingPortRotation(dockingPort, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(dockingPort), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this docking port.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetPart = function dockingPortGetPart(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the docking port.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.DockingPortState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetState = function dockingPortGetState(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Ready', 1 : 'Docked', 2 : 'Docking', 3 : 'Undocking', 4 : 'Shielded', 5 : 'Moving'})
    };
};

/**
 * <doc>
 *   <summary>
 * The part that this docking port is docked to. Returns <c>null</c> if this
 * docking port is not docked to anything.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetDockedPart = function dockingPortGetDockedPart(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_DockedPart', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The distance a docking port must move away when it undocks before it
 * becomes ready to dock with another port, in meters.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetReengageDistance = function dockingPortGetReengageDistance(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_ReengageDistance', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the docking port has a shield.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetHasShield = function dockingPortGetHasShield(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_HasShield', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the docking ports shield, if it has one.
 * 
 * Returns <c>true</c> if the docking port has a shield, and the shield is
 * closed. Otherwise returns <c>false</c>. When set to <c>true</c>, the shield is
 * closed, and when set to <c>false</c> the shield is opened. If the docking
 * port does not have a shield, setting this attribute has no effect.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetShielded = function dockingPortGetShielded(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_Shielded', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the docking ports shield, if it has one.
 * 
 * Returns <c>true</c> if the docking port has a shield, and the shield is
 * closed. Otherwise returns <c>false</c>. When set to <c>true</c>, the shield is
 * closed, and when set to <c>false</c> the shield is opened. If the docking
 * port does not have a shield, setting this attribute has no effect.
 * </summary>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.dockingPortSetShielded = function dockingPortSetShielded(dockingPort, value) {
    let encodedArguments = [
        encoders.uInt64(dockingPort), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_set_Shielded', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to this docking port, and
 * oriented with the port.
 * <list type="bullet"><item><description>The origin is at the position of the docking port.</description></item><item><description>The axes rotate with the docking port.</description></item><item><description>The x-axis points out to the right side of the docking port.</description></item><item><description>The y-axis points in the direction the docking port is facing.</description></item><item><description>The z-axis points out of the bottom off the docking port.</description></item></list></summary>
 *   <remarks>
 * This reference frame is not necessarily equivalent to the reference frame
 * for the part, returned by <see cref="M:SpaceCenter.Part.ReferenceFrame" />.
 * </remarks>
 * </doc>
 * @param {Long} dockingPort - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetReferenceFrame = function dockingPortGetReferenceFrame(dockingPort) {
    let encodedArguments = [
        encoders.uInt64(dockingPort)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Toggle the current engine mode.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.engineToggleMode = function engineToggleMode(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_ToggleMode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this engine.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPart = function engineGetPart(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine is active. Setting this attribute may have no effect,
 * depending on <see cref="M:SpaceCenter.Engine.CanShutdown" /> and <see cref="M:SpaceCenter.Engine.CanRestart" />.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetActive = function engineGetActive(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine is active. Setting this attribute may have no effect,
 * depending on <see cref="M:SpaceCenter.Engine.CanShutdown" /> and <see cref="M:SpaceCenter.Engine.CanRestart" />.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetActive = function engineSetActive(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_Active', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of thrust being produced by the engine, in Newtons.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrust = function engineGetThrust(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Thrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of thrust, in Newtons, that would be produced by the engine
 * when activated and with its throttle set to 100%.
 * Returns zero if the engine does not have any fuel.
 * Takes the engine's current <see cref="M:SpaceCenter.Engine.ThrustLimit" /> and atmospheric conditions into account.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAvailableThrust = function engineGetAvailableThrust(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AvailableThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of thrust, in Newtons, that would be produced by the engine
 * when activated and fueled, with its throttle and throttle limiter set to 100%.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMaxThrust = function engineGetMaxThrust(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_MaxThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the engine in a
 * vacuum, in Newtons. This is the amount of thrust produced by the engine
 * when activated, <see cref="M:SpaceCenter.Engine.ThrustLimit" /> is set to 100%, the main
 * vessel's throttle is set to 100% and the engine is in a vacuum.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMaxVacuumThrust = function engineGetMaxVacuumThrust(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_MaxVacuumThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The thrust limiter of the engine. A value between 0 and 1. Setting this
 * attribute may have no effect, for example the thrust limit for a solid
 * rocket booster cannot be changed in flight.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrustLimit = function engineGetThrustLimit(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_ThrustLimit', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The thrust limiter of the engine. A value between 0 and 1. Setting this
 * attribute may have no effect, for example the thrust limit for a solid
 * rocket booster cannot be changed in flight.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetThrustLimit = function engineSetThrustLimit(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_ThrustLimit', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The components of the engine that generate thrust.
 * </summary>
 *   <remarks>
 * For example, this corresponds to the rocket nozzel on a solid rocket booster,
 * or the individual nozzels on a RAPIER engine.
 * The overall thrust produced by the engine, as reported by <see cref="M:SpaceCenter.Engine.AvailableThrust" />,
 * <see cref="M:SpaceCenter.Engine.MaxThrust" /> and others, is the sum of the thrust generated by each thruster.
 * </remarks>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrusters = function engineGetThrusters(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Thrusters', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The current specific impulse of the engine, in seconds. Returns zero
 * if the engine is not active.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetSpecificImpulse = function engineGetSpecificImpulse(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_SpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the engine, in seconds.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetVacuumSpecificImpulse = function engineGetVacuumSpecificImpulse(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_VacuumSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The specific impulse of the engine at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetKerbinSeaLevelSpecificImpulse = function engineGetKerbinSeaLevelSpecificImpulse(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_KerbinSeaLevelSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The names of the propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellantNames = function engineGetPropellantNames(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_PropellantNames', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellants = function engineGetPropellants(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Propellants', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The ratio of resources that the engine consumes. A dictionary mapping resource names
 * to the ratio at which they are consumed by the engine.
 * </summary>
 *   <remarks>
 * For example, if the ratios are 0.6 for LiquidFuel and 0.4 for Oxidizer, then for every 0.6 units of
 * LiquidFuel that the engine burns, it will burn 0.4 units of Oxidizer.
 * </remarks>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {key : number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellantRatios = function engineGetPropellantRatios(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_PropellantRatios', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine has any fuel available.
 * </summary>
 *   <remarks>
 * The engine must be activated for this property to update correctly.
 * </remarks>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetHasFuel = function engineGetHasFuel(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_HasFuel', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current throttle setting for the engine. A value between 0 and 1.
 * This is not necessarily the same as the vessel's main throttle
 * setting, as some engines take time to adjust their throttle
 * (such as jet engines).
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrottle = function engineGetThrottle(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Throttle', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the <see cref="M:SpaceCenter.Control.Throttle" /> affects the engine. For example,
 * this is <c>true</c> for liquid fueled rockets, and <c>false</c> for solid rocket
 * boosters.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrottleLocked = function engineGetThrottleLocked(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_ThrottleLocked', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine can be restarted once shutdown. If the engine cannot be shutdown,
 * returns <c>false</c>. For example, this is <c>true</c> for liquid fueled rockets
 * and <c>false</c> for solid rocket boosters.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetCanRestart = function engineGetCanRestart(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_CanRestart', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine can be shutdown once activated. For example, this is
 * <c>true</c> for liquid fueled rockets and <c>false</c> for solid rocket boosters.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetCanShutdown = function engineGetCanShutdown(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_CanShutdown', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine has multiple modes of operation.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetHasModes = function engineGetHasModes(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_HasModes', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMode = function engineGetMode(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Mode', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetMode = function engineSetMode(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_Mode', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The available modes for the engine.
 * A dictionary mapping mode names to <see cref="T:SpaceCenter.Engine" /> objects.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {key : Long} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetModes = function engineGetModes(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Modes', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAutoModeSwitch = function engineGetAutoModeSwitch(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AutoModeSwitch', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetAutoModeSwitch = function engineSetAutoModeSwitch(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_AutoModeSwitch', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine is gimballed.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimballed = function engineGetGimballed(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Gimballed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The range over which the gimbal can move, in degrees.
 * Returns 0 if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalRange = function engineGetGimbalRange(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalRange', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engines gimbal is locked in place. Setting this attribute has
 * no effect if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalLocked = function engineGetGimbalLocked(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalLocked', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engines gimbal is locked in place. Setting this attribute has
 * no effect if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetGimbalLocked = function engineSetGimbalLocked(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_GimbalLocked', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The gimbal limiter of the engine. A value between 0 and 1.
 * Returns 0 if the gimbal is locked.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalLimit = function engineGetGimbalLimit(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalLimit', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The gimbal limiter of the engine. A value between 0 and 1.
 * Returns 0 if the gimbal is locked.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetGimbalLimit = function engineSetGimbalLimit(engine, value) {
    let encodedArguments = [
        encoders.uInt64(engine), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_GimbalLimit', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the engine is inactive, or not gimballed.
 * </summary>
 * </doc>
 * @param {Long} engine - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAvailableTorque = function engineGetAvailableTorque(engine) {
    let encodedArguments = [
        encoders.uInt64(engine)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AvailableTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Run the experiment.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.experimentRun = function experimentRun(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Run', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Transmit all experimental data contained by this part.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.experimentTransmit = function experimentTransmit(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Transmit', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Dump the experimental data contained by the experiment.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.experimentDump = function experimentDump(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Dump', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Reset the experiment.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.experimentReset = function experimentReset(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Reset', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this experiment.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetPart = function experimentGetPart(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment is inoperable.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetInoperable = function experimentGetInoperable(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Inoperable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment has been deployed.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetDeployed = function experimentGetDeployed(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment can be re-run.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetRerunnable = function experimentGetRerunnable(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Rerunnable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment contains data.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetHasData = function experimentGetHasData(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_HasData', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The data contained in this experiment.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.ScienceData see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetData = function experimentGetData(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Data', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Determines if the experiment is available given the current conditions.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetAvailable = function experimentGetAvailable(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Available', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the biome the experiment is currently in.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetBiome = function experimentGetBiome(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Biome', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Containing information on the corresponding specific science result for the current conditions.
 * Returns null if experiment is unavailable.
 * </summary>
 * </doc>
 * @param {Long} experiment - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetScienceSubject = function experimentGetScienceSubject(experiment) {
    let encodedArguments = [
        encoders.uInt64(experiment)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_ScienceSubject', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Jettison the fairing. Has no effect if it has already been jettisoned.
 * </summary>
 * </doc>
 * @param {Long} fairing - A long value representing the id for the SpaceCenter.Fairing see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.fairingJettison = function fairingJettison(fairing) {
    let encodedArguments = [
        encoders.uInt64(fairing)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_Jettison', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this fairing.
 * </summary>
 * </doc>
 * @param {Long} fairing - A long value representing the id for the SpaceCenter.Fairing see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.fairingGetPart = function fairingGetPart(fairing) {
    let encodedArguments = [
        encoders.uInt64(fairing)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the fairing has been jettisoned.
 * </summary>
 * </doc>
 * @param {Long} fairing - A long value representing the id for the SpaceCenter.Fairing see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.fairingGetJettisoned = function fairingGetJettisoned(fairing) {
    let encodedArguments = [
        encoders.uInt64(fairing)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_get_Jettisoned', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the force.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.forceRemove = function forceRemove(force) {
    let encodedArguments = [
        encoders.uInt64(force)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part that this force is applied to.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetPart = function forceGetPart(force) {
    let encodedArguments = [
        encoders.uInt64(force)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetForceVector = function forceGetForceVector(force) {
    let encodedArguments = [
        encoders.uInt64(force)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_ForceVector', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetForceVector = function forceSetForceVector(force, value) {
    let encodedArguments = [
        encoders.uInt64(force), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_ForceVector', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetPosition = function forceGetPosition(force) {
    let encodedArguments = [
        encoders.uInt64(force)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetPosition = function forceSetPosition(force, value) {
    let encodedArguments = [
        encoders.uInt64(force), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_Position', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetReferenceFrame = function forceGetReferenceFrame(force) {
    let encodedArguments = [
        encoders.uInt64(force)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {Long} force - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetReferenceFrame = function forceSetReferenceFrame(force, value) {
    let encodedArguments = [
        encoders.uInt64(force), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this intake.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetPart = function intakeGetPart(intake) {
    let encodedArguments = [
        encoders.uInt64(intake)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetOpen = function intakeGetOpen(intake) {
    let encodedArguments = [
        encoders.uInt64(intake)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Open', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.intakeSetOpen = function intakeSetOpen(intake, value) {
    let encodedArguments = [
        encoders.uInt64(intake), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_set_Open', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Speed of the flow into the intake, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetSpeed = function intakeGetSpeed(intake) {
    let encodedArguments = [
        encoders.uInt64(intake)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Speed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate of flow into the intake, in units of resource per second.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetFlow = function intakeGetFlow(intake) {
    let encodedArguments = [
        encoders.uInt64(intake)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Flow', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The area of the intake's opening, in square meters.
 * </summary>
 * </doc>
 * @param {Long} intake - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetArea = function intakeGetArea(intake) {
    let encodedArguments = [
        encoders.uInt64(intake)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Area', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this landing gear.
 * </summary>
 * </doc>
 * @param {Long} landingGear - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetPart = function landingGearGetPart(landingGear) {
    let encodedArguments = [
        encoders.uInt64(landingGear)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing gear is deployable.
 * </summary>
 * </doc>
 * @param {Long} landingGear - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetDeployable = function landingGearGetDeployable(landingGear) {
    let encodedArguments = [
        encoders.uInt64(landingGear)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Deployable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the current state of the landing gear.
 * </summary>
 *   <remarks>
 * Fixed landing gear are always deployed.
 * </remarks>
 * </doc>
 * @param {Long} landingGear - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.LandingGearState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetState = function landingGearGetState(landingGear) {
    let encodedArguments = [
        encoders.uInt64(landingGear)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Deployed', 1 : 'Retracted', 2 : 'Deploying', 3 : 'Retracting', 4 : 'Broken'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing gear is deployed.
 * </summary>
 *   <remarks>
 * Fixed landing gear are always deployed.
 * Returns an error if you try to deploy fixed landing gear.
 * </remarks>
 * </doc>
 * @param {Long} landingGear - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetDeployed = function landingGearGetDeployed(landingGear) {
    let encodedArguments = [
        encoders.uInt64(landingGear)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing gear is deployed.
 * </summary>
 *   <remarks>
 * Fixed landing gear are always deployed.
 * Returns an error if you try to deploy fixed landing gear.
 * </remarks>
 * </doc>
 * @param {Long} landingGear - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.landingGearSetDeployed = function landingGearSetDeployed(landingGear, value) {
    let encodedArguments = [
        encoders.uInt64(landingGear), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this landing leg.
 * </summary>
 * </doc>
 * @param {Long} landingLeg - A long value representing the id for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetPart = function landingLegGetPart(landingLeg) {
    let encodedArguments = [
        encoders.uInt64(landingLeg)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the landing leg.
 * </summary>
 * </doc>
 * @param {Long} landingLeg - A long value representing the id for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.LandingLegState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetState = function landingLegGetState(landingLeg) {
    let encodedArguments = [
        encoders.uInt64(landingLeg)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Deployed', 1 : 'Retracted', 2 : 'Deploying', 3 : 'Retracting', 4 : 'Broken'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing leg is deployed.
 * </summary>
 *   <remarks>
 * Fixed landing legs are always deployed.
 * Returns an error if you try to deploy fixed landing gear.
 * </remarks>
 * </doc>
 * @param {Long} landingLeg - A long value representing the id for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetDeployed = function landingLegGetDeployed(landingLeg) {
    let encodedArguments = [
        encoders.uInt64(landingLeg)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing leg is deployed.
 * </summary>
 *   <remarks>
 * Fixed landing legs are always deployed.
 * Returns an error if you try to deploy fixed landing gear.
 * </remarks>
 * </doc>
 * @param {Long} landingLeg - A long value representing the id for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.landingLegSetDeployed = function landingLegSetDeployed(landingLeg, value) {
    let encodedArguments = [
        encoders.uInt64(landingLeg), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Releases the docking clamp. Has no effect if the clamp has already been released.
 * </summary>
 * </doc>
 * @param {Long} launchClamp - A long value representing the id for the SpaceCenter.LaunchClamp see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.launchClampRelease = function launchClampRelease(launchClamp) {
    let encodedArguments = [
        encoders.uInt64(launchClamp)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchClamp_Release', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this launch clamp.
 * </summary>
 * </doc>
 * @param {Long} launchClamp - A long value representing the id for the SpaceCenter.LaunchClamp see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.launchClampGetPart = function launchClampGetPart(launchClamp) {
    let encodedArguments = [
        encoders.uInt64(launchClamp)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchClamp_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this light.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetPart = function lightGetPart(light) {
    let encodedArguments = [
        encoders.uInt64(light)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetActive = function lightGetActive(light) {
    let encodedArguments = [
        encoders.uInt64(light)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lightSetActive = function lightSetActive(light, value) {
    let encodedArguments = [
        encoders.uInt64(light), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_set_Active', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetColor = function lightGetColor(light) {
    let encodedArguments = [
        encoders.uInt64(light)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Color', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lightSetColor = function lightSetColor(light, value) {
    let encodedArguments = [
        encoders.uInt64(light), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current power usage, in units of charge per second.
 * </summary>
 * </doc>
 * @param {Long} light - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetPowerUsage = function lightGetPowerUsage(light) {
    let encodedArguments = [
        encoders.uInt64(light)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_PowerUsage', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Returns <c>true</c> if the module has a field with the given name.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasField = function moduleHasField(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasField', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the value of a field.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetField = function moduleGetField(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_GetField', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given integer number.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldInt = function moduleSetFieldInt(module, name, value) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name), 
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldInt', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given floating point number.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldFloat = function moduleSetFieldFloat(module, name, value) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldFloat', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given string.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldString = function moduleSetFieldString(module, name, value) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldString', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the value of a field to its original value.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleResetField = function moduleResetField(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_ResetField', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the module has an event with the given name.
 *            </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasEvent = function moduleHasEvent(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasEvent', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Trigger the named event. Equivalent to clicking the button in the right-click menu of the part.
 * </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleTriggerEvent = function moduleTriggerEvent(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_TriggerEvent', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the part has an action with the given name.
 *            </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasAction = function moduleHasAction(module, name) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasAction', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Set the value of an action with the given name.
 * </summary>
 *   <param name="name">
 *   </param>
 *   <param name="value">
 *   </param>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetAction = function moduleSetAction(module, name, value) {
    let encodedArguments = [
        encoders.uInt64(module), 
        encoders.string(name), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetAction', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the PartModule. For example, "ModuleEngines".
 * </summary>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetName = function moduleGetName(module) {
    let encodedArguments = [
        encoders.uInt64(module)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part that contains this module.
 * </summary>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetPart = function moduleGetPart(module) {
    let encodedArguments = [
        encoders.uInt64(module)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The modules field names and their associated values, as a dictionary.
 * These are the values visible in the right-click menu of the part.
 * </summary>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {key : string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetFields = function moduleGetFields(module) {
    let encodedArguments = [
        encoders.uInt64(module)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Fields', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * A list of the names of all of the modules events. Events are the clickable buttons
 * visible in the right-click menu of the part.
 * </summary>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetEvents = function moduleGetEvents(module) {
    let encodedArguments = [
        encoders.uInt64(module)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Events', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all the names of the modules actions. These are the parts actions that can be assigned
 * to action groups in the in-game editor.
 * </summary>
 * </doc>
 * @param {Long} module - A long value representing the id for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetActions = function moduleGetActions(module) {
    let encodedArguments = [
        encoders.uInt64(module)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Actions', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Deploys the parachute. This has no effect if the parachute has already
 * been deployed.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteDeploy = function parachuteDeploy(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_Deploy', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this parachute.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetPart = function parachuteGetPart(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the parachute has been deployed.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployed = function parachuteGetDeployed(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the parachute.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ParachuteState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetState = function parachuteGetState(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Active', 1 : 'Cut', 2 : 'Deployed', 3 : 'SemiDeployed', 4 : 'Stowed'})
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployAltitude = function parachuteGetDeployAltitude(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_DeployAltitude', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteSetDeployAltitude = function parachuteSetDeployAltitude(parachute, value) {
    let encodedArguments = [
        encoders.uInt64(parachute), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_set_DeployAltitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployMinPressure = function parachuteGetDeployMinPressure(parachute) {
    let encodedArguments = [
        encoders.uInt64(parachute)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_DeployMinPressure', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {Long} parachute - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteSetDeployMinPressure = function parachuteSetDeployMinPressure(parachute, value) {
    let encodedArguments = [
        encoders.uInt64(parachute), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_set_DeployMinPressure', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the part in the given reference frame.
 * </summary>
 *   <remarks>
 * This is a fixed position in the part, defined by the parts model.
 * It s not necessarily the same as the parts center of mass.
 * Use <see cref="M:SpaceCenter.Part.CenterOfMass" /> to get the parts center of mass.
 * </remarks>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partPosition = function partPosition(part, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the parts center of mass in the given reference frame.
 * If the part is physicsless, this is equivalent to <see cref="M:SpaceCenter.Part.Position" />.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partCenterOfMass = function partCenterOfMass(part, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_CenterOfMass', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partDirection = function partDirection(part, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The velocity of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partVelocity = function partVelocity(part, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Velocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The rotation of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partRotation = function partRotation(part, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Exert a constant force on the part, acting at the given position.
 * Returns an object that can be used to remove or modify the force.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} force 
 * @param {{number, number, number}} position 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Force see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partAddForce = function partAddForce(part, force, position, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        new proto.krpc.schema.Tuple(force), 
        new proto.krpc.schema.Tuple(position), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_AddForce', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Exert an instantaneous force on the part, acting at the given position.
 * </summary>
 *   <remarks>
 * The force is applied instantaneously in a single physics update.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} force 
 * @param {{number, number, number}} position 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.partInstantaneousForce = function partInstantaneousForce(part, force, position, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(part), 
        new proto.krpc.schema.Tuple(force), 
        new proto.krpc.schema.Tuple(position), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_InstantaneousForce', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Internal name of the part, as used in
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/CFG_File_Documentation">part cfg files</a>.
 * For example "Mark1-2Pod".
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetName = function partGetName(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Title of the part, as shown when the part is right clicked in-game. For example "Mk1-2 Command Pod".
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTitle = function partGetTitle(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Title', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name tag for the part. Can be set to a custom string using the in-game user interface.
 * </summary>
 *   <remarks>
 * This requires either the <a href="http://github.com/krpc/NameTag/releases/latest">NameTag</a> or
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/61827-/">kOS</a> mods to be installed.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTag = function partGetTag(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Tag', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name tag for the part. Can be set to a custom string using the in-game user interface.
 * </summary>
 *   <remarks>
 * This requires either the <a href="http://github.com/krpc/NameTag/releases/latest">NameTag</a> or
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/61827-/">kOS</a> mods to be installed.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.partSetTag = function partSetTag(part, value) {
    let encodedArguments = [
        encoders.uInt64(part), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_set_Tag', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The cost of the part, in units of funds.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCost = function partGetCost(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Cost', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel that contains this part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetVessel = function partGetVessel(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Vessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The parts parent. Returns <c>null</c> if the part does not have a parent.
 * This, in combination with <see cref="M:SpaceCenter.Part.Children" />, can be used to traverse the vessels parts tree.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetParent = function partGetParent(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Parent', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The parts children. Returns an empty list if the part has no children.
 * This, in combination with <see cref="M:SpaceCenter.Part.Parent" />, can be used to traverse the vessels parts tree.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetChildren = function partGetChildren(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Children', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is axially attached to its parent, i.e. on the top
 * or bottom of its parent. If the part has no parent, returns <c>false</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetAxiallyAttached = function partGetAxiallyAttached(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_AxiallyAttached', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is radially attached to its parent, i.e. on the side of its parent.
 * If the part has no parent, returns <c>false</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRadiallyAttached = function partGetRadiallyAttached(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_RadiallyAttached', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be activated. Returns -1 if the part is not activated by staging.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetStage = function partGetStage(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Stage', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be decoupled. Returns -1 if the part is never decoupled from the vessel.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDecoupleStage = function partGetDecoupleStage(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DecoupleStage', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is <a href="http://wiki.kerbalspaceprogram.com/wiki/Massless_part">massless</a>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMassless = function partGetMassless(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Massless', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current mass of the part, including resources it contains, in kilograms.
 * Returns zero if the part is massless.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMass = function partGetMass(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Mass', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The mass of the part, not including any resources it contains, in kilograms. Returns zero if the part is massless.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDryMass = function partGetDryMass(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DryMass', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is shielded from the exterior of the vessel, for example by a fairing.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetShielded = function partGetShielded(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Shielded', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The dynamic pressure acting on the part, in Pascals.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDynamicPressure = function partGetDynamicPressure(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DynamicPressure', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The impact tolerance of the part, in meters per second.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetImpactTolerance = function partGetImpactTolerance(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ImpactTolerance', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Temperature of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTemperature = function partGetTemperature(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Temperature', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Temperature of the skin of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSkinTemperature = function partGetSkinTemperature(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_SkinTemperature', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMaxTemperature = function partGetMaxTemperature(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MaxTemperature', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the skin of the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMaxSkinTemperature = function partGetMaxSkinTemperature(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MaxSkinTemperature', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the internal temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalMass = function partGetThermalMass(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalMass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the skin temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalSkinMass = function partGetThermalSkinMass(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalSkinMass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the temperature of the resources contained in the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalResourceMass = function partGetThermalResourceMass(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalResourceMass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is begin generated by the part.
 * For example, some engines generate heat by combusting fuel.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalInternalFlux = function partGetThermalInternalFlux(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalInternalFlux', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is conducting into or out of the part via contact with other parts.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalConductionFlux = function partGetThermalConductionFlux(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalConductionFlux', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is convecting into or out of the part from the surrounding atmosphere.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalConvectionFlux = function partGetThermalConvectionFlux(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalConvectionFlux', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is radiating into or out of the part from the surrounding environment.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalRadiationFlux = function partGetThermalRadiationFlux(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalRadiationFlux', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is transferring between the part's skin and its internals.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part's internals are gaining heat energy,
 * and negative means its skin is gaining heat energy.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalSkinToInternalFlux = function partGetThermalSkinToInternalFlux(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalSkinToInternalFlux', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Resources" /> object for the part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResources = function partGetResources(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Resources', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether this part is crossfeed capable.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCrossfeed = function partGetCrossfeed(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Crossfeed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether this part is a fuel line.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetIsFuelLine = function partGetIsFuelLine(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_IsFuelLine', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is into this part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFuelLinesFrom = function partGetFuelLinesFrom(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_FuelLinesFrom', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is out of this part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFuelLinesTo = function partGetFuelLinesTo(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_FuelLinesTo', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The modules for this part.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetModules = function partGetModules(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Modules', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.CargoBay" /> if the part is a cargo bay, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCargoBay = function partGetCargoBay(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_CargoBay', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ControlSurface" /> if the part is an aerodynamic control surface, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetControlSurface = function partGetControlSurface(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ControlSurface', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Decoupler" /> if the part is a decoupler, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDecoupler = function partGetDecoupler(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Decoupler', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.DockingPort" /> if the part is a docking port, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDockingPort = function partGetDockingPort(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DockingPort', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Engine" /> if the part is an engine, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetEngine = function partGetEngine(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Engine', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Experiment" /> if the part is a science experiment, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetExperiment = function partGetExperiment(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Experiment', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Fairing" /> if the part is a fairing, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Fairing see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFairing = function partGetFairing(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Fairing', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Intake" /> if the part is an intake, otherwise <c>null</c>.
 * </summary>
 *   <remarks>
 * This includes any part that generates thrust. This covers many different types of engine,
 * including liquid fuel rockets, solid rocket boosters and jet engines.
 * For RCS thrusters see <see cref="T:SpaceCenter.RCS" />.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetIntake = function partGetIntake(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Intake', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingGear" /> if the part is a landing gear, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLandingGear = function partGetLandingGear(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LandingGear', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingLeg" /> if the part is a landing leg, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLandingLeg = function partGetLandingLeg(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LandingLeg', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LaunchClamp" /> if the part is a launch clamp, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.LaunchClamp see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLaunchClamp = function partGetLaunchClamp(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LaunchClamp', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Light" /> if the part is a light, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLight = function partGetLight(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Light', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parachute" /> if the part is a parachute, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetParachute = function partGetParachute(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Parachute', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Radiator" /> if the part is a radiator, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRadiator = function partGetRadiator(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Radiator', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.RCS" /> if the part is an RCS block/thruster, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRcs = function partGetRcs(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_RCS', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ReactionWheel" /> if the part is a reaction wheel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetReactionWheel = function partGetReactionWheel(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ReactionWheel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceConverter" /> if the part is a resource converter, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResourceConverter = function partGetResourceConverter(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ResourceConverter', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceHarvester" /> if the part is a resource harvester, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResourceHarvester = function partGetResourceHarvester(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ResourceHarvester', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Sensor" /> if the part is a sensor, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSensor = function partGetSensor(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Sensor', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.SolarPanel" /> if the part is a solar panel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSolarPanel = function partGetSolarPanel(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_SolarPanel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The moment of inertia of the part in <math>kg.m^2</math> around its center of mass
 * in the parts reference frame (<see cref="T:SpaceCenter.ReferenceFrame" />).
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMomentOfInertia = function partGetMomentOfInertia(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MomentOfInertia', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The inertia tensor of the part in the parts reference frame (<see cref="T:SpaceCenter.ReferenceFrame" />).
 * Returns the 3x3 matrix as a list of elements, in row-major order.
 * </summary>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetInertiaTensor = function partGetInertiaTensor(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_InertiaTensor', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to this part, and centered on a fixed position within the part, defined by the parts model.
 * <list type="bullet"><item><description>The origin is at the position of the part, as returned by <see cref="M:SpaceCenter.Part.Position" />.</description></item><item><description>The axes rotate with the part.</description></item><item><description>The x, y and z axis directions depend on the design of the part.</description></item></list></summary>
 *   <remarks>
 * For docking port parts, this reference frame is not necessarily equivalent to the reference frame
 * for the docking port, returned by <see cref="M:SpaceCenter.DockingPort.ReferenceFrame" />.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetReferenceFrame = function partGetReferenceFrame(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to this part, and centered on its center of mass.
 * <list type="bullet"><item><description>The origin is at the center of mass of the part, as returned by <see cref="M:SpaceCenter.Part.CenterOfMass" />.</description></item><item><description>The axes rotate with the part.</description></item><item><description>The x, y and z axis directions depend on the design of the part.</description></item></list></summary>
 *   <remarks>
 * For docking port parts, this reference frame is not necessarily equivalent to the reference frame
 * for the docking port, returned by <see cref="M:SpaceCenter.DockingPort.ReferenceFrame" />.
 * </remarks>
 * </doc>
 * @param {Long} part - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCenterOfMassReferenceFrame = function partGetCenterOfMassReferenceFrame(part) {
    let encodedArguments = [
        encoders.uInt64(part)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_CenterOfMassReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of parts whose <see cref="M:SpaceCenter.Part.Name" /> is <paramref name="name" />.
 * </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithName = function partsWithName(parts, name) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithName', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parts whose <see cref="M:SpaceCenter.Part.Title" /> is <paramref name="title" />.
 * </summary>
 *   <param name="title">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} title 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithTitle = function partsWithTitle(parts, title) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.string(title)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithTitle', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parts whose <see cref="M:SpaceCenter.Part.Tag" /> is <paramref name="tag" />.
 * </summary>
 *   <param name="tag">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} tag 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithTag = function partsWithTag(parts, tag) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.string(tag)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithTag', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parts that contain a <see cref="T:SpaceCenter.Module" /> whose
 * <see cref="M:SpaceCenter.Module.Name" /> is <paramref name="moduleName" />.
 * </summary>
 *   <param name="moduleName">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} moduleName 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithModule = function partsWithModule(parts, moduleName) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.string(moduleName)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithModule', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parts that are activated in the given <paramref name="stage" />.
 * </summary>
 *   <param name="stage">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} stage 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsInStage = function partsInStage(parts, stage) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.sInt32(stage)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_InStage', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parts that are decoupled in the given <paramref name="stage" />.
 * </summary>
 *   <param name="stage">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} stage 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsInDecoupleStage = function partsInDecoupleStage(parts, stage) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.sInt32(stage)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_InDecoupleStage', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of modules (combined across all parts in the vessel) whose
 * <see cref="M:SpaceCenter.Module.Name" /> is <paramref name="moduleName" />.
 * </summary>
 *   <param name="moduleName">
 *   </param>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} moduleName 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Module see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsModulesWithName = function partsModulesWithName(parts, moduleName) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.string(moduleName)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_ModulesWithName', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all of the vessels parts.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetAll = function partsGetAll(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_All', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The vessels root part.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRoot = function partsGetRoot(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Root', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetControlling = function partsGetControlling(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Controlling', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.partsSetControlling = function partsSetControlling(parts, value) {
    let encodedArguments = [
        encoders.uInt64(parts), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_set_Controlling', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all control surfaces in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.ControlSurface see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetControlSurfaces = function partsGetControlSurfaces(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ControlSurfaces', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all cargo bays in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.CargoBay see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetCargoBays = function partsGetCargoBays(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_CargoBays', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all decouplers in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Decoupler see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetDecouplers = function partsGetDecouplers(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Decouplers', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all docking ports in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.DockingPort see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetDockingPorts = function partsGetDockingPorts(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_DockingPorts', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all engines in the vessel.
 * </summary>
 *   <remarks>
 * This includes any part that generates thrust. This covers many different types of engine,
 * including liquid fuel rockets, solid rocket boosters, jet engines and RCS thrusters.
 * </remarks>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Engine see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetEngines = function partsGetEngines(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Engines', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all science experiments in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Experiment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetExperiments = function partsGetExperiments(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Experiments', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all fairings in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Fairing see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetFairings = function partsGetFairings(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Fairings', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all intakes in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Intake see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetIntakes = function partsGetIntakes(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Intakes', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all landing gear attached to the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.LandingGear see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLandingGear = function partsGetLandingGear(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LandingGear', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all landing legs attached to the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.LandingLeg see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLandingLegs = function partsGetLandingLegs(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LandingLegs', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all launch clamps attached to the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.LaunchClamp see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLaunchClamps = function partsGetLaunchClamps(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LaunchClamps', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all lights in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Light see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLights = function partsGetLights(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Lights', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parachutes in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Parachute see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetParachutes = function partsGetParachutes(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Parachutes', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all radiators in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRadiators = function partsGetRadiators(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Radiators', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all RCS blocks/thrusters in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRcs = function partsGetRcs(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_RCS', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all reaction wheels in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetReactionWheels = function partsGetReactionWheels(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ReactionWheels', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all resource converters in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetResourceConverters = function partsGetResourceConverters(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ResourceConverters', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all resource harvesters in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetResourceHarvesters = function partsGetResourceHarvesters(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ResourceHarvesters', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all sensors in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetSensors = function partsGetSensors(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Sensors', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all solar panels in the vessel.
 * </summary>
 * </doc>
 * @param {Long} parts - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetSolarPanels = function partsGetSolarPanels(parts) {
    let encodedArguments = [
        encoders.uInt64(parts)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_SolarPanels', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the propellant.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetName = function propellantGetName(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of propellant.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetCurrentAmount = function propellantGetCurrentAmount(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_CurrentAmount', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The required amount of propellant.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetCurrentRequirement = function propellantGetCurrentRequirement(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_CurrentRequirement', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The total amount of the underlying resource currently reachable given resource flow rules.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetTotalResourceAvailable = function propellantGetTotalResourceAvailable(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_TotalResourceAvailable', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The total vehicle capacity for the underlying propellant resource, restricted by resource flow rules.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetTotalResourceCapacity = function propellantGetTotalResourceCapacity(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_TotalResourceCapacity', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored when calculating required mass flow given specific impulse.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIgnoreForIsp = function propellantGetIgnoreForIsp(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IgnoreForIsp', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored for thrust curve calculations.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIgnoreForThrustCurve = function propellantGetIgnoreForThrustCurve(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IgnoreForThrustCurve', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant has a stack gauge or not.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetDrawStackGauge = function propellantGetDrawStackGauge(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_DrawStackGauge', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant is deprived.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIsDeprived = function propellantGetIsDeprived(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IsDeprived', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The propellant ratio.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetRatio = function propellantGetRatio(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_Ratio', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The reachable resources connected to this propellant.
 * </summary>
 * </doc>
 * @param {Long} propellant - A long value representing the id for the SpaceCenter.Propellant see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetConnectedResources = function propellantGetConnectedResources(propellant) {
    let encodedArguments = [
        encoders.uInt64(propellant)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_ConnectedResources', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this RCS.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPart = function rcsGetPart(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are active.
 * An RCS thruster is inactive if the RCS action group is disabled (<see cref="M:SpaceCenter.Control.RCS" />),
 * the RCS thruster itself is not enabled (<see cref="M:SpaceCenter.RCS.Enabled" />) or
 * it is covered by a fairing (<see cref="M:SpaceCenter.Part.Shielded" />).
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetActive = function rcsGetActive(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetEnabled = function rcsGetEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Enabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetEnabled = function rcsSetEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_Enabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPitchEnabled = function rcsGetPitchEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_PitchEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetPitchEnabled = function rcsSetPitchEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_PitchEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetYawEnabled = function rcsGetYawEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_YawEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetYawEnabled = function rcsSetYawEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_YawEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetRollEnabled = function rcsGetRollEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_RollEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetRollEnabled = function rcsSetRollEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_RollEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetForwardEnabled = function rcsGetForwardEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_ForwardEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetForwardEnabled = function rcsSetForwardEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_ForwardEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetUpEnabled = function rcsGetUpEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_UpEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetUpEnabled = function rcsSetUpEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_UpEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetRightEnabled = function rcsGetRightEnabled(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_RightEnabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetRightEnabled = function rcsSetRightEnabled(rcs, value) {
    let encodedArguments = [
        encoders.uInt64(rcs), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_RightEnabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the RCS is inactive.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetAvailableTorque = function rcsGetAvailableTorque(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_AvailableTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active, in Newtons.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetMaxThrust = function rcsGetMaxThrust(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_MaxThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active in a vacuum, in Newtons.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetMaxVacuumThrust = function rcsGetMaxVacuumThrust(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_MaxVacuumThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A list of thrusters, one of each nozzel in the RCS part.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetThrusters = function rcsGetThrusters(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Thrusters', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The current specific impulse of the RCS, in seconds. Returns zero
 * if the RCS is not active.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetSpecificImpulse = function rcsGetSpecificImpulse(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_SpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the RCS, in seconds.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetVacuumSpecificImpulse = function rcsGetVacuumSpecificImpulse(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_VacuumSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The specific impulse of the RCS at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetKerbinSeaLevelSpecificImpulse = function rcsGetKerbinSeaLevelSpecificImpulse(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_KerbinSeaLevelSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The names of resources that the RCS consumes.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPropellants = function rcsGetPropellants(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Propellants', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The ratios of resources that the RCS consumes. A dictionary mapping resource names
 * to the ratios at which they are consumed by the RCS.
 * </summary>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {key : number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPropellantRatios = function rcsGetPropellantRatios(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_PropellantRatios', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS has fuel available.
 * </summary>
 *   <remarks>
 * The RCS thruster must be activated for this property to update correctly.
 * </remarks>
 * </doc>
 * @param {Long} rcs - A long value representing the id for the SpaceCenter.RCS see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetHasFuel = function rcsGetHasFuel(rcs) {
    let encodedArguments = [
        encoders.uInt64(rcs)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_HasFuel', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this radiator.
 * </summary>
 * </doc>
 * @param {Long} radiator - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetPart = function radiatorGetPart(radiator) {
    let encodedArguments = [
        encoders.uInt64(radiator)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the radiator is deployable.
 * </summary>
 * </doc>
 * @param {Long} radiator - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetDeployable = function radiatorGetDeployable(radiator) {
    let encodedArguments = [
        encoders.uInt64(radiator)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Deployable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * For a deployable radiator, <c>true</c> if the radiator is extended.
 * If the radiator is not deployable, this is always <c>true</c>.
 * </summary>
 * </doc>
 * @param {Long} radiator - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetDeployed = function radiatorGetDeployed(radiator) {
    let encodedArguments = [
        encoders.uInt64(radiator)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * For a deployable radiator, <c>true</c> if the radiator is extended.
 * If the radiator is not deployable, this is always <c>true</c>.
 * </summary>
 * </doc>
 * @param {Long} radiator - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.radiatorSetDeployed = function radiatorSetDeployed(radiator, value) {
    let encodedArguments = [
        encoders.uInt64(radiator), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the radiator.
 * </summary>
 *   <remarks>
 * A fixed radiator is always <see cref="M:SpaceCenter.RadiatorState.Extended" />.
 * </remarks>
 * </doc>
 * @param {Long} radiator - A long value representing the id for the SpaceCenter.Radiator see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.RadiatorState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetState = function radiatorGetState(radiator) {
    let encodedArguments = [
        encoders.uInt64(radiator)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Extended', 1 : 'Retracted', 2 : 'Extending', 3 : 'Retracting', 4 : 'Broken'})
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this reaction wheel.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetPart = function reactionWheelGetPart(reactionWheel) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetActive = function reactionWheelGetActive(reactionWheel) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.reactionWheelSetActive = function reactionWheelSetActive(reactionWheel, value) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_set_Active', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is broken.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetBroken = function reactionWheelGetBroken(reactionWheel) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Broken', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the reaction wheel is inactive or broken.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetAvailableTorque = function reactionWheelGetAvailableTorque(reactionWheel) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_AvailableTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque the reaction wheel can provide, is it active,
 * in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * </summary>
 * </doc>
 * @param {Long} reactionWheel - A long value representing the id for the SpaceCenter.ReactionWheel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetMaxTorque = function reactionWheelGetMaxTorque(reactionWheel) {
    let encodedArguments = [
        encoders.uInt64(reactionWheel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_MaxTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * True if the specified converter is active.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterActive = function resourceConverterActive(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterName = function resourceConverterName(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Start the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {void}
 * @returns {void}
*/
module.exports.resourceConverterStart = function resourceConverterStart(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Start', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Stop the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {void}
 * @returns {void}
*/
module.exports.resourceConverterStop = function resourceConverterStop(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Stop', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceConverterState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterState = function resourceConverterState(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_State', encodedArguments),
        decode: decoders.enum({0 : 'Running', 1 : 'Idle', 2 : 'MissingResource', 3 : 'StorageFull', 4 : 'Capacity', 5 : 'Unknown'})
    };
};

/**
 * <doc>
 *   <summary>
 * Status information for the specified converter.
 * This is the full status message shown in the in-game UI.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterStatusInfo = function resourceConverterStatusInfo(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_StatusInfo', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * List of the names of resources consumed by the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterInputs = function resourceConverterInputs(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Inputs', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * List of the names of resources produced by the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} index 
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterOutputs = function resourceConverterOutputs(resourceConverter, index) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter), 
        encoders.sInt32(index)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Outputs', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this converter.
 * </summary>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterGetPart = function resourceConverterGetPart(resourceConverter) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The number of converters in the part.
 * </summary>
 * </doc>
 * @param {Long} resourceConverter - A long value representing the id for the SpaceCenter.ResourceConverter see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterGetCount = function resourceConverterGetCount(resourceConverter) {
    let encodedArguments = [
        encoders.uInt64(resourceConverter)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_get_Count', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this harvester.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetPart = function resourceHarvesterGetPart(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the harvester.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceHarvesterState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetState = function resourceHarvesterGetState(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Deploying', 1 : 'Deployed', 2 : 'Retracting', 3 : 'Retracted', 4 : 'Active'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetDeployed = function resourceHarvesterGetDeployed(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.resourceHarvesterSetDeployed = function resourceHarvesterSetDeployed(resourceHarvester, value) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetActive = function resourceHarvesterGetActive(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.resourceHarvesterSetActive = function resourceHarvesterSetActive(resourceHarvester, value) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_set_Active', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which the drill is extracting ore, in units per second.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetExtractionRate = function resourceHarvesterGetExtractionRate(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_ExtractionRate', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The thermal efficiency of the drill, as a percentage of its maximum.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetThermalEfficiency = function resourceHarvesterGetThermalEfficiency(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_ThermalEfficiency', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The core temperature of the drill, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetCoreTemperature = function resourceHarvesterGetCoreTemperature(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_CoreTemperature', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The core temperature at which the drill will operate with peak efficiency, in Kelvin.
 * </summary>
 * </doc>
 * @param {Long} resourceHarvester - A long value representing the id for the SpaceCenter.ResourceHarvester see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetOptimumCoreTemperature = function resourceHarvesterGetOptimumCoreTemperature(resourceHarvester) {
    let encodedArguments = [
        encoders.uInt64(resourceHarvester)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_OptimumCoreTemperature', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Data amount.
 * </summary>
 * </doc>
 * @param {Long} scienceData - A long value representing the id for the SpaceCenter.ScienceData see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetDataAmount = function scienceDataGetDataAmount(scienceData) {
    let encodedArguments = [
        encoders.uInt64(scienceData)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_DataAmount', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Science value.
 * </summary>
 * </doc>
 * @param {Long} scienceData - A long value representing the id for the SpaceCenter.ScienceData see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetScienceValue = function scienceDataGetScienceValue(scienceData) {
    let encodedArguments = [
        encoders.uInt64(scienceData)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_ScienceValue', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Transmit value.
 * </summary>
 * </doc>
 * @param {Long} scienceData - A long value representing the id for the SpaceCenter.ScienceData see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetTransmitValue = function scienceDataGetTransmitValue(scienceData) {
    let encodedArguments = [
        encoders.uInt64(scienceData)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_TransmitValue', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Amount of science already earned from this subject, not updated until after transmission/recovery.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScience = function scienceSubjectGetScience(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_Science', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Total science allowable for this subject.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScienceCap = function scienceSubjectGetScienceCap(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_ScienceCap', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 *  Whether the experiment has been completed.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetIsComplete = function scienceSubjectGetIsComplete(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_IsComplete', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Multiply science value by this to determine data amount in mits.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetDataScale = function scienceSubjectGetDataScale(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_DataScale', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Diminishing value multiplier for decreasing the science value returned from repeated experiments.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScientificValue = function scienceSubjectGetScientificValue(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_ScientificValue', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Multiplier for specific Celestial Body/Experiment Situation combination.
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetSubjectValue = function scienceSubjectGetSubjectValue(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_SubjectValue', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Title of science subject, displayed in science archives
 * </summary>
 * </doc>
 * @param {Long} scienceSubject - A long value representing the id for the SpaceCenter.ScienceSubject see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetTitle = function scienceSubjectGetTitle(scienceSubject) {
    let encodedArguments = [
        encoders.uInt64(scienceSubject)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_Title', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this sensor.
 * </summary>
 * </doc>
 * @param {Long} sensor - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetPart = function sensorGetPart(sensor) {
    let encodedArguments = [
        encoders.uInt64(sensor)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {Long} sensor - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetActive = function sensorGetActive(sensor) {
    let encodedArguments = [
        encoders.uInt64(sensor)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Active', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {Long} sensor - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.sensorSetActive = function sensorSetActive(sensor, value) {
    let encodedArguments = [
        encoders.uInt64(sensor), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_set_Active', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current value of the sensor.
 * </summary>
 * </doc>
 * @param {Long} sensor - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetValue = function sensorGetValue(sensor) {
    let encodedArguments = [
        encoders.uInt64(sensor)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Value', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current power usage of the sensor, in units of charge per second.
 * </summary>
 * </doc>
 * @param {Long} sensor - A long value representing the id for the SpaceCenter.Sensor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetPowerUsage = function sensorGetPowerUsage(sensor) {
    let encodedArguments = [
        encoders.uInt64(sensor)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_PowerUsage', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this solar panel.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetPart = function solarPanelGetPart(solarPanel) {
    let encodedArguments = [
        encoders.uInt64(solarPanel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetDeployed = function solarPanelGetDeployed(solarPanel) {
    let encodedArguments = [
        encoders.uInt64(solarPanel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_Deployed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.solarPanelSetDeployed = function solarPanelSetDeployed(solarPanel, value) {
    let encodedArguments = [
        encoders.uInt64(solarPanel), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_set_Deployed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the solar panel.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.SolarPanelState see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetState = function solarPanelGetState(solarPanel) {
    let encodedArguments = [
        encoders.uInt64(solarPanel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_State', encodedArguments),
        decode: decoders.enum({0 : 'Extended', 1 : 'Retracted', 2 : 'Extending', 3 : 'Retracting', 4 : 'Broken'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of energy being generated by the solar panel, in
 * units of charge per second.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetEnergyFlow = function solarPanelGetEnergyFlow(solarPanel) {
    let encodedArguments = [
        encoders.uInt64(solarPanel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_EnergyFlow', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of sunlight that is incident on the solar panel,
 * as a percentage. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Long} solarPanel - A long value representing the id for the SpaceCenter.SolarPanel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetSunExposure = function solarPanelGetSunExposure(solarPanel) {
    let encodedArguments = [
        encoders.uInt64(solarPanel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_SunExposure', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the thruster generates thrust, in the given reference frame.
 * For gimballed engines, this takes into account the current rotation of the gimbal.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterThrustPosition = function thrusterThrustPosition(thruster, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(thruster), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_ThrustPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction of the force generated by the thruster, in the given reference frame.
 * This is opposite to the direction in which the thruster expels propellant.
 * For gimballed engines, this takes into account the current rotation of the gimbal.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterThrustDirection = function thrusterThrustDirection(thruster, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(thruster), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_ThrustDirection', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the thruster generates thrust, when the engine is in its
 * initial position (no gimballing), in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 *   <remarks>
 * This position can move when the gimbal rotates. This is because the thrust position and
 * gimbal position are not necessarily the same.
 * </remarks>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterInitialThrustPosition = function thrusterInitialThrustPosition(thruster, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(thruster), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_InitialThrustPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction of the force generated by the thruster, when the engine is in its
 * initial position (no gimballing), in the given reference frame.
 * This is opposite to the direction in which the thruster expels propellant.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterInitialThrustDirection = function thrusterInitialThrustDirection(thruster, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(thruster), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_InitialThrustDirection', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position around which the gimbal pivots.
 * </summary>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGimbalPosition = function thrusterGimbalPosition(thruster, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(thruster), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_GimbalPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The <see cref="T:SpaceCenter.Part" /> that contains this thruster.
 * </summary>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetPart = function thrusterGetPart(thruster) {
    let encodedArguments = [
        encoders.uInt64(thruster)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A reference frame that is fixed relative to the thruster and orientated with
 * its thrust direction (<see cref="M:SpaceCenter.Thruster.ThrustDirection" />).
 * For gimballed engines, this takes into account the current rotation of the gimbal.
 * <list type="bullet"><item><description>
 * The origin is at the position of thrust for this thruster (<see cref="M:SpaceCenter.Thruster.ThrustPosition" />).
 * </description></item><item><description>
 * The axes rotate with the thrust direction.
 * This is the direction in which the thruster expels propellant, including any gimballing.
 * </description></item><item><description>The y-axis points along the thrust direction.</description></item><item><description>The x-axis and z-axis are perpendicular to the thrust direction.</description></item></list></summary>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetThrustReferenceFrame = function thrusterGetThrustReferenceFrame(thruster) {
    let encodedArguments = [
        encoders.uInt64(thruster)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_ThrustReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the thruster is gimballed.
 * </summary>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetGimballed = function thrusterGetGimballed(thruster) {
    let encodedArguments = [
        encoders.uInt64(thruster)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_Gimballed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current gimbal angle in the pitch, roll and yaw axes.
 * </summary>
 * </doc>
 * @param {Long} thruster - A long value representing the id for the SpaceCenter.Thruster see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetGimbalAngle = function thrusterGetGimbalAngle(thruster) {
    let encodedArguments = [
        encoders.uInt64(thruster)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_GimbalAngle', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the resource.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetName = function resourceGetName(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part containing the resource.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetPart = function resourceGetPart(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The total amount of the resource that can be stored in the part.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetMax = function resourceGetMax(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Max', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of the resource that is currently stored in the part.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetAmount = function resourceGetAmount(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Amount', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The density of the resource, in <math>kg/l</math>.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetDensity = function resourceGetDensity(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Density', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The flow mode of the resource.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceFlowMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetFlowMode = function resourceGetFlowMode(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_FlowMode', encodedArguments),
        decode: decoders.enum({0 : 'Vessel', 1 : 'Stage', 2 : 'Adjacent', 3 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetEnabled = function resourceGetEnabled(resource) {
    let encodedArguments = [
        encoders.uInt64(resource)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Enabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {Long} resource - A long value representing the id for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.resourceSetEnabled = function resourceSetEnabled(resource, value) {
    let encodedArguments = [
        encoders.uInt64(resource), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_set_Enabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Start transferring a resource transfer between a pair of parts. The transfer will move at most
 * <paramref name="maxAmount" /> units of the resource, depending on how much of the resource is
 * available in the source part and how much storage is available in the destination part.
 * Use <see cref="M:SpaceCenter.ResourceTransfer.Complete" /> to check if the transfer is complete.
 * Use <see cref="M:SpaceCenter.ResourceTransfer.Amount" /> to see how much of the resource has been transferred.
 * </summary>
 *   <param name="fromPart">The part to transfer to.</param>
 *   <param name="toPart">The part to transfer from.</param>
 *   <param name="resource">The name of the resource to transfer.</param>
 *   <param name="maxAmount">The maximum amount of resource to transfer.</param>
 * </doc>
 * @param {Long} fromPart - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} toPart - A long value representing the id for the SpaceCenter.Part see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} resource 
 * @param {number} maxAmount 
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceTransfer see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferStaticStart = function resourceTransferStaticStart(fromPart, toPart, resource, maxAmount) {
    let encodedArguments = [
        encoders.uInt64(fromPart), 
        encoders.uInt64(toPart), 
        encoders.string(resource), 
        encoders.float(maxAmount)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_static_Start', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the transfer has completed.
 * </summary>
 * </doc>
 * @param {Long} resourceTransfer - A long value representing the id for the SpaceCenter.ResourceTransfer see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferGetComplete = function resourceTransferGetComplete(resourceTransfer) {
    let encodedArguments = [
        encoders.uInt64(resourceTransfer)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_get_Complete', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of the resource that has been transferred.
 * </summary>
 * </doc>
 * @param {Long} resourceTransfer - A long value representing the id for the SpaceCenter.ResourceTransfer see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferGetAmount = function resourceTransferGetAmount(resourceTransfer) {
    let encodedArguments = [
        encoders.uInt64(resourceTransfer)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_get_Amount', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * All the individual resources with the given name that can be stored.
 * </summary>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesWithResource = function resourcesWithResource(resources, name) {
    let encodedArguments = [
        encoders.uInt64(resources), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_WithResource', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Check whether the named resource can be stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesHasResource = function resourcesHasResource(resources, name) {
    let encodedArguments = [
        encoders.uInt64(resources), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_HasResource', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the amount of a resource that can be stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesMax = function resourcesMax(resources, name) {
    let encodedArguments = [
        encoders.uInt64(resources), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_Max', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the amount of a resource that is currently stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesAmount = function resourcesAmount(resources, name) {
    let encodedArguments = [
        encoders.uInt64(resources), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_Amount', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the density of a resource, in kg/l.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {string} name 
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesStaticDensity = function resourcesStaticDensity(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_static_Density', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the flow mode of a resource.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {string} name 
 * @result {Long} - A long value representing the id for the SpaceCenter.ResourceFlowMode see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesStaticFlowMode = function resourcesStaticFlowMode(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_static_FlowMode', encodedArguments),
        decode: decoders.enum({0 : 'Vessel', 1 : 'Stage', 2 : 'Adjacent', 3 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * All the individual resources that can be stored.
 * </summary>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Resource see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetAll = function resourcesGetAll(resources) {
    let encodedArguments = [
        encoders.uInt64(resources)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_All', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of resource names that can be stored.
 * </summary>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetNames = function resourcesGetNames(resources) {
    let encodedArguments = [
        encoders.uInt64(resources)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_Names', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of all the resources are enabled.
 * </summary>
 *   <remarks>
 * This is true if all of the resources are enabled. If any of the resources are not enabled, this is false.
 * </remarks>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetEnabled = function resourcesGetEnabled(resources) {
    let encodedArguments = [
        encoders.uInt64(resources)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_Enabled', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of all the resources are enabled.
 * </summary>
 *   <remarks>
 * This is true if all of the resources are enabled. If any of the resources are not enabled, this is false.
 * </remarks>
 * </doc>
 * @param {Long} resources - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.resourcesSetEnabled = function resourcesSetEnabled(resources, value) {
    let encodedArguments = [
        encoders.uInt64(resources), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_set_Enabled', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Recover the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.vesselRecover = function vesselRecover(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Recover', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a <see cref="T:SpaceCenter.Flight" /> object that can be used to get flight
 * telemetry for the vessel, in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 * Reference frame. Defaults to the vessel's surface reference frame (<see cref="M:SpaceCenter.Vessel.SurfaceReferenceFrame" />).
 * </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Flight see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselFlight = function vesselFlight(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Flight', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a <see cref="T:SpaceCenter.Resources" /> object, that can used to get
 * information about resources stored in a given <paramref name="stage" />.
 * </summary>
 *   <param name="stage">Get resources for parts that are decoupled in this stage.</param>
 *   <param name="cumulative">When <c>false</c>, returns the resources for parts
 * decoupled in just the given stage. When <c>true</c> returns the resources decoupled in
 * the given stage and all subsequent stages combined.</param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} stage 
 * @param {boolean} cumulative 
 * @result {Long} - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselResourcesInDecoupleStage = function vesselResourcesInDecoupleStage(vessel, stage, cumulative) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.sInt32(stage), 
        encoders.bool(cumulative)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_ResourcesInDecoupleStage', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselPosition = function vesselPosition(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the velocity vector of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselVelocity = function vesselVelocity(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Velocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the rotation of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselRotation = function vesselRotation(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the direction in which the vessel is pointing, as a unit vector, in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselDirection = function vesselDirection(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Direction', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Returns the angular velocity of the vessel in the given reference frame. The magnitude of the returned
 * vector is the rotational speed in radians per second, and the direction of the vector indicates the
 * axis of rotation (using the right hand rule).
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselAngularVelocity = function vesselAngularVelocity(vessel, referenceFrame) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.uInt64(referenceFrame)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_AngularVelocity', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetName = function vesselGetName(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.vesselSetName = function vesselSetName(vessel, value) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_set_Name', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.VesselType see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetType = function vesselGetType(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Type', encodedArguments),
        decode: decoders.enum({0 : 'Ship', 1 : 'Station', 2 : 'Lander', 3 : 'Probe', 4 : 'Rover', 5 : 'Base', 6 : 'Debris'})
    };
};

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.VesselType see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.vesselSetType = function vesselSetType(vessel, value) {
    let encodedArguments = [
        encoders.uInt64(vessel), 
        encoders.enum({0 : 'Ship', 1 : 'Station', 2 : 'Lander', 3 : 'Probe', 4 : 'Rover', 5 : 'Base', 6 : 'Debris'})(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_set_Type', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The situation the vessel is in.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.VesselSituation see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSituation = function vesselGetSituation(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Situation', encodedArguments),
        decode: decoders.enum({0 : 'PreLaunch', 1 : 'Orbiting', 2 : 'SubOrbital', 3 : 'Escaping', 4 : 'Flying', 5 : 'Landed', 6 : 'Splashed', 7 : 'Docked'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel is recoverable.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetRecoverable = function vesselGetRecoverable(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Recoverable', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The mission elapsed time in seconds.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMet = function vesselGetMet(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MET', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the biome the vessel is currently in.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetBiome = function vesselGetBiome(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Biome', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current orbit of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Orbit see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetOrbit = function vesselGetOrbit(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Orbit', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a <see cref="T:SpaceCenter.Control" /> object that can be used to manipulate
 * the vessel's control inputs. For example, its pitch/yaw/roll controls,
 * RCS and thrust.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Control see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetControl = function vesselGetControl(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Control', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.AutoPilot" /> object, that can be used to perform
 * simple auto-piloting of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.AutoPilot see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAutoPilot = function vesselGetAutoPilot(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AutoPilot', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Resources" /> object, that can used to get information
 * about resources stored in the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Resources see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetResources = function vesselGetResources(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Resources', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parts" /> object, that can used to interact with the parts that make up this vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.Parts see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetParts = function vesselGetParts(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Parts', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, including resources, in kg.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMass = function vesselGetMass(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Mass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, excluding resources, in kg.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetDryMass = function vesselGetDryMass(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_DryMass', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total thrust currently being produced by the vessel's engines, in
 * Newtons. This is computed by summing <see cref="M:SpaceCenter.Engine.Thrust" /> for
 * every engine in the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetThrust = function vesselGetThrust(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Thrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the total available thrust that can be produced by the vessel's
 * active engines, in Newtons. This is computed by summing
 * <see cref="M:SpaceCenter.Engine.AvailableThrust" /> for every active engine in the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableThrust = function vesselGetAvailableThrust(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total maximum thrust that can be produced by the vessel's active
 * engines, in Newtons. This is computed by summing
 * <see cref="M:SpaceCenter.Engine.MaxThrust" /> for every active engine.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMaxThrust = function vesselGetMaxThrust(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MaxThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total maximum thrust that can be produced by the vessel's active
 * engines when the vessel is in a vacuum, in Newtons. This is computed by
 * summing <see cref="M:SpaceCenter.Engine.MaxVacuumThrust" /> for every active engine.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMaxVacuumThrust = function vesselGetMaxVacuumThrust(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MaxVacuumThrust', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The combined specific impulse of all active engines, in seconds. This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSpecificImpulse = function vesselGetSpecificImpulse(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The combined vacuum specific impulse of all active engines, in seconds. This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetVacuumSpecificImpulse = function vesselGetVacuumSpecificImpulse(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_VacuumSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The combined specific impulse of all active engines at sea level on Kerbin, in seconds.
 * This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetKerbinSeaLevelSpecificImpulse = function vesselGetKerbinSeaLevelSpecificImpulse(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_KerbinSeaLevelSpecificImpulse', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The moment of inertia of the vessel around its center of mass in <math>kg.m^2</math>.
 * The inertia values are around the pitch, roll and yaw directions respectively.
 * This corresponds to the vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMomentOfInertia = function vesselGetMomentOfInertia(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MomentOfInertia', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The inertia tensor of the vessel around its center of mass, in the vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * Returns the 3x3 matrix as a list of elements, in row-major order.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetInertiaTensor = function vesselGetInertiaTensor(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_InertiaTensor', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque that the vessel generate. Includes contributions from reaction wheels,
 * RCS, gimballed engines and aerodynamic control surfaces.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableTorque = function vesselGetAvailableTorque(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active and powered reaction wheels can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableReactionWheelTorque = function vesselGetAvailableReactionWheelTorque(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableReactionWheelTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active RCS thrusters can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableRcsTorque = function vesselGetAvailableRcsTorque(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableRCSTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active and gimballed engines can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableEngineTorque = function vesselGetAvailableEngineTorque(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableEngineTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum torque that the aerodynamic control surfaces can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableControlSurfaceTorque = function vesselGetAvailableControlSurfaceTorque(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableControlSurfaceTorque', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the vessel.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the vessel.</description></item><item><description>The x-axis points out to the right of the vessel.</description></item><item><description>The y-axis points in the forward direction of the vessel.</description></item><item><description>The z-axis points out of the bottom off the vessel.</description></item></list></summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetReferenceFrame = function vesselGetReferenceFrame(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the vessels
 * orbital prograde/normal/radial directions.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the orbital prograde/normal/radial directions.</description></item><item><description>The x-axis points in the orbital anti-radial direction.</description></item><item><description>The y-axis points in the orbital prograde direction.</description></item><item><description>The z-axis points in the orbital normal direction.</description></item></list></summary>
 *   <remarks>
 * Be careful not to confuse this with 'orbit' mode on the navball.
 * </remarks>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetOrbitalReferenceFrame = function vesselGetOrbitalReferenceFrame(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_OrbitalReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the surface
 * of the body being orbited.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the north and up directions on the surface of the body.</description></item><item><description>The x-axis points in the <a href="https://en.wikipedia.org/wiki/Zenith">zenith</a>
 * direction (upwards, normal to the body being orbited, from the center of the body towards the center of
 * mass of the vessel).</description></item><item><description>The y-axis points northwards towards the
 * <a href="https://en.wikipedia.org/wiki/Horizon">astronomical horizon</a> (north, and tangential to the
 * surface of the body -- the direction in which a compass would point when on the surface).</description></item><item><description>The z-axis points eastwards towards the
 * <a href="https://en.wikipedia.org/wiki/Horizon">astronomical horizon</a> (east, and tangential to the
 * surface of the body -- east on a compass when on the surface).</description></item></list></summary>
 *   <remarks>
 * Be careful not to confuse this with 'surface' mode on the navball.
 * </remarks>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSurfaceReferenceFrame = function vesselGetSurfaceReferenceFrame(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SurfaceReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the velocity
 * vector of the vessel relative to the surface of the body being orbited.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the vessel's velocity vector.</description></item><item><description>The y-axis points in the direction of the vessel's velocity vector,
 * relative to the surface of the body being orbited.</description></item><item><description>The z-axis is in the plane of the
 * <a href="https://en.wikipedia.org/wiki/Horizon">astronomical horizon</a>.</description></item><item><description>The x-axis is orthogonal to the other two axes.</description></item></list></summary>
 * </doc>
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSurfaceVelocityReferenceFrame = function vesselGetSurfaceVelocityReferenceFrame(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SurfaceVelocityReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.waypointRemove = function waypointRemove(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetBody = function waypointGetBody(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Body', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetBody = function waypointSetBody(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Body', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetName = function waypointGetName(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetName = function waypointSetName(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Name', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetColor = function waypointGetColor(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Color', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetColor = function waypointSetColor(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetIcon = function waypointGetIcon(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Icon', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetIcon = function waypointSetIcon(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Icon', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetLatitude = function waypointGetLatitude(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Latitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetLatitude = function waypointSetLatitude(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Latitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetLongitude = function waypointGetLongitude(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Longitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetLongitude = function waypointSetLongitude(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Longitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetMeanAltitude = function waypointGetMeanAltitude(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_MeanAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetMeanAltitude = function waypointSetMeanAltitude(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_MeanAltitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetSurfaceAltitude = function waypointGetSurfaceAltitude(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_SurfaceAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetSurfaceAltitude = function waypointSetSurfaceAltitude(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_SurfaceAltitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetBedrockAltitude = function waypointGetBedrockAltitude(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_BedrockAltitude', encodedArguments),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetBedrockAltitude = function waypointSetBedrockAltitude(waypoint, value) {
    let encodedArguments = [
        encoders.uInt64(waypoint), 
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_BedrockAltitude', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * True if waypoint is a point near or on the body rather than high in orbit.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetNearSurface = function waypointGetNearSurface(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_NearSurface', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * True if waypoint is actually glued to the ground.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetGrounded = function waypointGetGrounded(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Grounded', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The integer index of this waypoint amongst its cluster of sibling waypoints. 
 * In other words, when you have a cluster of waypoints called "Somewhere Alpha", "Somewhere Beta", and "Somewhere Gamma", 
 * then the alpha site has index 0, the beta site has index 1 and the gamma site has index 2. 
 * When <see cref="M:SpaceCenter.Waypoint.Clustered" /> is false, this value is zero but meaningless.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetIndex = function waypointGetIndex(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Index', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * True if this waypoint is part of a set of clustered waypoints with greek letter names appended (Alpha, Beta, Gamma, etc). 
 * If true, there is a one-to-one correspondence with the greek letter name and the <see cref="M:SpaceCenter.Waypoint.Index" />.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetClustered = function waypointGetClustered(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Clustered', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the waypoint belongs to a contract.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetHasContract = function waypointGetHasContract(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_HasContract', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The id of the associated contract.
 * Returns 0 if the waypoint does not belong to a contract.
 * </summary>
 * </doc>
 * @param {Long} waypoint - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetContractId = function waypointGetContractId(waypoint) {
    let encodedArguments = [
        encoders.uInt64(waypoint)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_ContractId', encodedArguments),
        decode: decoders.sInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Creates a waypoint at the given position at ground level, and returns a
 * <see cref="T:SpaceCenter.Waypoint" /> object that can be used to modify it.
 * </summary>
 *   <param name="latitude">Latitude of the waypoint.</param>
 *   <param name="longitude">Longitude of the waypoint.</param>
 *   <param name="body">Celestial body the waypoint is attached to.</param>
 *   <param name="name">Name of the waypoint.</param>
 *   <returns>
 *   </returns>
 * </doc>
 * @param {Long} waypointManager - A long value representing the id for the SpaceCenter.WaypointManager see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {Long} body - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} name 
 * @result {Long} - A long value representing the id for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerAddWaypoint = function waypointManagerAddWaypoint(waypointManager, latitude, longitude, body, name) {
    let encodedArguments = [
        encoders.uInt64(waypointManager), 
        encoders.double(latitude), 
        encoders.double(longitude), 
        encoders.uInt64(body), 
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_AddWaypoint', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all existing waypoints.
 * </summary>
 * </doc>
 * @param {Long} waypointManager - A long value representing the id for the SpaceCenter.WaypointManager see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long[]} - A list of long values representing the ids for the SpaceCenter.Waypoint see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetWaypoints = function waypointManagerGetWaypoints(waypointManager) {
    let encodedArguments = [
        encoders.uInt64(waypointManager)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Waypoints', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Returns all available icons (from "GameData/Squad/Contracts/Icons/").
 * </summary>
 * </doc>
 * @param {Long} waypointManager - A long value representing the id for the SpaceCenter.WaypointManager see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetIcons = function waypointManagerGetIcons(waypointManager) {
    let encodedArguments = [
        encoders.uInt64(waypointManager)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Icons', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * An example map of known color - seed pairs. 
 * Any other integers may be used as seed.
 * </summary>
 * </doc>
 * @param {Long} waypointManager - A long value representing the id for the SpaceCenter.WaypointManager see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {key : number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetColors = function waypointManagerGetColors(waypointManager) {
    let encodedArguments = [
        encoders.uInt64(waypointManager)
    ];
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Colors', encodedArguments),
        decode: proto.krpc.schema.Dictionary
    };
};
