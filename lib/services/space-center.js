'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
/**
 * <doc>
 *   <summary>
 * Provides functionality to interact with Kerbal Space Program. This includes controlling
 * the active vessel, managing its resources, planning maneuver nodes and auto-piloting.
 * </summary>
 * </doc> * @result {void}
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
    return {
        call: buildProcedureCall('SpaceCenter', 'ClearTarget'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchableVessels', craftDirectory),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVessel', craftDirectory, name, launchSite),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVesselFromVAB', name),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchVesselFromSPH', name),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'Save', name),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'Load', name),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'Quicksave'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'Quickload'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'CanRailsWarpAt', factor),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'WarpTo', ut, maxRailsRate, maxPhysicsRate),
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
 * @param {SpaceCenter.ReferenceFrame} from
 * @param {SpaceCenter.ReferenceFrame} to
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformPosition = function transformPosition(position, from, to) {
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformPosition', position, from, to),
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
 * @param {SpaceCenter.ReferenceFrame} from
 * @param {SpaceCenter.ReferenceFrame} to
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformDirection = function transformDirection(direction, from, to) {
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformDirection', direction, from, to),
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
 * @param {SpaceCenter.ReferenceFrame} from
 * @param {SpaceCenter.ReferenceFrame} to
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformRotation = function transformRotation(rotation, from, to) {
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformRotation', rotation, from, to),
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
 * @param {SpaceCenter.ReferenceFrame} from
 * @param {SpaceCenter.ReferenceFrame} to
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.transformVelocity = function transformVelocity(position, velocity, from, to) {
    return {
        call: buildProcedureCall('SpaceCenter', 'TransformVelocity', position, velocity, from, to),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc> * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getActiveVessel = function getActiveVessel() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_ActiveVessel'),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} value
 * @result {void}
 * @returns {void}
*/
module.exports.setActiveVessel = function setActiveVessel(value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'set_ActiveVessel', value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all the vessels in the game.
 * </summary>
 * </doc> * @result {SpaceCenter.Vessel[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getVessels = function getVessels() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Vessels'),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A dictionary of all celestial bodies (planets, moons, etc.) in the game,
 * keyed by the name of the body.
 * </summary>
 * </doc> * @result {key : SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getBodies = function getBodies() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Bodies'),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc> * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetBody = function getTargetBody() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetBody'),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetBody = function setTargetBody(value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetBody', value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc> * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetVessel = function getTargetVessel() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetVessel'),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} value
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetVessel = function setTargetVessel(value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetVessel', value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc> * @result {SpaceCenter.DockingPort}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getTargetDockingPort = function getTargetDockingPort() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_TargetDockingPort'),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} value
 * @result {void}
 * @returns {void}
*/
module.exports.setTargetDockingPort = function setTargetDockingPort(value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'set_TargetDockingPort', value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The waypoint manager.
 * </summary>
 * </doc> * @result {SpaceCenter.WaypointManager}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWaypointManager = function getWaypointManager() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WaypointManager'),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An object that can be used to control the camera.
 * </summary>
 * </doc> * @result {SpaceCenter.Camera}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getCamera = function getCamera() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_Camera'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_UT'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_G'),
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
 * </doc> * @result {SpaceCenter.WarpMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getWarpMode = function getWarpMode() {
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpMode'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpRate'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_WarpFactor'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_RailsWarpFactor'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'set_RailsWarpFactor', value),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_PhysicsWarpFactor'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'set_PhysicsWarpFactor', value),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_MaximumRailsWarpFactor'),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'get_FARAvailable'),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Engage the auto-pilot.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotEngage = function autoPilotEngage(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Engage', autoPilot),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Disengage the auto-pilot.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotDisengage = function autoPilotDisengage(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Disengage', autoPilot),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Blocks until the vessel is pointing in the target direction and has the target roll (if set).
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotWait = function autoPilotWait(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_Wait', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {number} pitch
 * @param {number} heading
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotTargetPitchAndHeading = function autoPilotTargetPitchAndHeading(autoPilot, pitch, heading) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_TargetPitchAndHeading', autoPilot, pitch, heading),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetError = function autoPilotGetError(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_Error', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetPitchError = function autoPilotGetPitchError(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_PitchError', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetHeadingError = function autoPilotGetHeadingError(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_HeadingError', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollError = function autoPilotGetRollError(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollError', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetReferenceFrame = function autoPilotGetReferenceFrame(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_ReferenceFrame', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {SpaceCenter.ReferenceFrame} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetReferenceFrame = function autoPilotSetReferenceFrame(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_ReferenceFrame', autoPilot, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetPitch = function autoPilotGetTargetPitch(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetPitch', autoPilot),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetPitch = function autoPilotSetTargetPitch(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetPitch', autoPilot, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetHeading = function autoPilotGetTargetHeading(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetHeading', autoPilot),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetHeading = function autoPilotSetTargetHeading(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetHeading', autoPilot, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetRoll = function autoPilotGetTargetRoll(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetRoll', autoPilot),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetRoll = function autoPilotSetTargetRoll(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetRoll', autoPilot, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTargetDirection = function autoPilotGetTargetDirection(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TargetDirection', autoPilot),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTargetDirection = function autoPilotSetTargetDirection(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TargetDirection', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetSas = function autoPilotGetSas(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_SAS', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetSas = function autoPilotSetSas(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_SAS', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {SpaceCenter.SASMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetSasMode = function autoPilotGetSasMode(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_SASMode', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {SpaceCenter.SASMode} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetSasMode = function autoPilotSetSasMode(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_SASMode', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollThreshold = function autoPilotGetRollThreshold(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollThreshold', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetRollThreshold = function autoPilotSetRollThreshold(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_RollThreshold', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetStoppingTime = function autoPilotGetStoppingTime(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_StoppingTime', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetStoppingTime = function autoPilotSetStoppingTime(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_StoppingTime', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetDecelerationTime = function autoPilotGetDecelerationTime(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_DecelerationTime', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetDecelerationTime = function autoPilotSetDecelerationTime(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_DecelerationTime', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetAttenuationAngle = function autoPilotGetAttenuationAngle(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_AttenuationAngle', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetAttenuationAngle = function autoPilotSetAttenuationAngle(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_AttenuationAngle', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetAutoTune = function autoPilotGetAutoTune(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_AutoTune', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetAutoTune = function autoPilotSetAutoTune(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_AutoTune', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetTimeToPeak = function autoPilotGetTimeToPeak(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_TimeToPeak', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetTimeToPeak = function autoPilotSetTimeToPeak(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_TimeToPeak', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetOvershoot = function autoPilotGetOvershoot(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_Overshoot', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetOvershoot = function autoPilotSetOvershoot(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_Overshoot', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetPitchPidGains = function autoPilotGetPitchPidGains(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_PitchPIDGains', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetPitchPidGains = function autoPilotSetPitchPidGains(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_PitchPIDGains', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetRollPidGains = function autoPilotGetRollPidGains(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_RollPIDGains', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetRollPidGains = function autoPilotSetRollPidGains(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_RollPIDGains', autoPilot, value),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.autoPilotGetYawPidGains = function autoPilotGetYawPidGains(autoPilot) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_get_YawPIDGains', autoPilot),
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
 * @param {SpaceCenter.AutoPilot} autoPilot
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.autoPilotSetYawPidGains = function autoPilotSetYawPidGains(autoPilot, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'AutoPilot_set_YawPIDGains', autoPilot, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {SpaceCenter.CameraMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMode = function cameraGetMode(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Mode', camera),
        decode: decoders.enum({0 : 'Automatic', 1 : 'Free', 2 : 'Chase', 3 : 'Locked', 4 : 'Orbital', 5 : 'IVA', 6 : 'Map'})
    };
};

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @param {SpaceCenter.CameraMode} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetMode = function cameraSetMode(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Mode', camera, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetPitch = function cameraGetPitch(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Pitch', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetPitch = function cameraSetPitch(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Pitch', camera, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetHeading = function cameraGetHeading(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Heading', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetHeading = function cameraSetHeading(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Heading', camera, value),
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
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetDistance = function cameraGetDistance(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_Distance', camera),
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
 * @param {SpaceCenter.Camera} camera
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetDistance = function cameraSetDistance(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_Distance', camera, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pitch of the camera.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMinPitch = function cameraGetMinPitch(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MinPitch', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum pitch of the camera.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMaxPitch = function cameraGetMaxPitch(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MaxPitch', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Minimum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMinDistance = function cameraGetMinDistance(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MinDistance', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetMaxDistance = function cameraGetMaxDistance(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_MaxDistance', camera),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Default distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Camera} camera
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetDefaultDistance = function cameraGetDefaultDistance(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_DefaultDistance', camera),
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
 * @param {SpaceCenter.Camera} camera
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedBody = function cameraGetFocussedBody(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedBody', camera),
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
 * @param {SpaceCenter.Camera} camera
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedBody = function cameraSetFocussedBody(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedBody', camera, value),
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
 * @param {SpaceCenter.Camera} camera
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedVessel = function cameraGetFocussedVessel(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedVessel', camera),
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
 * @param {SpaceCenter.Camera} camera
 * @param {SpaceCenter.Vessel} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedVessel = function cameraSetFocussedVessel(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedVessel', camera, value),
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
 * @param {SpaceCenter.Camera} camera
 * @result {SpaceCenter.Node}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cameraGetFocussedNode = function cameraGetFocussedNode(camera) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_get_FocussedNode', camera),
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
 * @param {SpaceCenter.Camera} camera
 * @param {SpaceCenter.Node} value
 * @result {void}
 * @returns {void}
*/
module.exports.cameraSetFocussedNode = function cameraSetFocussedNode(camera, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Camera_set_FocussedNode', camera, value),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodySurfaceHeight = function celestialBodySurfaceHeight(celestialBody, latitude, longitude) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_SurfaceHeight', celestialBody, latitude, longitude),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBedrockHeight = function celestialBodyBedrockHeight(celestialBody, latitude, longitude) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BedrockHeight', celestialBody, latitude, longitude),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyMslPosition = function celestialBodyMslPosition(celestialBody, latitude, longitude, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_MSLPosition', celestialBody, latitude, longitude, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodySurfacePosition = function celestialBodySurfacePosition(celestialBody, latitude, longitude, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_SurfacePosition', celestialBody, latitude, longitude, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBedrockPosition = function celestialBodyBedrockPosition(celestialBody, latitude, longitude, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BedrockPosition', celestialBody, latitude, longitude, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The biomes at the given latitude and longitude, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {number} latitude
 * @param {number} longitude
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyBiomeAt = function celestialBodyBiomeAt(celestialBody, latitude, longitude) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_BiomeAt', celestialBody, latitude, longitude),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyPosition = function celestialBodyPosition(celestialBody, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Position', celestialBody, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyVelocity = function celestialBodyVelocity(celestialBody, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Velocity', celestialBody, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyRotation = function celestialBodyRotation(celestialBody, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Rotation', celestialBody, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyDirection = function celestialBodyDirection(celestialBody, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_Direction', celestialBody, referenceFrame),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyAngularVelocity = function celestialBodyAngularVelocity(celestialBody, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_AngularVelocity', celestialBody, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the body.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetName = function celestialBodyGetName(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Name', celestialBody),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * A list of celestial bodies that are in orbit around this celestial body.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {SpaceCenter.CelestialBody[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSatellites = function celestialBodyGetSatellites(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Satellites', celestialBody),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The mass of the body, in kilograms.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetMass = function celestialBodyGetMass(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Mass', celestialBody),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetGravitationalParameter = function celestialBodyGetGravitationalParameter(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_GravitationalParameter', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The acceleration due to gravity at sea level (mean altitude) on the body, in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSurfaceGravity = function celestialBodyGetSurfaceGravity(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SurfaceGravity', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The sidereal rotational period of the body, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetRotationalPeriod = function celestialBodyGetRotationalPeriod(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_RotationalPeriod', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rotational speed of the body, in radians per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetRotationalSpeed = function celestialBodyGetRotationalSpeed(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_RotationalSpeed', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The equatorial radius of the body, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetEquatorialRadius = function celestialBodyGetEquatorialRadius(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_EquatorialRadius', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The radius of the sphere of influence of the body, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSphereOfInfluence = function celestialBodyGetSphereOfInfluence(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SphereOfInfluence', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The orbit of the body.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {SpaceCenter.Orbit}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetOrbit = function celestialBodyGetOrbit(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Orbit', celestialBody),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the body has an atmosphere.
 *            </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetHasAtmosphere = function celestialBodyGetHasAtmosphere(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_HasAtmosphere', celestialBody),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The depth of the atmosphere, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetAtmosphereDepth = function celestialBodyGetAtmosphereDepth(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_AtmosphereDepth', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if there is oxygen in the atmosphere, required for air-breathing engines.
 *            </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetHasAtmosphericOxygen = function celestialBodyGetHasAtmosphericOxygen(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_HasAtmosphericOxygen', celestialBody),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The biomes present on this body.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetBiomes = function celestialBodyGetBiomes(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_Biomes', celestialBody),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be flying "high" when doing science.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetFlyingHighAltitudeThreshold = function celestialBodyGetFlyingHighAltitudeThreshold(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_FlyingHighAltitudeThreshold', celestialBody),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be in "high" space when doing science.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetSpaceHighAltitudeThreshold = function celestialBodyGetSpaceHighAltitudeThreshold(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_SpaceHighAltitudeThreshold', celestialBody),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetReferenceFrame = function celestialBodyGetReferenceFrame(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_ReferenceFrame', celestialBody),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetNonRotatingReferenceFrame = function celestialBodyGetNonRotatingReferenceFrame(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_NonRotatingReferenceFrame', celestialBody),
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
 * @param {SpaceCenter.CelestialBody} celestialBody
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.celestialBodyGetOrbitalReferenceFrame = function celestialBodyGetOrbitalReferenceFrame(celestialBody) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CelestialBody_get_OrbitalReferenceFrame', celestialBody),
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
 * @param {SpaceCenter.Control} control
 * @result {SpaceCenter.Vessel[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlActivateNextStage = function controlActivateNextStage(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_ActivateNextStage', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} group
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetActionGroup = function controlGetActionGroup(control, group) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_GetActionGroup', control, group),
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
 * @param {SpaceCenter.Control} control
 * @param {number} group
 * @param {boolean} state
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetActionGroup = function controlSetActionGroup(control, group, state) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_SetActionGroup', control, group, state),
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
 * @param {SpaceCenter.Control} control
 * @param {number} group
 * @result {void}
 * @returns {void}
*/
module.exports.controlToggleActionGroup = function controlToggleActionGroup(control, group) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_ToggleActionGroup', control, group),
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
 * @param {SpaceCenter.Control} control
 * @param {number} ut
 * @param {number} prograde
 * @param {number} normal
 * @param {number} radial
 * @result {SpaceCenter.Node}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlAddNode = function controlAddNode(control, ut, prograde, normal, radial) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_AddNode', control, ut, prograde, normal, radial),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Remove all maneuver nodes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {void}
 * @returns {void}
*/
module.exports.controlRemoveNodes = function controlRemoveNodes(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_RemoveNodes', control),
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
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSas = function controlGetSas(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SAS', control),
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
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSas = function controlSetSas(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SAS', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {SpaceCenter.SASMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSasMode = function controlGetSasMode(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SASMode', control),
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
 * @param {SpaceCenter.Control} control
 * @param {SpaceCenter.SASMode} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSasMode = function controlSetSasMode(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SASMode', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {SpaceCenter.SpeedMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetSpeedMode = function controlGetSpeedMode(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_SpeedMode', control),
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
 * @param {SpaceCenter.Control} control
 * @param {SpaceCenter.SpeedMode} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetSpeedMode = function controlSetSpeedMode(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_SpeedMode', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRcs = function controlGetRcs(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_RCS', control),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRcs = function controlSetRcs(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_RCS', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetGear = function controlGetGear(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Gear', control),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetGear = function controlSetGear(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Gear', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetLights = function controlGetLights(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Lights', control),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetLights = function controlSetLights(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Lights', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetBrakes = function controlGetBrakes(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Brakes', control),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetBrakes = function controlSetBrakes(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Brakes', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetAbort = function controlGetAbort(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Abort', control),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetAbort = function controlSetAbort(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Abort', control, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetThrottle = function controlGetThrottle(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Throttle', control),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetThrottle = function controlSetThrottle(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Throttle', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetPitch = function controlGetPitch(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Pitch', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetPitch = function controlSetPitch(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Pitch', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetYaw = function controlGetYaw(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Yaw', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetYaw = function controlSetYaw(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Yaw', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRoll = function controlGetRoll(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Roll', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRoll = function controlSetRoll(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Roll', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetForward = function controlGetForward(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Forward', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetForward = function controlSetForward(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Forward', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetUp = function controlGetUp(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Up', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetUp = function controlSetUp(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Up', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetRight = function controlGetRight(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Right', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetRight = function controlSetRight(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_Right', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetWheelThrottle = function controlGetWheelThrottle(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_WheelThrottle', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetWheelThrottle = function controlSetWheelThrottle(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_WheelThrottle', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetWheelSteering = function controlGetWheelSteering(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_WheelSteering', control),
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
 * @param {SpaceCenter.Control} control
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSetWheelSteering = function controlSetWheelSteering(control, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_set_WheelSteering', control, value),
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
 * @param {SpaceCenter.Control} control
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetCurrentStage = function controlGetCurrentStage(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_CurrentStage', control),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Returns a list of all existing maneuver nodes, ordered by time from first to last.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Control} control
 * @result {SpaceCenter.Node[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlGetNodes = function controlGetNodes(control) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Control_get_Nodes', control),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The current G force acting on the vessel in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetGForce = function flightGetGForce(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_GForce', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetMeanAltitude = function flightGetMeanAltitude(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_MeanAltitude', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSurfaceAltitude = function flightGetSurfaceAltitude(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SurfaceAltitude', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetBedrockAltitude = function flightGetBedrockAltitude(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_BedrockAltitude', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetElevation = function flightGetElevation(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Elevation', flight),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Latitude">latitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLatitude = function flightGetLatitude(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Latitude', flight),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Longitude">longitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLongitude = function flightGetLongitude(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Longitude', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetVelocity = function flightGetVelocity(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Velocity', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSpeed = function flightGetSpeed(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Speed', flight),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The horizontal speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetHorizontalSpeed = function flightGetHorizontalSpeed(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_HorizontalSpeed', flight),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The vertical speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetVerticalSpeed = function flightGetVerticalSpeed(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_VerticalSpeed', flight),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetCenterOfMass = function flightGetCenterOfMass(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_CenterOfMass', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The rotation of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRotation = function flightGetRotation(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Rotation', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction vector that the vessel is pointing in.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDirection = function flightGetDirection(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Direction', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The pitch angle of the vessel relative to the horizon, in degrees. A value between -90° and +90°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetPitch = function flightGetPitch(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Pitch', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The heading angle of the vessel relative to north, in degrees. A value between 0° and 360°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetHeading = function flightGetHeading(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Heading', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The roll angle of the vessel relative to the horizon, in degrees. A value between -180° and +180°.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRoll = function flightGetRoll(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Roll', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the prograde direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetPrograde = function flightGetPrograde(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Prograde', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the retrograde direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRetrograde = function flightGetRetrograde(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Retrograde', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the normal direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetNormal = function flightGetNormal(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Normal', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-normal direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAntiNormal = function flightGetAntiNormal(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AntiNormal', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the radial direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetRadial = function flightGetRadial(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Radial', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-radial direction.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAntiRadial = function flightGetAntiRadial(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AntiRadial', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The current density of the atmosphere around the vessel, in <math>kg/m^3</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAtmosphereDensity = function flightGetAtmosphereDensity(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AtmosphereDensity', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDynamicPressure = function flightGetDynamicPressure(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_DynamicPressure', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure at mean sea level, in Pascals.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticPressureAtMsl = function flightGetStaticPressureAtMsl(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticPressureAtMSL', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure acting on the vessel, in Pascals.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticPressure = function flightGetStaticPressure(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticPressure', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAerodynamicForce = function flightGetAerodynamicForce(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AerodynamicForce', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLift = function flightGetLift(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Lift', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDrag = function flightGetDrag(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Drag', flight),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of sound, in the atmosphere around the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSpeedOfSound = function flightGetSpeedOfSound(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SpeedOfSound', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The speed of the vessel, in multiples of the speed of sound.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetMach = function flightGetMach(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_Mach', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetReynoldsNumber = function flightGetReynoldsNumber(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_ReynoldsNumber', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_airspeed">true air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTrueAirSpeed = function flightGetTrueAirSpeed(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TrueAirSpeed', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Equivalent_airspeed">equivalent air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetEquivalentAirSpeed = function flightGetEquivalentAirSpeed(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_EquivalentAirSpeed', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTerminalVelocity = function flightGetTerminalVelocity(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TerminalVelocity', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the pitch angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetAngleOfAttack = function flightGetAngleOfAttack(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_AngleOfAttack', flight),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the yaw angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetSideslipAngle = function flightGetSideslipAngle(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_SideslipAngle', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetTotalAirTemperature = function flightGetTotalAirTemperature(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_TotalAirTemperature', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStaticAirTemperature = function flightGetStaticAirTemperature(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StaticAirTemperature', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetStallFraction = function flightGetStallFraction(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_StallFraction', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetDragCoefficient = function flightGetDragCoefficient(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_DragCoefficient', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetLiftCoefficient = function flightGetLiftCoefficient(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_LiftCoefficient', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetBallisticCoefficient = function flightGetBallisticCoefficient(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_BallisticCoefficient', flight),
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
 * @param {SpaceCenter.Flight} flight
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.flightGetThrustSpecificFuelConsumption = function flightGetThrustSpecificFuelConsumption(flight) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Flight_get_ThrustSpecificFuelConsumption', flight),
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
 * @param {SpaceCenter.Node} node
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeBurnVector = function nodeBurnVector(node, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_BurnVector', node, referenceFrame),
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
 * @param {SpaceCenter.Node} node
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeRemainingBurnVector = function nodeRemainingBurnVector(node, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_RemainingBurnVector', node, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the maneuver node.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {void}
 * @returns {void}
*/
module.exports.nodeRemove = function nodeRemove(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Remove', node),
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
 * @param {SpaceCenter.Node} node
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodePosition = function nodePosition(node, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Position', node, referenceFrame),
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
 * @param {SpaceCenter.Node} node
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeDirection = function nodeDirection(node, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_Direction', node, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetPrograde = function nodeGetPrograde(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Prograde', node),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetPrograde = function nodeSetPrograde(node, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Prograde', node, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetNormal = function nodeGetNormal(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Normal', node),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetNormal = function nodeSetNormal(node, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Normal', node, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetRadial = function nodeGetRadial(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Radial', node),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetRadial = function nodeSetRadial(node, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_Radial', node, value),
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
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetDeltaV = function nodeGetDeltaV(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_DeltaV', node),
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
 * @param {SpaceCenter.Node} node
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetDeltaV = function nodeSetDeltaV(node, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_DeltaV', node, value),
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
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetRemainingDeltaV = function nodeGetRemainingDeltaV(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_RemainingDeltaV', node),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetUt = function nodeGetUt(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_UT', node),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.nodeSetUt = function nodeSetUt(node, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_set_UT', node, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the maneuver node will be encountered, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetTimeTo = function nodeGetTimeTo(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_TimeTo', node),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The orbit that results from executing the maneuver node.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {SpaceCenter.Orbit}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetOrbit = function nodeGetOrbit(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_Orbit', node),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Gets the reference frame that is fixed relative to the maneuver node's burn.
 * <list type="bullet"><item><description>The origin is at the position of the maneuver node.</description></item><item><description>The y-axis points in the direction of the burn.</description></item><item><description>The x-axis and z-axis point in arbitrary but fixed directions.</description></item></list></summary>
 * </doc>
 * @param {SpaceCenter.Node} node
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetReferenceFrame = function nodeGetReferenceFrame(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_ReferenceFrame', node),
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
 * @param {SpaceCenter.Node} node
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.nodeGetOrbitalReferenceFrame = function nodeGetOrbitalReferenceFrame(node) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Node_get_OrbitalReferenceFrame', node),
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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitStaticReferencePlaneNormal = function orbitStaticReferencePlaneNormal(referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_static_ReferencePlaneNormal', referenceFrame),
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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitStaticReferencePlaneDirection = function orbitStaticReferencePlaneDirection(referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_static_ReferencePlaneDirection', referenceFrame),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} trueAnomaly
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitRadiusAtTrueAnomaly = function orbitRadiusAtTrueAnomaly(orbit, trueAnomaly) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_RadiusAtTrueAnomaly', orbit, trueAnomaly),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} radius
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitTrueAnomalyAtRadius = function orbitTrueAnomalyAtRadius(orbit, radius) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_TrueAnomalyAtRadius', orbit, radius),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} ut
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitTrueAnomalyAtUt = function orbitTrueAnomalyAtUt(orbit, ut) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_TrueAnomalyAtUT', orbit, ut),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} trueAnomaly
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitUtAtTrueAnomaly = function orbitUtAtTrueAnomaly(orbit, trueAnomaly) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_UTAtTrueAnomaly', orbit, trueAnomaly),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} ut
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitEccentricAnomalyAtUt = function orbitEccentricAnomalyAtUt(orbit, ut) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_EccentricAnomalyAtUT', orbit, ut),
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
 * @param {SpaceCenter.Orbit} orbit
 * @param {number} time
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitOrbitalSpeedAt = function orbitOrbitalSpeedAt(orbit, time) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_OrbitalSpeedAt', orbit, time),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body (e.g. planet or moon) around which the object is orbiting.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetBody = function orbitGetBody(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Body', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetApoapsis = function orbitGetApoapsis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Apoapsis', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriapsis = function orbitGetPeriapsis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Periapsis', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetApoapsisAltitude = function orbitGetApoapsisAltitude(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_ApoapsisAltitude', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriapsisAltitude = function orbitGetPeriapsisAltitude(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_PeriapsisAltitude', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The semi-major axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSemiMajorAxis = function orbitGetSemiMajorAxis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_SemiMajorAxis', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The semi-minor axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSemiMinorAxis = function orbitGetSemiMinorAxis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_SemiMinorAxis', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetRadius = function orbitGetRadius(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Radius', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetSpeed = function orbitGetSpeed(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Speed', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The orbital period, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetPeriod = function orbitGetPeriod(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Period', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the object reaches apoapsis, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToApoapsis = function orbitGetTimeToApoapsis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToApoapsis', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time until the object reaches periapsis, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToPeriapsis = function orbitGetTimeToPeriapsis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToPeriapsis', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Orbital_eccentricity">eccentricity</a> of the orbit.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEccentricity = function orbitGetEccentricity(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Eccentricity', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetInclination = function orbitGetInclination(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Inclination', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetLongitudeOfAscendingNode = function orbitGetLongitudeOfAscendingNode(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_LongitudeOfAscendingNode', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Argument_of_periapsis">argument of periapsis</a>, in radians.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetArgumentOfPeriapsis = function orbitGetArgumentOfPeriapsis(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_ArgumentOfPeriapsis', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly at epoch</a>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetMeanAnomalyAtEpoch = function orbitGetMeanAnomalyAtEpoch(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_MeanAnomalyAtEpoch', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEpoch = function orbitGetEpoch(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_Epoch', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly</a>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetMeanAnomaly = function orbitGetMeanAnomaly(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_MeanAnomaly', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Eccentric_anomaly">eccentric anomaly</a>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetEccentricAnomaly = function orbitGetEccentricAnomaly(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_EccentricAnomaly', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_anomaly">true anomaly</a>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTrueAnomaly = function orbitGetTrueAnomaly(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TrueAnomaly', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {SpaceCenter.Orbit}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetNextOrbit = function orbitGetNextOrbit(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_NextOrbit', orbit),
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
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetTimeToSoiChange = function orbitGetTimeToSoiChange(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_TimeToSOIChange', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The current orbital speed in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Orbit} orbit
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.orbitGetOrbitalSpeed = function orbitGetOrbitalSpeed(orbit) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Orbit_get_OrbitalSpeed', orbit),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this cargo bay.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CargoBay} cargoBay
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetPart = function cargoBayGetPart(cargoBay) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_Part', cargoBay),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the cargo bay.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CargoBay} cargoBay
 * @result {SpaceCenter.CargoBayState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetState = function cargoBayGetState(cargoBay) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_State', cargoBay),
        decode: decoders.enum({0 : 'Open', 1 : 'Closed', 2 : 'Opening', 3 : 'Closing'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CargoBay} cargoBay
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.cargoBayGetOpen = function cargoBayGetOpen(cargoBay) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_get_Open', cargoBay),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {SpaceCenter.CargoBay} cargoBay
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.cargoBaySetOpen = function cargoBaySetOpen(cargoBay, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'CargoBay_set_Open', cargoBay, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this control surface.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetPart = function controlSurfaceGetPart(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Part', controlSurface),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetPitchEnabled = function controlSurfaceGetPitchEnabled(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_PitchEnabled', controlSurface),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetPitchEnabled = function controlSurfaceSetPitchEnabled(controlSurface, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_PitchEnabled', controlSurface, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetYawEnabled = function controlSurfaceGetYawEnabled(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_YawEnabled', controlSurface),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetYawEnabled = function controlSurfaceSetYawEnabled(controlSurface, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_YawEnabled', controlSurface, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetRollEnabled = function controlSurfaceGetRollEnabled(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_RollEnabled', controlSurface),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetRollEnabled = function controlSurfaceSetRollEnabled(controlSurface, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_RollEnabled', controlSurface, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetInverted = function controlSurfaceGetInverted(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Inverted', controlSurface),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetInverted = function controlSurfaceSetInverted(controlSurface, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_Inverted', controlSurface, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetDeployed = function controlSurfaceGetDeployed(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_Deployed', controlSurface),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.controlSurfaceSetDeployed = function controlSurfaceSetDeployed(controlSurface, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_set_Deployed', controlSurface, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Surface area of the control surface in <math>m^2</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetSurfaceArea = function controlSurfaceGetSurfaceArea(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_SurfaceArea', controlSurface),
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
 * @param {SpaceCenter.ControlSurface} controlSurface
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.controlSurfaceGetAvailableTorque = function controlSurfaceGetAvailableTorque(controlSurface) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ControlSurface_get_AvailableTorque', controlSurface),
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
 * @param {SpaceCenter.Decoupler} decoupler
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerDecouple = function decouplerDecouple(decoupler) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_Decouple', decoupler),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this decoupler.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Decoupler} decoupler
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetPart = function decouplerGetPart(decoupler) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Part', decoupler),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the decoupler has fired.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Decoupler} decoupler
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetDecoupled = function decouplerGetDecoupled(decoupler) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Decoupled', decoupler),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the decoupler is enabled in the staging sequence.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Decoupler} decoupler
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetStaged = function decouplerGetStaged(decoupler) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Staged', decoupler),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The impulse that the decoupler imparts when it is fired, in Newton seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Decoupler} decoupler
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.decouplerGetImpulse = function decouplerGetImpulse(decoupler) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Decoupler_get_Impulse', decoupler),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortUndock = function dockingPortUndock(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Undock', dockingPort),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the docking port in the given reference frame.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortPosition = function dockingPortPosition(dockingPort, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Position', dockingPort, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The direction that docking port points in, in the given reference frame.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortDirection = function dockingPortDirection(dockingPort, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Direction', dockingPort, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The rotation of the docking port, in the given reference frame.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortRotation = function dockingPortRotation(dockingPort, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_Rotation', dockingPort, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this docking port.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetPart = function dockingPortGetPart(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_Part', dockingPort),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the docking port.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {SpaceCenter.DockingPortState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetState = function dockingPortGetState(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_State', dockingPort),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetDockedPart = function dockingPortGetDockedPart(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_DockedPart', dockingPort),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetReengageDistance = function dockingPortGetReengageDistance(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_ReengageDistance', dockingPort),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the docking port has a shield.
 * </summary>
 * </doc>
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetHasShield = function dockingPortGetHasShield(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_HasShield', dockingPort),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetShielded = function dockingPortGetShielded(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_Shielded', dockingPort),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.dockingPortSetShielded = function dockingPortSetShielded(dockingPort, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_set_Shielded', dockingPort, value),
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
 * @param {SpaceCenter.DockingPort} dockingPort
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.dockingPortGetReferenceFrame = function dockingPortGetReferenceFrame(dockingPort) {
    return {
        call: buildProcedureCall('SpaceCenter', 'DockingPort_get_ReferenceFrame', dockingPort),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Toggle the current engine mode.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {void}
 * @returns {void}
*/
module.exports.engineToggleMode = function engineToggleMode(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_ToggleMode', engine),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this engine.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPart = function engineGetPart(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Part', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetActive = function engineGetActive(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Active', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetActive = function engineSetActive(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_Active', engine, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of thrust being produced by the engine, in Newtons.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrust = function engineGetThrust(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Thrust', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAvailableThrust = function engineGetAvailableThrust(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AvailableThrust', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMaxThrust = function engineGetMaxThrust(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_MaxThrust', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMaxVacuumThrust = function engineGetMaxVacuumThrust(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_MaxVacuumThrust', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrustLimit = function engineGetThrustLimit(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_ThrustLimit', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetThrustLimit = function engineSetThrustLimit(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_ThrustLimit', engine, value),
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
 * @param {SpaceCenter.Engine} engine
 * @result {SpaceCenter.Thruster[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrusters = function engineGetThrusters(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Thrusters', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetSpecificImpulse = function engineGetSpecificImpulse(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_SpecificImpulse', engine),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the engine, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetVacuumSpecificImpulse = function engineGetVacuumSpecificImpulse(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_VacuumSpecificImpulse', engine),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The specific impulse of the engine at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetKerbinSeaLevelSpecificImpulse = function engineGetKerbinSeaLevelSpecificImpulse(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_KerbinSeaLevelSpecificImpulse', engine),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The names of the propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellantNames = function engineGetPropellantNames(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_PropellantNames', engine),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {SpaceCenter.Propellant[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellants = function engineGetPropellants(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Propellants', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {key : number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetPropellantRatios = function engineGetPropellantRatios(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_PropellantRatios', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetHasFuel = function engineGetHasFuel(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_HasFuel', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrottle = function engineGetThrottle(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Throttle', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetThrottleLocked = function engineGetThrottleLocked(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_ThrottleLocked', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetCanRestart = function engineGetCanRestart(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_CanRestart', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetCanShutdown = function engineGetCanShutdown(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_CanShutdown', engine),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine has multiple modes of operation.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetHasModes = function engineGetHasModes(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_HasModes', engine),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetMode = function engineGetMode(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Mode', engine),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetMode = function engineSetMode(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_Mode', engine, value),
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
 * @param {SpaceCenter.Engine} engine
 * @result {key : SpaceCenter.Engine}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetModes = function engineGetModes(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Modes', engine),
        decode: proto.krpc.schema.Dictionary
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAutoModeSwitch = function engineGetAutoModeSwitch(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AutoModeSwitch', engine),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetAutoModeSwitch = function engineSetAutoModeSwitch(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_AutoModeSwitch', engine, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the engine is gimballed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimballed = function engineGetGimballed(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_Gimballed', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalRange = function engineGetGimbalRange(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalRange', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalLocked = function engineGetGimbalLocked(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalLocked', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetGimbalLocked = function engineSetGimbalLocked(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_GimbalLocked', engine, value),
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
 * @param {SpaceCenter.Engine} engine
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetGimbalLimit = function engineGetGimbalLimit(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_GimbalLimit', engine),
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
 * @param {SpaceCenter.Engine} engine
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.engineSetGimbalLimit = function engineSetGimbalLimit(engine, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_set_GimbalLimit', engine, value),
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
 * @param {SpaceCenter.Engine} engine
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.engineGetAvailableTorque = function engineGetAvailableTorque(engine) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Engine_get_AvailableTorque', engine),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Run the experiment.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {void}
 * @returns {void}
*/
module.exports.experimentRun = function experimentRun(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Run', experiment),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Transmit all experimental data contained by this part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {void}
 * @returns {void}
*/
module.exports.experimentTransmit = function experimentTransmit(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Transmit', experiment),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Dump the experimental data contained by the experiment.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {void}
 * @returns {void}
*/
module.exports.experimentDump = function experimentDump(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Dump', experiment),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Reset the experiment.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {void}
 * @returns {void}
*/
module.exports.experimentReset = function experimentReset(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_Reset', experiment),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this experiment.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetPart = function experimentGetPart(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Part', experiment),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment is inoperable.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetInoperable = function experimentGetInoperable(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Inoperable', experiment),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment has been deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetDeployed = function experimentGetDeployed(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Deployed', experiment),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment can be re-run.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetRerunnable = function experimentGetRerunnable(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Rerunnable', experiment),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the experiment contains data.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetHasData = function experimentGetHasData(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_HasData', experiment),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The data contained in this experiment.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {SpaceCenter.ScienceData[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetData = function experimentGetData(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Data', experiment),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Determines if the experiment is available given the current conditions.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetAvailable = function experimentGetAvailable(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Available', experiment),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the biome the experiment is currently in.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Experiment} experiment
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetBiome = function experimentGetBiome(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_Biome', experiment),
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
 * @param {SpaceCenter.Experiment} experiment
 * @result {SpaceCenter.ScienceSubject}
 * @returns {{call :Object, decode: function}}
*/
module.exports.experimentGetScienceSubject = function experimentGetScienceSubject(experiment) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Experiment_get_ScienceSubject', experiment),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Jettison the fairing. Has no effect if it has already been jettisoned.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Fairing} fairing
 * @result {void}
 * @returns {void}
*/
module.exports.fairingJettison = function fairingJettison(fairing) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_Jettison', fairing),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this fairing.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Fairing} fairing
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.fairingGetPart = function fairingGetPart(fairing) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_get_Part', fairing),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the fairing has been jettisoned.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Fairing} fairing
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.fairingGetJettisoned = function fairingGetJettisoned(fairing) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Fairing_get_Jettisoned', fairing),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the force.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @result {void}
 * @returns {void}
*/
module.exports.forceRemove = function forceRemove(force) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_Remove', force),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part that this force is applied to.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetPart = function forceGetPart(force) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_Part', force),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetForceVector = function forceGetForceVector(force) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_ForceVector', force),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetForceVector = function forceSetForceVector(force, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_ForceVector', force, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetPosition = function forceGetPosition(force) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_Position', force),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetPosition = function forceSetPosition(force, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_Position', force, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.forceGetReferenceFrame = function forceGetReferenceFrame(force) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_get_ReferenceFrame', force),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Force} force
 * @param {SpaceCenter.ReferenceFrame} value
 * @result {void}
 * @returns {void}
*/
module.exports.forceSetReferenceFrame = function forceSetReferenceFrame(force, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Force_set_ReferenceFrame', force, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this intake.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetPart = function intakeGetPart(intake) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Part', intake),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetOpen = function intakeGetOpen(intake) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Open', intake),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.intakeSetOpen = function intakeSetOpen(intake, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_set_Open', intake, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Speed of the flow into the intake, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetSpeed = function intakeGetSpeed(intake) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Speed', intake),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The rate of flow into the intake, in units of resource per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetFlow = function intakeGetFlow(intake) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Flow', intake),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The area of the intake's opening, in square meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Intake} intake
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.intakeGetArea = function intakeGetArea(intake) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Intake_get_Area', intake),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this landing gear.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LandingGear} landingGear
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetPart = function landingGearGetPart(landingGear) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Part', landingGear),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the landing gear is deployable.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LandingGear} landingGear
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetDeployable = function landingGearGetDeployable(landingGear) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Deployable', landingGear),
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
 * @param {SpaceCenter.LandingGear} landingGear
 * @result {SpaceCenter.LandingGearState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetState = function landingGearGetState(landingGear) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_State', landingGear),
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
 * @param {SpaceCenter.LandingGear} landingGear
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingGearGetDeployed = function landingGearGetDeployed(landingGear) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_get_Deployed', landingGear),
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
 * @param {SpaceCenter.LandingGear} landingGear
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.landingGearSetDeployed = function landingGearSetDeployed(landingGear, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingGear_set_Deployed', landingGear, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this landing leg.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LandingLeg} landingLeg
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetPart = function landingLegGetPart(landingLeg) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_Part', landingLeg),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the landing leg.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LandingLeg} landingLeg
 * @result {SpaceCenter.LandingLegState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetState = function landingLegGetState(landingLeg) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_State', landingLeg),
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
 * @param {SpaceCenter.LandingLeg} landingLeg
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.landingLegGetDeployed = function landingLegGetDeployed(landingLeg) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_get_Deployed', landingLeg),
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
 * @param {SpaceCenter.LandingLeg} landingLeg
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.landingLegSetDeployed = function landingLegSetDeployed(landingLeg, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LandingLeg_set_Deployed', landingLeg, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Releases the docking clamp. Has no effect if the clamp has already been released.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LaunchClamp} launchClamp
 * @result {void}
 * @returns {void}
*/
module.exports.launchClampRelease = function launchClampRelease(launchClamp) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchClamp_Release', launchClamp),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this launch clamp.
 * </summary>
 * </doc>
 * @param {SpaceCenter.LaunchClamp} launchClamp
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.launchClampGetPart = function launchClampGetPart(launchClamp) {
    return {
        call: buildProcedureCall('SpaceCenter', 'LaunchClamp_get_Part', launchClamp),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this light.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetPart = function lightGetPart(light) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Part', light),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetActive = function lightGetActive(light) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Active', light),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.lightSetActive = function lightSetActive(light, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_set_Active', light, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetColor = function lightGetColor(light) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_Color', light),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.lightSetColor = function lightSetColor(light, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_set_Color', light, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current power usage, in units of charge per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Light} light
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lightGetPowerUsage = function lightGetPowerUsage(light) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Light_get_PowerUsage', light),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasField = function moduleHasField(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasField', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetField = function moduleGetField(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_GetField', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldInt = function moduleSetFieldInt(module, name, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldInt', module, name, value),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldFloat = function moduleSetFieldFloat(module, name, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldFloat', module, name, value),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetFieldString = function moduleSetFieldString(module, name, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetFieldString', module, name, value),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {void}
 * @returns {void}
*/
module.exports.moduleResetField = function moduleResetField(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_ResetField', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasEvent = function moduleHasEvent(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasEvent', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {void}
 * @returns {void}
*/
module.exports.moduleTriggerEvent = function moduleTriggerEvent(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_TriggerEvent', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleHasAction = function moduleHasAction(module, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_HasAction', module, name),
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
 * @param {SpaceCenter.Module} module
 * @param {string} name
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.moduleSetAction = function moduleSetAction(module, name, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_SetAction', module, name, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the PartModule. For example, "ModuleEngines".
 * </summary>
 * </doc>
 * @param {SpaceCenter.Module} module
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetName = function moduleGetName(module) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Name', module),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part that contains this module.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Module} module
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetPart = function moduleGetPart(module) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Part', module),
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
 * @param {SpaceCenter.Module} module
 * @result {key : string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetFields = function moduleGetFields(module) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Fields', module),
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
 * @param {SpaceCenter.Module} module
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetEvents = function moduleGetEvents(module) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Events', module),
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
 * @param {SpaceCenter.Module} module
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.moduleGetActions = function moduleGetActions(module) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Module_get_Actions', module),
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
 * @param {SpaceCenter.Parachute} parachute
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteDeploy = function parachuteDeploy(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_Deploy', parachute),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this parachute.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetPart = function parachuteGetPart(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_Part', parachute),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the parachute has been deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployed = function parachuteGetDeployed(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_Deployed', parachute),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the parachute.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @result {SpaceCenter.ParachuteState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetState = function parachuteGetState(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_State', parachute),
        decode: decoders.enum({0 : 'Active', 1 : 'Cut', 2 : 'Deployed', 3 : 'SemiDeployed', 4 : 'Stowed'})
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployAltitude = function parachuteGetDeployAltitude(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_DeployAltitude', parachute),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteSetDeployAltitude = function parachuteSetDeployAltitude(parachute, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_set_DeployAltitude', parachute, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.parachuteGetDeployMinPressure = function parachuteGetDeployMinPressure(parachute) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_get_DeployMinPressure', parachute),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parachute} parachute
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.parachuteSetDeployMinPressure = function parachuteSetDeployMinPressure(parachute, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parachute_set_DeployMinPressure', parachute, value),
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
 * @param {SpaceCenter.Part} part
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partPosition = function partPosition(part, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Position', part, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partCenterOfMass = function partCenterOfMass(part, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_CenterOfMass', part, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partDirection = function partDirection(part, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Direction', part, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partVelocity = function partVelocity(part, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Velocity', part, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partRotation = function partRotation(part, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_Rotation', part, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {{number, number, number}} force
 * @param {{number, number, number}} position
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {SpaceCenter.Force}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partAddForce = function partAddForce(part, force, position, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_AddForce', part, force, position, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @param {{number, number, number}} force
 * @param {{number, number, number}} position
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {void}
 * @returns {void}
*/
module.exports.partInstantaneousForce = function partInstantaneousForce(part, force, position, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_InstantaneousForce', part, force, position, referenceFrame),
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
 * @param {SpaceCenter.Part} part
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetName = function partGetName(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Name', part),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Title of the part, as shown when the part is right clicked in-game. For example "Mk1-2 Command Pod".
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTitle = function partGetTitle(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Title', part),
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
 * @param {SpaceCenter.Part} part
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTag = function partGetTag(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Tag', part),
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
 * @param {SpaceCenter.Part} part
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.partSetTag = function partSetTag(part, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_set_Tag', part, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The cost of the part, in units of funds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCost = function partGetCost(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Cost', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel that contains this part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetVessel = function partGetVessel(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Vessel', part),
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
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetParent = function partGetParent(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Parent', part),
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
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetChildren = function partGetChildren(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Children', part),
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
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetAxiallyAttached = function partGetAxiallyAttached(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_AxiallyAttached', part),
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
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRadiallyAttached = function partGetRadiallyAttached(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_RadiallyAttached', part),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be activated. Returns -1 if the part is not activated by staging.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetStage = function partGetStage(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Stage', part),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be decoupled. Returns -1 if the part is never decoupled from the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDecoupleStage = function partGetDecoupleStage(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DecoupleStage', part),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is <a href="http://wiki.kerbalspaceprogram.com/wiki/Massless_part">massless</a>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMassless = function partGetMassless(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Massless', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMass = function partGetMass(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Mass', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The mass of the part, not including any resources it contains, in kilograms. Returns zero if the part is massless.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDryMass = function partGetDryMass(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DryMass', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the part is shielded from the exterior of the vessel, for example by a fairing.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetShielded = function partGetShielded(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Shielded', part),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The dynamic pressure acting on the part, in Pascals.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDynamicPressure = function partGetDynamicPressure(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DynamicPressure', part),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The impact tolerance of the part, in meters per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetImpactTolerance = function partGetImpactTolerance(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ImpactTolerance', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Temperature of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetTemperature = function partGetTemperature(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Temperature', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Temperature of the skin of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSkinTemperature = function partGetSkinTemperature(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_SkinTemperature', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMaxTemperature = function partGetMaxTemperature(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MaxTemperature', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the skin of the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMaxSkinTemperature = function partGetMaxSkinTemperature(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MaxSkinTemperature', part),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the internal temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalMass = function partGetThermalMass(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalMass', part),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the skin temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalSkinMass = function partGetThermalSkinMass(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalSkinMass', part),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the temperature of the resources contained in the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalResourceMass = function partGetThermalResourceMass(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalResourceMass', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalInternalFlux = function partGetThermalInternalFlux(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalInternalFlux', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalConductionFlux = function partGetThermalConductionFlux(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalConductionFlux', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalConvectionFlux = function partGetThermalConvectionFlux(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalConvectionFlux', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalRadiationFlux = function partGetThermalRadiationFlux(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalRadiationFlux', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetThermalSkinToInternalFlux = function partGetThermalSkinToInternalFlux(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ThermalSkinToInternalFlux', part),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Resources" /> object for the part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Resources}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResources = function partGetResources(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Resources', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether this part is crossfeed capable.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCrossfeed = function partGetCrossfeed(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Crossfeed', part),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether this part is a fuel line.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetIsFuelLine = function partGetIsFuelLine(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_IsFuelLine', part),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is into this part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFuelLinesFrom = function partGetFuelLinesFrom(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_FuelLinesFrom', part),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is out of this part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFuelLinesTo = function partGetFuelLinesTo(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_FuelLinesTo', part),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The modules for this part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Module[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetModules = function partGetModules(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Modules', part),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.CargoBay" /> if the part is a cargo bay, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.CargoBay}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCargoBay = function partGetCargoBay(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_CargoBay', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ControlSurface" /> if the part is an aerodynamic control surface, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ControlSurface}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetControlSurface = function partGetControlSurface(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ControlSurface', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Decoupler" /> if the part is a decoupler, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Decoupler}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDecoupler = function partGetDecoupler(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Decoupler', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.DockingPort" /> if the part is a docking port, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.DockingPort}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetDockingPort = function partGetDockingPort(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_DockingPort', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Engine" /> if the part is an engine, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Engine}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetEngine = function partGetEngine(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Engine', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Experiment" /> if the part is a science experiment, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Experiment}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetExperiment = function partGetExperiment(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Experiment', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Fairing" /> if the part is a fairing, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Fairing}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetFairing = function partGetFairing(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Fairing', part),
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
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Intake}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetIntake = function partGetIntake(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Intake', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingGear" /> if the part is a landing gear, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.LandingGear}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLandingGear = function partGetLandingGear(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LandingGear', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingLeg" /> if the part is a landing leg, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.LandingLeg}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLandingLeg = function partGetLandingLeg(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LandingLeg', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LaunchClamp" /> if the part is a launch clamp, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.LaunchClamp}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLaunchClamp = function partGetLaunchClamp(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_LaunchClamp', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Light" /> if the part is a light, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Light}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetLight = function partGetLight(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Light', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parachute" /> if the part is a parachute, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Parachute}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetParachute = function partGetParachute(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Parachute', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Radiator" /> if the part is a radiator, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Radiator}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRadiator = function partGetRadiator(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Radiator', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.RCS" /> if the part is an RCS block/thruster, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.RCS}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetRcs = function partGetRcs(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_RCS', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ReactionWheel" /> if the part is a reaction wheel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ReactionWheel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetReactionWheel = function partGetReactionWheel(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ReactionWheel', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceConverter" /> if the part is a resource converter, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ResourceConverter}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResourceConverter = function partGetResourceConverter(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ResourceConverter', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceHarvester" /> if the part is a resource harvester, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ResourceHarvester}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetResourceHarvester = function partGetResourceHarvester(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ResourceHarvester', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Sensor" /> if the part is a sensor, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.Sensor}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSensor = function partGetSensor(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_Sensor', part),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.SolarPanel" /> if the part is a solar panel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.SolarPanel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetSolarPanel = function partGetSolarPanel(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_SolarPanel', part),
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
 * @param {SpaceCenter.Part} part
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetMomentOfInertia = function partGetMomentOfInertia(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_MomentOfInertia', part),
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
 * @param {SpaceCenter.Part} part
 * @result {number[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetInertiaTensor = function partGetInertiaTensor(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_InertiaTensor', part),
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
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetReferenceFrame = function partGetReferenceFrame(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_ReferenceFrame', part),
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
 * @param {SpaceCenter.Part} part
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partGetCenterOfMassReferenceFrame = function partGetCenterOfMassReferenceFrame(part) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Part_get_CenterOfMassReferenceFrame', part),
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
 * @param {SpaceCenter.Parts} parts
 * @param {string} name
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithName = function partsWithName(parts, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithName', parts, name),
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
 * @param {SpaceCenter.Parts} parts
 * @param {string} title
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithTitle = function partsWithTitle(parts, title) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithTitle', parts, title),
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
 * @param {SpaceCenter.Parts} parts
 * @param {string} tag
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithTag = function partsWithTag(parts, tag) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithTag', parts, tag),
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
 * @param {SpaceCenter.Parts} parts
 * @param {string} moduleName
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsWithModule = function partsWithModule(parts, moduleName) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_WithModule', parts, moduleName),
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
 * @param {SpaceCenter.Parts} parts
 * @param {number} stage
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsInStage = function partsInStage(parts, stage) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_InStage', parts, stage),
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
 * @param {SpaceCenter.Parts} parts
 * @param {number} stage
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsInDecoupleStage = function partsInDecoupleStage(parts, stage) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_InDecoupleStage', parts, stage),
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
 * @param {SpaceCenter.Parts} parts
 * @param {string} moduleName
 * @result {SpaceCenter.Module[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsModulesWithName = function partsModulesWithName(parts, moduleName) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_ModulesWithName', parts, moduleName),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all of the vessels parts.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetAll = function partsGetAll(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_All', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The vessels root part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRoot = function partsGetRoot(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Root', parts),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetControlling = function partsGetControlling(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Controlling', parts),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @param {SpaceCenter.Part} value
 * @result {void}
 * @returns {void}
*/
module.exports.partsSetControlling = function partsSetControlling(parts, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_set_Controlling', parts, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all control surfaces in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.ControlSurface[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetControlSurfaces = function partsGetControlSurfaces(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ControlSurfaces', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all cargo bays in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.CargoBay[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetCargoBays = function partsGetCargoBays(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_CargoBays', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all decouplers in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Decoupler[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetDecouplers = function partsGetDecouplers(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Decouplers', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all docking ports in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.DockingPort[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetDockingPorts = function partsGetDockingPorts(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_DockingPorts', parts),
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
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Engine[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetEngines = function partsGetEngines(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Engines', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all science experiments in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Experiment[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetExperiments = function partsGetExperiments(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Experiments', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all fairings in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Fairing[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetFairings = function partsGetFairings(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Fairings', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all intakes in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Intake[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetIntakes = function partsGetIntakes(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Intakes', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all landing gear attached to the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.LandingGear[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLandingGear = function partsGetLandingGear(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LandingGear', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all landing legs attached to the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.LandingLeg[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLandingLegs = function partsGetLandingLegs(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LandingLegs', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all launch clamps attached to the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.LaunchClamp[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLaunchClamps = function partsGetLaunchClamps(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_LaunchClamps', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all lights in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Light[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetLights = function partsGetLights(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Lights', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all parachutes in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Parachute[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetParachutes = function partsGetParachutes(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Parachutes', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all radiators in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Radiator[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRadiators = function partsGetRadiators(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Radiators', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all RCS blocks/thrusters in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.RCS[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetRcs = function partsGetRcs(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_RCS', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all reaction wheels in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.ReactionWheel[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetReactionWheels = function partsGetReactionWheels(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ReactionWheels', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all resource converters in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.ResourceConverter[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetResourceConverters = function partsGetResourceConverters(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ResourceConverters', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all resource harvesters in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.ResourceHarvester[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetResourceHarvesters = function partsGetResourceHarvesters(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_ResourceHarvesters', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all sensors in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.Sensor[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetSensors = function partsGetSensors(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_Sensors', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all solar panels in the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Parts} parts
 * @result {SpaceCenter.SolarPanel[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.partsGetSolarPanels = function partsGetSolarPanels(parts) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Parts_get_SolarPanels', parts),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the propellant.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetName = function propellantGetName(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_Name', propellant),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current amount of propellant.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetCurrentAmount = function propellantGetCurrentAmount(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_CurrentAmount', propellant),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The required amount of propellant.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetCurrentRequirement = function propellantGetCurrentRequirement(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_CurrentRequirement', propellant),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The total amount of the underlying resource currently reachable given resource flow rules.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetTotalResourceAvailable = function propellantGetTotalResourceAvailable(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_TotalResourceAvailable', propellant),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The total vehicle capacity for the underlying propellant resource, restricted by resource flow rules.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetTotalResourceCapacity = function propellantGetTotalResourceCapacity(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_TotalResourceCapacity', propellant),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored when calculating required mass flow given specific impulse.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIgnoreForIsp = function propellantGetIgnoreForIsp(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IgnoreForIsp', propellant),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored for thrust curve calculations.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIgnoreForThrustCurve = function propellantGetIgnoreForThrustCurve(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IgnoreForThrustCurve', propellant),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant has a stack gauge or not.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetDrawStackGauge = function propellantGetDrawStackGauge(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_DrawStackGauge', propellant),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * If this propellant is deprived.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetIsDeprived = function propellantGetIsDeprived(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_IsDeprived', propellant),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The propellant ratio.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetRatio = function propellantGetRatio(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_Ratio', propellant),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The reachable resources connected to this propellant.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Propellant} propellant
 * @result {SpaceCenter.Resource[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.propellantGetConnectedResources = function propellantGetConnectedResources(propellant) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Propellant_get_ConnectedResources', propellant),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this RCS.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPart = function rcsGetPart(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Part', rcs),
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
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetActive = function rcsGetActive(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Active', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetEnabled = function rcsGetEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Enabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetEnabled = function rcsSetEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_Enabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPitchEnabled = function rcsGetPitchEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_PitchEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetPitchEnabled = function rcsSetPitchEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_PitchEnabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetYawEnabled = function rcsGetYawEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_YawEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetYawEnabled = function rcsSetYawEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_YawEnabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetRollEnabled = function rcsGetRollEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_RollEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetRollEnabled = function rcsSetRollEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_RollEnabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetForwardEnabled = function rcsGetForwardEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_ForwardEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetForwardEnabled = function rcsSetForwardEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_ForwardEnabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetUpEnabled = function rcsGetUpEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_UpEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetUpEnabled = function rcsSetUpEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_UpEnabled', rcs, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetRightEnabled = function rcsGetRightEnabled(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_RightEnabled', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.rcsSetRightEnabled = function rcsSetRightEnabled(rcs, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_set_RightEnabled', rcs, value),
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
 * @param {SpaceCenter.RCS} rcs
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetAvailableTorque = function rcsGetAvailableTorque(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_AvailableTorque', rcs),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active, in Newtons.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetMaxThrust = function rcsGetMaxThrust(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_MaxThrust', rcs),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active in a vacuum, in Newtons.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetMaxVacuumThrust = function rcsGetMaxVacuumThrust(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_MaxVacuumThrust', rcs),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * A list of thrusters, one of each nozzel in the RCS part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {SpaceCenter.Thruster[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetThrusters = function rcsGetThrusters(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Thrusters', rcs),
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
 * @param {SpaceCenter.RCS} rcs
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetSpecificImpulse = function rcsGetSpecificImpulse(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_SpecificImpulse', rcs),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the RCS, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetVacuumSpecificImpulse = function rcsGetVacuumSpecificImpulse(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_VacuumSpecificImpulse', rcs),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The specific impulse of the RCS at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetKerbinSeaLevelSpecificImpulse = function rcsGetKerbinSeaLevelSpecificImpulse(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_KerbinSeaLevelSpecificImpulse', rcs),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The names of resources that the RCS consumes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.RCS} rcs
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPropellants = function rcsGetPropellants(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_Propellants', rcs),
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
 * @param {SpaceCenter.RCS} rcs
 * @result {key : number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetPropellantRatios = function rcsGetPropellantRatios(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_PropellantRatios', rcs),
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
 * @param {SpaceCenter.RCS} rcs
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rcsGetHasFuel = function rcsGetHasFuel(rcs) {
    return {
        call: buildProcedureCall('SpaceCenter', 'RCS_get_HasFuel', rcs),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this radiator.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Radiator} radiator
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetPart = function radiatorGetPart(radiator) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Part', radiator),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the radiator is deployable.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Radiator} radiator
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetDeployable = function radiatorGetDeployable(radiator) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Deployable', radiator),
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
 * @param {SpaceCenter.Radiator} radiator
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetDeployed = function radiatorGetDeployed(radiator) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_Deployed', radiator),
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
 * @param {SpaceCenter.Radiator} radiator
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.radiatorSetDeployed = function radiatorSetDeployed(radiator, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_set_Deployed', radiator, value),
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
 * @param {SpaceCenter.Radiator} radiator
 * @result {SpaceCenter.RadiatorState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.radiatorGetState = function radiatorGetState(radiator) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Radiator_get_State', radiator),
        decode: decoders.enum({0 : 'Extended', 1 : 'Retracted', 2 : 'Extending', 3 : 'Retracting', 4 : 'Broken'})
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this reaction wheel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetPart = function reactionWheelGetPart(reactionWheel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Part', reactionWheel),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetActive = function reactionWheelGetActive(reactionWheel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Active', reactionWheel),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.reactionWheelSetActive = function reactionWheelSetActive(reactionWheel, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_set_Active', reactionWheel, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is broken.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetBroken = function reactionWheelGetBroken(reactionWheel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_Broken', reactionWheel),
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
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetAvailableTorque = function reactionWheelGetAvailableTorque(reactionWheel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_AvailableTorque', reactionWheel),
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
 * @param {SpaceCenter.ReactionWheel} reactionWheel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.reactionWheelGetMaxTorque = function reactionWheelGetMaxTorque(reactionWheel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ReactionWheel_get_MaxTorque', reactionWheel),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterActive = function resourceConverterActive(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Active', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterName = function resourceConverterName(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Name', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {void}
 * @returns {void}
*/
module.exports.resourceConverterStart = function resourceConverterStart(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Start', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {void}
 * @returns {void}
*/
module.exports.resourceConverterStop = function resourceConverterStop(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Stop', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {SpaceCenter.ResourceConverterState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterState = function resourceConverterState(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_State', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterStatusInfo = function resourceConverterStatusInfo(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_StatusInfo', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterInputs = function resourceConverterInputs(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Inputs', resourceConverter, index),
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
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @param {number} index
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterOutputs = function resourceConverterOutputs(resourceConverter, index) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_Outputs', resourceConverter, index),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this converter.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterGetPart = function resourceConverterGetPart(resourceConverter) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_get_Part', resourceConverter),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The number of converters in the part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceConverter} resourceConverter
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceConverterGetCount = function resourceConverterGetCount(resourceConverter) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceConverter_get_Count', resourceConverter),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this harvester.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetPart = function resourceHarvesterGetPart(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Part', resourceHarvester),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The state of the harvester.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {SpaceCenter.ResourceHarvesterState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetState = function resourceHarvesterGetState(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_State', resourceHarvester),
        decode: decoders.enum({0 : 'Deploying', 1 : 'Deployed', 2 : 'Retracting', 3 : 'Retracted', 4 : 'Active'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetDeployed = function resourceHarvesterGetDeployed(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Deployed', resourceHarvester),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.resourceHarvesterSetDeployed = function resourceHarvesterSetDeployed(resourceHarvester, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_set_Deployed', resourceHarvester, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetActive = function resourceHarvesterGetActive(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_Active', resourceHarvester),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.resourceHarvesterSetActive = function resourceHarvesterSetActive(resourceHarvester, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_set_Active', resourceHarvester, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rate at which the drill is extracting ore, in units per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetExtractionRate = function resourceHarvesterGetExtractionRate(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_ExtractionRate', resourceHarvester),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The thermal efficiency of the drill, as a percentage of its maximum.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetThermalEfficiency = function resourceHarvesterGetThermalEfficiency(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_ThermalEfficiency', resourceHarvester),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The core temperature of the drill, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetCoreTemperature = function resourceHarvesterGetCoreTemperature(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_CoreTemperature', resourceHarvester),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The core temperature at which the drill will operate with peak efficiency, in Kelvin.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceHarvester} resourceHarvester
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceHarvesterGetOptimumCoreTemperature = function resourceHarvesterGetOptimumCoreTemperature(resourceHarvester) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceHarvester_get_OptimumCoreTemperature', resourceHarvester),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Data amount.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceData} scienceData
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetDataAmount = function scienceDataGetDataAmount(scienceData) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_DataAmount', scienceData),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Science value.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceData} scienceData
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetScienceValue = function scienceDataGetScienceValue(scienceData) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_ScienceValue', scienceData),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Transmit value.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceData} scienceData
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceDataGetTransmitValue = function scienceDataGetTransmitValue(scienceData) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceData_get_TransmitValue', scienceData),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Amount of science already earned from this subject, not updated until after transmission/recovery.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScience = function scienceSubjectGetScience(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_Science', scienceSubject),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Total science allowable for this subject.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScienceCap = function scienceSubjectGetScienceCap(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_ScienceCap', scienceSubject),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 *  Whether the experiment has been completed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetIsComplete = function scienceSubjectGetIsComplete(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_IsComplete', scienceSubject),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Multiply science value by this to determine data amount in mits.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetDataScale = function scienceSubjectGetDataScale(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_DataScale', scienceSubject),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Diminishing value multiplier for decreasing the science value returned from repeated experiments.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetScientificValue = function scienceSubjectGetScientificValue(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_ScientificValue', scienceSubject),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Multiplier for specific Celestial Body/Experiment Situation combination.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetSubjectValue = function scienceSubjectGetSubjectValue(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_SubjectValue', scienceSubject),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Title of science subject, displayed in science archives
 * </summary>
 * </doc>
 * @param {SpaceCenter.ScienceSubject} scienceSubject
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.scienceSubjectGetTitle = function scienceSubjectGetTitle(scienceSubject) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ScienceSubject_get_Title', scienceSubject),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this sensor.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Sensor} sensor
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetPart = function sensorGetPart(sensor) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Part', sensor),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Sensor} sensor
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetActive = function sensorGetActive(sensor) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Active', sensor),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Sensor} sensor
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.sensorSetActive = function sensorSetActive(sensor, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_set_Active', sensor, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current value of the sensor.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Sensor} sensor
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetValue = function sensorGetValue(sensor) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_Value', sensor),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current power usage of the sensor, in units of charge per second.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Sensor} sensor
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.sensorGetPowerUsage = function sensorGetPowerUsage(sensor) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Sensor_get_PowerUsage', sensor),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The part object for this solar panel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetPart = function solarPanelGetPart(solarPanel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_Part', solarPanel),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetDeployed = function solarPanelGetDeployed(solarPanel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_Deployed', solarPanel),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.solarPanelSetDeployed = function solarPanelSetDeployed(solarPanel, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_set_Deployed', solarPanel, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current state of the solar panel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @result {SpaceCenter.SolarPanelState}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetState = function solarPanelGetState(solarPanel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_State', solarPanel),
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
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetEnergyFlow = function solarPanelGetEnergyFlow(solarPanel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_EnergyFlow', solarPanel),
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
 * @param {SpaceCenter.SolarPanel} solarPanel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.solarPanelGetSunExposure = function solarPanelGetSunExposure(solarPanel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'SolarPanel_get_SunExposure', solarPanel),
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
 * @param {SpaceCenter.Thruster} thruster
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterThrustPosition = function thrusterThrustPosition(thruster, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_ThrustPosition', thruster, referenceFrame),
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
 * @param {SpaceCenter.Thruster} thruster
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterThrustDirection = function thrusterThrustDirection(thruster, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_ThrustDirection', thruster, referenceFrame),
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
 * @param {SpaceCenter.Thruster} thruster
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterInitialThrustPosition = function thrusterInitialThrustPosition(thruster, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_InitialThrustPosition', thruster, referenceFrame),
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
 * @param {SpaceCenter.Thruster} thruster
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterInitialThrustDirection = function thrusterInitialThrustDirection(thruster, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_InitialThrustDirection', thruster, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position around which the gimbal pivots.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Thruster} thruster
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGimbalPosition = function thrusterGimbalPosition(thruster, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_GimbalPosition', thruster, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The <see cref="T:SpaceCenter.Part" /> that contains this thruster.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Thruster} thruster
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetPart = function thrusterGetPart(thruster) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_Part', thruster),
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
 * @param {SpaceCenter.Thruster} thruster
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetThrustReferenceFrame = function thrusterGetThrustReferenceFrame(thruster) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_ThrustReferenceFrame', thruster),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the thruster is gimballed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Thruster} thruster
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetGimballed = function thrusterGetGimballed(thruster) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_Gimballed', thruster),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The current gimbal angle in the pitch, roll and yaw axes.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Thruster} thruster
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.thrusterGetGimbalAngle = function thrusterGetGimbalAngle(thruster) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Thruster_get_GimbalAngle', thruster),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the resource.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetName = function resourceGetName(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Name', resource),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The part containing the resource.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetPart = function resourceGetPart(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Part', resource),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The total amount of the resource that can be stored in the part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetMax = function resourceGetMax(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Max', resource),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of the resource that is currently stored in the part.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetAmount = function resourceGetAmount(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Amount', resource),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The density of the resource, in <math>kg/l</math>.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetDensity = function resourceGetDensity(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Density', resource),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The flow mode of the resource.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {SpaceCenter.ResourceFlowMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetFlowMode = function resourceGetFlowMode(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_FlowMode', resource),
        decode: decoders.enum({0 : 'Vessel', 1 : 'Stage', 2 : 'Adjacent', 3 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceGetEnabled = function resourceGetEnabled(resource) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_get_Enabled', resource),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resource} resource
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.resourceSetEnabled = function resourceSetEnabled(resource, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resource_set_Enabled', resource, value),
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
 * @param {SpaceCenter.Part} fromPart
 * @param {SpaceCenter.Part} toPart
 * @param {string} resource
 * @param {number} maxAmount
 * @result {SpaceCenter.ResourceTransfer}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferStaticStart = function resourceTransferStaticStart(fromPart, toPart, resource, maxAmount) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_static_Start', fromPart, toPart, resource, maxAmount),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the transfer has completed.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceTransfer} resourceTransfer
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferGetComplete = function resourceTransferGetComplete(resourceTransfer) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_get_Complete', resourceTransfer),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The amount of the resource that has been transferred.
 * </summary>
 * </doc>
 * @param {SpaceCenter.ResourceTransfer} resourceTransfer
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourceTransferGetAmount = function resourceTransferGetAmount(resourceTransfer) {
    return {
        call: buildProcedureCall('SpaceCenter', 'ResourceTransfer_get_Amount', resourceTransfer),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * All the individual resources with the given name that can be stored.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resources} resources
 * @param {string} name
 * @result {SpaceCenter.Resource[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesWithResource = function resourcesWithResource(resources, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_WithResource', resources, name),
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
 * @param {SpaceCenter.Resources} resources
 * @param {string} name
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesHasResource = function resourcesHasResource(resources, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_HasResource', resources, name),
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
 * @param {SpaceCenter.Resources} resources
 * @param {string} name
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesMax = function resourcesMax(resources, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_Max', resources, name),
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
 * @param {SpaceCenter.Resources} resources
 * @param {string} name
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesAmount = function resourcesAmount(resources, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_Amount', resources, name),
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
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_static_Density', name),
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
 * @result {SpaceCenter.ResourceFlowMode}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesStaticFlowMode = function resourcesStaticFlowMode(name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_static_FlowMode', name),
        decode: decoders.enum({0 : 'Vessel', 1 : 'Stage', 2 : 'Adjacent', 3 : 'None'})
    };
};

/**
 * <doc>
 *   <summary>
 * All the individual resources that can be stored.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resources} resources
 * @result {SpaceCenter.Resource[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetAll = function resourcesGetAll(resources) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_All', resources),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * A list of resource names that can be stored.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Resources} resources
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetNames = function resourcesGetNames(resources) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_Names', resources),
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
 * @param {SpaceCenter.Resources} resources
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.resourcesGetEnabled = function resourcesGetEnabled(resources) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_get_Enabled', resources),
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
 * @param {SpaceCenter.Resources} resources
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.resourcesSetEnabled = function resourcesSetEnabled(resources, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Resources_set_Enabled', resources, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Recover the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {void}
 * @returns {void}
*/
module.exports.vesselRecover = function vesselRecover(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Recover', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {SpaceCenter.Flight}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselFlight = function vesselFlight(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Flight', vessel, referenceFrame),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {number} stage
 * @param {boolean} cumulative
 * @result {SpaceCenter.Resources}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselResourcesInDecoupleStage = function vesselResourcesInDecoupleStage(vessel, stage, cumulative) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_ResourcesInDecoupleStage', vessel, stage, cumulative),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselPosition = function vesselPosition(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Position', vessel, referenceFrame),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselVelocity = function vesselVelocity(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Velocity', vessel, referenceFrame),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselRotation = function vesselRotation(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Rotation', vessel, referenceFrame),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselDirection = function vesselDirection(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_Direction', vessel, referenceFrame),
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselAngularVelocity = function vesselAngularVelocity(vessel, referenceFrame) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_AngularVelocity', vessel, referenceFrame),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetName = function vesselGetName(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Name', vessel),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.vesselSetName = function vesselSetName(vessel, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_set_Name', vessel, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.VesselType}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetType = function vesselGetType(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Type', vessel),
        decode: decoders.enum({0 : 'Ship', 1 : 'Station', 2 : 'Lander', 3 : 'Probe', 4 : 'Rover', 5 : 'Base', 6 : 'Debris'})
    };
};

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @param {SpaceCenter.VesselType} value
 * @result {void}
 * @returns {void}
*/
module.exports.vesselSetType = function vesselSetType(vessel, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_set_Type', vessel, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The situation the vessel is in.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.VesselSituation}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSituation = function vesselGetSituation(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Situation', vessel),
        decode: decoders.enum({0 : 'PreLaunch', 1 : 'Orbiting', 2 : 'SubOrbital', 3 : 'Escaping', 4 : 'Flying', 5 : 'Landed', 6 : 'Splashed', 7 : 'Docked'})
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the vessel is recoverable.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetRecoverable = function vesselGetRecoverable(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Recoverable', vessel),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * The mission elapsed time in seconds.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMet = function vesselGetMet(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MET', vessel),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the biome the vessel is currently in.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetBiome = function vesselGetBiome(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Biome', vessel),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The current orbit of the vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.Orbit}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetOrbit = function vesselGetOrbit(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Orbit', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.Control}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetControl = function vesselGetControl(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Control', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.AutoPilot}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAutoPilot = function vesselGetAutoPilot(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AutoPilot', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.Resources}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetResources = function vesselGetResources(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Resources', vessel),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parts" /> object, that can used to interact with the parts that make up this vessel.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.Parts}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetParts = function vesselGetParts(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Parts', vessel),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, including resources, in kg.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMass = function vesselGetMass(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Mass', vessel),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, excluding resources, in kg.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetDryMass = function vesselGetDryMass(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_DryMass', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetThrust = function vesselGetThrust(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_Thrust', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableThrust = function vesselGetAvailableThrust(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableThrust', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMaxThrust = function vesselGetMaxThrust(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MaxThrust', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMaxVacuumThrust = function vesselGetMaxVacuumThrust(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MaxVacuumThrust', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSpecificImpulse = function vesselGetSpecificImpulse(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SpecificImpulse', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetVacuumSpecificImpulse = function vesselGetVacuumSpecificImpulse(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_VacuumSpecificImpulse', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetKerbinSeaLevelSpecificImpulse = function vesselGetKerbinSeaLevelSpecificImpulse(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_KerbinSeaLevelSpecificImpulse', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetMomentOfInertia = function vesselGetMomentOfInertia(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_MomentOfInertia', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {number[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetInertiaTensor = function vesselGetInertiaTensor(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_InertiaTensor', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableTorque = function vesselGetAvailableTorque(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableTorque', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableReactionWheelTorque = function vesselGetAvailableReactionWheelTorque(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableReactionWheelTorque', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableRcsTorque = function vesselGetAvailableRcsTorque(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableRCSTorque', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableEngineTorque = function vesselGetAvailableEngineTorque(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableEngineTorque', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetAvailableControlSurfaceTorque = function vesselGetAvailableControlSurfaceTorque(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_AvailableControlSurfaceTorque', vessel),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the vessel.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the vessel.</description></item><item><description>The x-axis points out to the right of the vessel.</description></item><item><description>The y-axis points in the forward direction of the vessel.</description></item><item><description>The z-axis points out of the bottom off the vessel.</description></item></list></summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetReferenceFrame = function vesselGetReferenceFrame(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_ReferenceFrame', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetOrbitalReferenceFrame = function vesselGetOrbitalReferenceFrame(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_OrbitalReferenceFrame', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSurfaceReferenceFrame = function vesselGetSurfaceReferenceFrame(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SurfaceReferenceFrame', vessel),
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
 * @param {SpaceCenter.Vessel} vessel
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.vesselGetSurfaceVelocityReferenceFrame = function vesselGetSurfaceVelocityReferenceFrame(vessel) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Vessel_get_SurfaceVelocityReferenceFrame', vessel),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {void}
 * @returns {void}
*/
module.exports.waypointRemove = function waypointRemove(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_Remove', waypoint),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetBody = function waypointGetBody(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Body', waypoint),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetBody = function waypointSetBody(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Body', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetName = function waypointGetName(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Name', waypoint),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetName = function waypointSetName(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Name', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetColor = function waypointGetColor(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Color', waypoint),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetColor = function waypointSetColor(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Color', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetIcon = function waypointGetIcon(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Icon', waypoint),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetIcon = function waypointSetIcon(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Icon', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetLatitude = function waypointGetLatitude(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Latitude', waypoint),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetLatitude = function waypointSetLatitude(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Latitude', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetLongitude = function waypointGetLongitude(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Longitude', waypoint),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetLongitude = function waypointSetLongitude(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_Longitude', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetMeanAltitude = function waypointGetMeanAltitude(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_MeanAltitude', waypoint),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetMeanAltitude = function waypointSetMeanAltitude(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_MeanAltitude', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetSurfaceAltitude = function waypointGetSurfaceAltitude(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_SurfaceAltitude', waypoint),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetSurfaceAltitude = function waypointSetSurfaceAltitude(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_SurfaceAltitude', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetBedrockAltitude = function waypointGetBedrockAltitude(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_BedrockAltitude', waypoint),
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.waypointSetBedrockAltitude = function waypointSetBedrockAltitude(waypoint, value) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_set_BedrockAltitude', waypoint, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * True if waypoint is a point near or on the body rather than high in orbit.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetNearSurface = function waypointGetNearSurface(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_NearSurface', waypoint),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * True if waypoint is actually glued to the ground.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetGrounded = function waypointGetGrounded(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Grounded', waypoint),
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
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetIndex = function waypointGetIndex(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Index', waypoint),
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
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetClustered = function waypointGetClustered(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_Clustered', waypoint),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the waypoint belongs to a contract.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetHasContract = function waypointGetHasContract(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_HasContract', waypoint),
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
 * @param {SpaceCenter.Waypoint} waypoint
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointGetContractId = function waypointGetContractId(waypoint) {
    return {
        call: buildProcedureCall('SpaceCenter', 'Waypoint_get_ContractId', waypoint),
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
 * @param {SpaceCenter.WaypointManager} waypointManager
 * @param {number} latitude
 * @param {number} longitude
 * @param {SpaceCenter.CelestialBody} body
 * @param {string} name
 * @result {SpaceCenter.Waypoint}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerAddWaypoint = function waypointManagerAddWaypoint(waypointManager, latitude, longitude, body, name) {
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_AddWaypoint', waypointManager, latitude, longitude, body, name),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all existing waypoints.
 * </summary>
 * </doc>
 * @param {SpaceCenter.WaypointManager} waypointManager
 * @result {SpaceCenter.Waypoint[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetWaypoints = function waypointManagerGetWaypoints(waypointManager) {
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Waypoints', waypointManager),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Returns all available icons (from "GameData/Squad/Contracts/Icons/").
 * </summary>
 * </doc>
 * @param {SpaceCenter.WaypointManager} waypointManager
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetIcons = function waypointManagerGetIcons(waypointManager) {
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Icons', waypointManager),
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
 * @param {SpaceCenter.WaypointManager} waypointManager
 * @result {key : number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.waypointManagerGetColors = function waypointManagerGetColors(waypointManager) {
    return {
        call: buildProcedureCall('SpaceCenter', 'WaypointManager_get_Colors', waypointManager),
        decode: proto.krpc.schema.Dictionary
    };
};
