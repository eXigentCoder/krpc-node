/**
 * <doc>
 *   <summary>
 * Provides functionality to interact with Kerbal Space Program. This includes controlling
 * the active vessel, managing its resources, planning maneuver nodes and auto-piloting.
 * </summary>
 * </doc>
*/

/**
 * <doc>
 *   <summary>
 * Clears the current target.
 * </summary>
 * </doc>
*/function clearTarget() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns a list of vessels from the given <paramref name="craftDirectory" /> that can be launched.
 * </summary>
 *   <param name="craftDirectory">Name of the directory in the current saves "Ships" directory. For example <c>"VAB"</c> or <c>"SPH"</c>.</param>
 * </doc>
 * @param {string} craftDirectory * @returns {Object}
*/function launchableVessels(undefined) {
	//todo
}

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
*/function launchVessel(undefined) {
	//todo
}

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
*/function launchVesselFromVab(undefined) {
	//todo
}

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
*/function launchVesselFromSph(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Save the game with a given name.
 * This will create a save file called <c>name.sfs</c> in the folder of the current save game.
 * </summary>
 * </doc>
 * @param {string} name
*/function save(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Load the game with the given name.
 * This will create a load a save file called <c>name.sfs</c> from the folder of the current save game.
 * </summary>
 * </doc>
 * @param {string} name
*/function load(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Save a quicksave.
 * </summary>
 *   <remarks>
 * This is the same as calling <see cref="M:SpaceCenter.Save" /> with the name "quicksave".
 * </remarks>
 * </doc>
*/function quicksave() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Load a quicksave.
 * </summary>
 *   <remarks>
 * This is the same as calling <see cref="M:SpaceCenter.Load" /> with the name "quicksave".
 * </remarks>
 * </doc>
*/function quickload() {
	//todo
}

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
 * @param {number} factor * @returns {boolean}
*/function canRailsWarpAt(undefined) {
	//todo
}

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
*/function warpTo(undefined) {
	//todo
}

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
 * @param {Object} position
 * @param {Object} from
 * @param {Object} to * @returns {Object}
*/function transformPosition(undefined) {
	//todo
}

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
 * @param {Object} direction
 * @param {Object} from
 * @param {Object} to * @returns {Object}
*/function transformDirection(undefined) {
	//todo
}

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
 * @param {Object} rotation
 * @param {Object} from
 * @param {Object} to * @returns {Object}
*/function transformRotation(undefined) {
	//todo
}

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
 * @param {Object} position
 * @param {Object} velocity
 * @param {Object} from
 * @param {Object} to * @returns {Object}
*/function transformVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc> * @returns {Object}
*/function getActiveVessel() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently active vessel.
 * </summary>
 * </doc>
 * @param {Object} value
*/function setActiveVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all the vessels in the game.
 * </summary>
 * </doc> * @returns {Object}
*/function getVessels() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A dictionary of all celestial bodies (planets, moons, etc.) in the game,
 * keyed by the name of the body.
 * </summary>
 * </doc> * @returns {Object}
*/function getBodies() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc> * @returns {Object}
*/function getTargetBody() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted celestial body.
 * </summary>
 * </doc>
 * @param {Object} value
*/function setTargetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc> * @returns {Object}
*/function getTargetVessel() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted vessel.
 * </summary>
 * </doc>
 * @param {Object} value
*/function setTargetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc> * @returns {Object}
*/function getTargetDockingPort() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The currently targeted docking port.
 * </summary>
 * </doc>
 * @param {Object} value
*/function setTargetDockingPort(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The waypoint manager.
 * </summary>
 * </doc> * @returns {Object}
*/function getWaypointManager() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An object that can be used to control the camera.
 * </summary>
 * </doc> * @returns {Object}
*/function getCamera() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current universal time in seconds.
 * </summary>
 * </doc> * @returns {number}
*/function getUt() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The value of the <a href="https://en.wikipedia.org/wiki/Gravitational_constant">gravitational constant</a>
 * G in <math>N(m/kg)^2</math>.
 * </summary>
 * </doc> * @returns {number}
*/function getG() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current time warp mode. Returns <see cref="M:SpaceCenter.WarpMode.None" /> if time
 * warp is not active, <see cref="M:SpaceCenter.WarpMode.Rails" /> if regular "on-rails" time warp
 * is active, or <see cref="M:SpaceCenter.WarpMode.Physics" /> if physical time warp is active.
 * </summary>
 * </doc> * @returns {Object}
*/function getWarpMode() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current warp rate. This is the rate at which time is passing for
 * either on-rails or physical time warp. For example, a value of 10 means
 * time is passing 10x faster than normal. Returns 1 if time warp is not
 * active.
 * </summary>
 * </doc> * @returns {number}
*/function getWarpRate() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current warp factor. This is the index of the rate at which time
 * is passing for either regular "on-rails" or physical time warp. Returns 0
 * if time warp is not active. When in on-rails time warp, this is equal to
 * <see cref="M:SpaceCenter.RailsWarpFactor" />, and in physics time warp, this is equal to
 * <see cref="M:SpaceCenter.PhysicsWarpFactor" />.
 * </summary>
 * </doc> * @returns {number}
*/function getWarpFactor() {
	//todo
}

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
 * </doc> * @returns {number}
*/function getRailsWarpFactor() {
	//todo
}

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
*/function setRailsWarpFactor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The physical time warp rate. A value between 0 and 3 inclusive. 0 means
 * no time warp. Returns 0 if regular "on-rails" time warp is active.
 * </summary>
 * </doc> * @returns {number}
*/function getPhysicsWarpFactor() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The physical time warp rate. A value between 0 and 3 inclusive. 0 means
 * no time warp. Returns 0 if regular "on-rails" time warp is active.
 * </summary>
 * </doc>
 * @param {number} value
*/function setPhysicsWarpFactor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current maximum regular "on-rails" warp factor that can be set.
 * A value between 0 and 7 inclusive.  See
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Time_warp">the KSP wiki</a> for details.
 * </summary>
 * </doc> * @returns {number}
*/function getMaximumRailsWarpFactor() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a> is installed.
 * </summary>
 * </doc> * @returns {boolean}
*/function getFarAvailable() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Engage the auto-pilot.
 * </summary>
 * </doc>
 * @param {Object} this
*/function autoPilotEngage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Disengage the auto-pilot.
 * </summary>
 * </doc>
 * @param {Object} this
*/function autoPilotDisengage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Blocks until the vessel is pointing in the target direction and has the target roll (if set).
 * </summary>
 * </doc>
 * @param {Object} this
*/function autoPilotWait(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set target pitch and heading angles.
 * </summary>
 *   <param name="pitch">Target pitch angle, in degrees between -90° and +90°.</param>
 *   <param name="heading">Target heading angle, in degrees between 0° and 360°.</param>
 * </doc>
 * @param {Object} this
 * @param {number} pitch
 * @param {number} heading
*/function autoPilotTargetPitchAndHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the direction the ship has been asked
 * to point in and the direction it is pointing in. Returns zero if the auto-pilot
 * has not been engaged and SAS is not enabled or is in stability assist mode.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetError(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target pitch.
 * Returns zero if the auto-pilot has not been engaged.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetPitchError(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target heading.
 * Returns zero if the auto-pilot has not been engaged.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetHeadingError(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The error, in degrees, between the vessels current and target roll.
 * Returns zero if the auto-pilot has not been engaged or no target roll is set.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetRollError(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function autoPilotGetReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetTargetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target pitch, in degrees, between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function autoPilotSetTargetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetTargetHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target heading, in degrees, between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function autoPilotSetTargetHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetTargetRoll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target roll, in degrees. <c>NaN</c> if no target roll is set.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function autoPilotSetTargetRoll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetTargetDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Direction vector corresponding to the target pitch and heading.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetTargetDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SAS" /></remarks>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function autoPilotGetSas(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SAS" /></remarks>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function autoPilotSetSas(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SASMode" /></remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetSasMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.Control.SASMode" /></remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetSasMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The threshold at which the autopilot will try to match the target roll angle, if any.
 * Defaults to 5 degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function autoPilotGetRollThreshold(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The threshold at which the autopilot will try to match the target roll angle, if any.
 * Defaults to 5 degrees.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function autoPilotSetRollThreshold(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum amount of time that the vessel should need to come to a complete stop.
 * This determines the maximum angular velocity of the vessel.
 * A vector of three stopping times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 0.5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetStoppingTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum amount of time that the vessel should need to come to a complete stop.
 * This determines the maximum angular velocity of the vessel.
 * A vector of three stopping times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 0.5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetStoppingTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time the vessel should take to come to a stop pointing in the target direction.
 * This determines the angular acceleration used to decelerate the vessel.
 * A vector of three times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetDecelerationTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time the vessel should take to come to a stop pointing in the target direction.
 * This determines the angular acceleration used to decelerate the vessel.
 * A vector of three times, in seconds, one for each of the pitch, roll and yaw axes.
 * Defaults to 5 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetDecelerationTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The angle at which the autopilot considers the vessel to be pointing close to the target.
 * This determines the midpoint of the target velocity attenuation function.
 * A vector of three angles, in degrees, one for each of the pitch, roll and yaw axes.
 * Defaults to 1° for each axis.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetAttenuationAngle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The angle at which the autopilot considers the vessel to be pointing close to the target.
 * This determines the midpoint of the target velocity attenuation function.
 * A vector of three angles, in degrees, one for each of the pitch, roll and yaw axes.
 * Defaults to 1° for each axis.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetAttenuationAngle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the rotation rate controllers PID parameters should be automatically tuned using the
 * vessels moment of inertia and available torque. Defaults to <c>true</c>.
 * See <see cref="M:SpaceCenter.AutoPilot.TimeToPeak" /> and  <see cref="M:SpaceCenter.AutoPilot.Overshoot" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function autoPilotGetAutoTune(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the rotation rate controllers PID parameters should be automatically tuned using the
 * vessels moment of inertia and available torque. Defaults to <c>true</c>.
 * See <see cref="M:SpaceCenter.AutoPilot.TimeToPeak" /> and  <see cref="M:SpaceCenter.AutoPilot.Overshoot" />.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function autoPilotSetAutoTune(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target time to peak used to autotune the PID controllers.
 * A vector of three times, in seconds, for each of the pitch, roll and yaw axes.
 * Defaults to 3 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetTimeToPeak(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target time to peak used to autotune the PID controllers.
 * A vector of three times, in seconds, for each of the pitch, roll and yaw axes.
 * Defaults to 3 seconds for each axis.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetTimeToPeak(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target overshoot percentage used to autotune the PID controllers.
 * A vector of three values, between 0 and 1, for each of the pitch, roll and yaw axes.
 * Defaults to 0.01 for each axis.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetOvershoot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The target overshoot percentage used to autotune the PID controllers.
 * A vector of three values, between 0 and 1, for each of the pitch, roll and yaw axes.
 * Defaults to 0.01 for each axis.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetOvershoot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the pitch PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetPitchPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the pitch PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetPitchPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the roll PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetRollPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the roll PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetRollPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the yaw PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function autoPilotGetYawPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gains for the yaw PID controller.
 * </summary>
 *   <remarks>
 * When <see cref="M:SpaceCenter.AutoPilot.AutoTune" /> is true, these values are updated automatically, which will overwrite any manual changes.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function autoPilotSetYawPidGains(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cameraGetMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current mode of the camera.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function cameraSetMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The pitch of the camera, in degrees.
 * A value between <see cref="M:SpaceCenter.Camera.MinPitch" /> and <see cref="M:SpaceCenter.Camera.MaxPitch" /></summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function cameraSetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The heading of the camera, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function cameraSetHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The distance from the camera to the subject, in meters.
 * A value between <see cref="M:SpaceCenter.Camera.MinDistance" /> and <see cref="M:SpaceCenter.Camera.MaxDistance" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The distance from the camera to the subject, in meters.
 * A value between <see cref="M:SpaceCenter.Camera.MinDistance" /> and <see cref="M:SpaceCenter.Camera.MaxDistance" />.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function cameraSetDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum pitch of the camera.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetMinPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum pitch of the camera.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetMaxPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Minimum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetMinDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Maximum distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetMaxDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Default distance from the camera to the subject, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function cameraGetDefaultDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the celestial body that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a celestial body.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cameraGetFocussedBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the celestial body that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a celestial body.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function cameraSetFocussedBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the vessel that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a vessel.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cameraGetFocussedVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the vessel that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a vessel.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function cameraSetFocussedVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the maneuver node that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a maneuver node.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cameraGetFocussedNode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * In map mode, the maneuver node that the camera is focussed on.
 * Returns <c>null</c> if the camera is not focussed on a maneuver node.
 * Returns an error is the camera is not in map mode.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function cameraSetFocussedNode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The height of the surface relative to mean sea level at the given position,
 * in meters. When over water this is equal to 0.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 * </doc>
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude * @returns {number}
*/function celestialBodySurfaceHeight(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude * @returns {number}
*/function celestialBodyBedrockHeight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position at mean sea level at the given latitude and longitude, in the given reference frame.
 * </summary>
 *   <param name="latitude">Latitude in degrees</param>
 *   <param name="longitude">Longitude in degrees</param>
 *   <param name="referenceFrame">Reference frame for the returned position vector</param>
 * </doc>
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyMslPosition(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodySurfacePosition(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyBedrockPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The biomes at the given latitude and longitude, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude * @returns {string}
*/function celestialBodyBiomeAt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the center of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the velocity vector of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the rotation of the body in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the direction in which the north pole of the celestial body is
 * pointing, as a unit vector, in the specified reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyDirection(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function celestialBodyAngularVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the body.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function celestialBodyGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of celestial bodies that are in orbit around this celestial body.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetSatellites(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The mass of the body, in kilograms.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Standard_gravitational_parameter">standard
 * gravitational parameter</a> of the body in <math>m^3s^{-2}</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetGravitationalParameter(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The acceleration due to gravity at sea level (mean altitude) on the body, in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetSurfaceGravity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The sidereal rotational period of the body, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetRotationalPeriod(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rotational speed of the body, in radians per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetRotationalSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The equatorial radius of the body, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetEquatorialRadius(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The radius of the sphere of influence of the body, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetSphereOfInfluence(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The orbit of the body.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetOrbit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the body has an atmosphere.
 *            </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function celestialBodyGetHasAtmosphere(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The depth of the atmosphere, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetAtmosphereDepth(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if there is oxygen in the atmosphere, required for air-breathing engines.
 *            </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function celestialBodyGetHasAtmosphericOxygen(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The biomes present on this body.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetBiomes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be flying "high" when doing science.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetFlyingHighAltitudeThreshold(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude, in meters, above which a vessel is considered to be in "high" space when doing science.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function celestialBodyGetSpaceHighAltitudeThreshold(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetNonRotatingReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function celestialBodyGetOrbitalReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Activates the next stage. Equivalent to pressing the space bar in-game.
 * </summary>
 *   <returns>A list of vessel objects that are jettisoned from the active vessel.</returns>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlActivateNextStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns <c>true</c> if the given action group is enabled.
 * </summary>
 *   <param name="group">A number between 0 and 9 inclusive.</param>
 * </doc>
 * @param {Object} this
 * @param {number} group * @returns {boolean}
*/function controlGetActionGroup(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} group
 * @param {boolean} state
*/function controlSetActionGroup(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Toggles the state of the given action group.
 * </summary>
 *   <param name="group">A number between 0 and 9 inclusive.</param>
 * </doc>
 * @param {Object} this
 * @param {number} group
*/function controlToggleActionGroup(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} ut
 * @param {number} prograde
 * @param {number} normal
 * @param {number} radial * @returns {Object}
*/function controlAddNode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove all maneuver nodes.
 * </summary>
 * </doc>
 * @param {Object} this
*/function controlRemoveNodes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SAS" /></remarks>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetSas(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of SAS.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SAS" /></remarks>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetSas(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to
 * the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SASMode" /></remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlGetSasMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SASMode" />.
 * These modes are equivalent to the mode buttons to
 * the left of the navball that appear when SAS is enabled.
 * </summary>
 *   <remarks>Equivalent to <see cref="M:SpaceCenter.AutoPilot.SASMode" /></remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function controlSetSasMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SpeedMode" /> of the navball.
 * This is the mode displayed next to the speed at the top of the navball.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlGetSpeedMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current <see cref="T:SpaceCenter.SpeedMode" /> of the navball.
 * This is the mode displayed next to the speed at the top of the navball.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function controlSetSpeedMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetRcs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of RCS.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetRcs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetGear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the landing gear/legs.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetGear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetLights(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the lights.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetLights(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetBrakes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel brakes.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetBrakes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlGetAbort(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the abort action group.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSetAbort(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetThrottle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the throttle. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetThrottle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the pitch control.
 * A value between -1 and 1.
 * Equivalent to the w and s keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the pitch control.
 * A value between -1 and 1.
 * Equivalent to the w and s keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the yaw control.
 * A value between -1 and 1.
 * Equivalent to the a and d keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetYaw(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the yaw control.
 * A value between -1 and 1.
 * Equivalent to the a and d keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetYaw(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the roll control.
 * A value between -1 and 1.
 * Equivalent to the q and e keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetRoll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the roll control.
 * A value between -1 and 1.
 * Equivalent to the q and e keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetRoll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the forward translational control.
 * A value between -1 and 1.
 * Equivalent to the h and n keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetForward(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the forward translational control.
 * A value between -1 and 1.
 * Equivalent to the h and n keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetForward(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the up translational control.
 * A value between -1 and 1.
 * Equivalent to the i and k keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetUp(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the up translational control.
 * A value between -1 and 1.
 * Equivalent to the i and k keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetUp(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the right translational control.
 * A value between -1 and 1.
 * Equivalent to the j and l keys.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the right translational control.
 * A value between -1 and 1.
 * Equivalent to the j and l keys.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel throttle.
 * A value between -1 and 1.
 * A value of 1 rotates the wheels forwards, a value of -1 rotates
 * the wheels backwards.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetWheelThrottle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel throttle.
 * A value between -1 and 1.
 * A value of 1 rotates the wheels forwards, a value of -1 rotates
 * the wheels backwards.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetWheelThrottle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel steering.
 * A value between -1 and 1.
 * A value of 1 steers to the left, and a value of -1 steers to the right.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetWheelSteering(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the wheel steering.
 * A value between -1 and 1.
 * A value of 1 steers to the left, and a value of -1 steers to the right.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function controlSetWheelSteering(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current stage of the vessel. Corresponds to the stage number in
 * the in-game UI.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlGetCurrentStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns a list of all existing maneuver nodes, ordered by time from first to last.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlGetNodes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current G force acting on the vessel in <math>m/s^2</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetGForce(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude above sea level, in meters.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetMeanAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude above the surface of the body or sea level, whichever is closer, in meters.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetSurfaceAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * Measured from the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetBedrockAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The elevation of the terrain under the vessel, in meters. This is the height of the terrain above sea level,
 * and is negative when the vessel is over the sea.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetElevation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Latitude">latitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetLatitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Longitude">longitude</a> of the vessel for the body being orbited, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetLongitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The velocity vector of the vessel. The magnitude of the vector is the speed of the vessel in meters per second.
 * The direction of the vector is the direction of the vessels motion.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The horizontal speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetHorizontalSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vertical speed of the vessel in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetVerticalSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position of the center of mass of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetCenterOfMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rotation of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The direction vector that the vessel is pointing in.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The pitch angle of the vessel relative to the horizon, in degrees. A value between -90° and +90°.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetPitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The heading angle of the vessel relative to north, in degrees. A value between 0° and 360°.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetHeading(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The roll angle of the vessel relative to the horizon, in degrees. A value between -180° and +180°.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetRoll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the prograde direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetPrograde(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the retrograde direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetRetrograde(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the normal direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetNormal(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-normal direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetAntiNormal(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the radial direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetRadial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector pointing in the anti-radial direction.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetAntiRadial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current density of the atmosphere around the vessel, in <math>kg/m^3</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetAtmosphereDensity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The dynamic pressure acting on the vessel, in Pascals. This is a measure of the strength of the
 * aerodynamic forces. It is equal to <math>\frac{1}{2} . \mbox{air density} .  \mbox{velocity}^2</math>.
 * It is commonly denoted <math>Q</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetDynamicPressure(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure at mean sea level, in Pascals.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetStaticPressureAtMsl(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The static atmospheric pressure acting on the vessel, in Pascals.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetStaticPressure(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total aerodynamic forces acting on the vessel, as a vector pointing in the direction of the force, with its
 * magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetAerodynamicForce(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Aerodynamic_force">aerodynamic lift</a> currently acting on the vessel,
 * as a vector pointing in the direction of the force, with its magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetLift(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Aerodynamic_force">aerodynamic drag</a> currently acting on the vessel,
 * as a vector pointing in the direction of the force, with its magnitude equal to the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function flightGetDrag(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed of sound, in the atmosphere around the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetSpeedOfSound(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed of the vessel, in multiples of the speed of sound.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetMach(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessels Reynolds number.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetReynoldsNumber(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_airspeed">true air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetTrueAirSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Equivalent_airspeed">equivalent air speed</a> of the vessel, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetEquivalentAirSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An estimate of the current terminal velocity of the vessel, in <math>m/s</math>.
 * This is the speed at which the drag forces cancel out the force of gravity.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetTerminalVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the pitch angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetAngleOfAttack(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the yaw angle between the orientation of the vessel and its velocity vector, in degrees.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetSideslipAngle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Total_air_temperature">total air temperature</a> of the atmosphere
 * around the vessel, in Kelvin. This temperature includes the <see cref="M:SpaceCenter.Flight.StaticAirTemperature" /> and the vessel's kinetic energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetTotalAirTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Total_air_temperature">static (ambient) temperature</a> of the
 * atmosphere around the vessel, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetStaticAirTemperature(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {number}
*/function flightGetStallFraction(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {number}
*/function flightGetDragCoefficient(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the coefficient of lift. This is the amount of lift produced by the vessel, and depends on air speed, air density and wing area.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetLiftCoefficient(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the <a href="https://en.wikipedia.org/wiki/Ballistic_coefficient">ballistic coefficient</a>.
 * </summary>
 *   <remarks>
 * Requires <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/19321-105-ferram-aerospace-research-v01557-johnson-21816/">Ferram Aerospace Research</a>.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function flightGetBallisticCoefficient(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {number}
*/function flightGetThrustSpecificFuelConsumption(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function nodeBurnVector(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns a vector whose direction the direction of the maneuver node burn, and whose magnitude
 * is the delta-v of the burn in m/s. The direction and magnitude change as the burn is executed.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function nodeRemainingBurnVector(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Removes the maneuver node.
 * </summary>
 * </doc>
 * @param {Object} this
*/function nodeRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the maneuver node in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function nodePosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the unit direction vector of the maneuver nodes burn in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function nodeDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetPrograde(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the prograde direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function nodeSetPrograde(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetNormal(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the normal direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function nodeSetNormal(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetRadial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The magnitude of the maneuver nodes delta-v in the radial direction, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function nodeSetRadial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The delta-v of the maneuver node, in meters per second.
 * </summary>
 *   <remarks>
 * Does not change when executing the maneuver node. See <see cref="M:SpaceCenter.Node.RemainingDeltaV" />.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetDeltaV(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The delta-v of the maneuver node, in meters per second.
 * </summary>
 *   <remarks>
 * Does not change when executing the maneuver node. See <see cref="M:SpaceCenter.Node.RemainingDeltaV" />.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function nodeSetDeltaV(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the remaining delta-v of the maneuver node, in meters per second. Changes as the node
 * is executed. This is equivalent to the delta-v reported in-game.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetRemainingDeltaV(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetUt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The universal time at which the maneuver will occur, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function nodeSetUt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time until the maneuver node will be encountered, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function nodeGetTimeTo(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The orbit that results from executing the maneuver node.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function nodeGetOrbit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the reference frame that is fixed relative to the maneuver node's burn.
 * <list type="bullet"><item><description>The origin is at the position of the maneuver node.</description></item><item><description>The y-axis points in the direction of the burn.</description></item><item><description>The x-axis and z-axis point in arbitrary but fixed directions.</description></item></list></summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function nodeGetReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function nodeGetOrbitalReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector that is normal to the orbits reference plane, in the given
 * reference frame. The reference plane is the plane from which the orbits inclination is measured.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} referenceFrame * @returns {Object}
*/function orbitStaticReferencePlaneNormal(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unit direction vector from which the orbits longitude of ascending node is measured,
 * in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} referenceFrame * @returns {Object}
*/function orbitStaticReferencePlaneDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The orbital radius at the point in the orbit given by the true anomaly.
 * </summary>
 *   <param name="trueAnomaly">The true anomaly.</param>
 * </doc>
 * @param {Object} this
 * @param {number} trueAnomaly * @returns {number}
*/function orbitRadiusAtTrueAnomaly(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The true anomaly at the given orbital radius.
 * </summary>
 *   <param name="radius">The orbital radius in meters.</param>
 * </doc>
 * @param {Object} this
 * @param {number} radius * @returns {number}
*/function orbitTrueAnomalyAtRadius(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The true anomaly at the given time.
 * </summary>
 *   <param name="ut">The universal time in seconds.</param>
 * </doc>
 * @param {Object} this
 * @param {number} ut * @returns {number}
*/function orbitTrueAnomalyAtUt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The universal time, in seconds, corresponding to the given true anomaly.
 * </summary>
 *   <param name="trueAnomaly">True anomaly.</param>
 * </doc>
 * @param {Object} this
 * @param {number} trueAnomaly * @returns {number}
*/function orbitUtAtTrueAnomaly(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The eccentric anomaly at the given universal time.
 * </summary>
 *   <param name="ut">The universal time, in seconds.</param>
 * </doc>
 * @param {Object} this
 * @param {number} ut * @returns {number}
*/function orbitEccentricAnomalyAtUt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The orbital speed at the given time, in meters per second.
 * </summary>
 *   <param name="time">Time from now, in seconds.</param>
 * </doc>
 * @param {Object} this
 * @param {number} time * @returns {number}
*/function orbitOrbitalSpeedAt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body (e.g. planet or moon) around which the object is orbiting.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function orbitGetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the apoapsis of the orbit, in meters, from the center of mass of the body being orbited.
 * </summary>
 *   <remarks>
 * For the apoapsis altitude reported on the in-game map view, use <see cref="M:SpaceCenter.Orbit.ApoapsisAltitude" />.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetApoapsis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The periapsis of the orbit, in meters, from the center of mass of the body being orbited.
 * </summary>
 *   <remarks>
 * For the periapsis altitude reported on the in-game map view, use <see cref="M:SpaceCenter.Orbit.PeriapsisAltitude" />.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetPeriapsis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The apoapsis of the orbit, in meters, above the sea level of the body being orbited.
 * </summary>
 *   <remarks>
 * This is equal to <see cref="M:SpaceCenter.Orbit.Apoapsis" /> minus the equatorial radius of the body.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetApoapsisAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The periapsis of the orbit, in meters, above the sea level of the body being orbited.
 * </summary>
 *   <remarks>
 * This is equal to <see cref="M:SpaceCenter.Orbit.Periapsis" /> minus the equatorial radius of the body.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetPeriapsisAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The semi-major axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetSemiMajorAxis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The semi-minor axis of the orbit, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetSemiMinorAxis(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {number}
*/function orbitGetRadius(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current orbital speed of the object in meters per second.
 * </summary>
 *   <remarks>
 * This value will change over time if the orbit is elliptical.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The orbital period, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetPeriod(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time until the object reaches apoapsis, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetTimeToApoapsis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time until the object reaches periapsis, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetTimeToPeriapsis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Orbital_eccentricity">eccentricity</a> of the orbit.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetEccentricity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Orbital_inclination">inclination</a> of the orbit,
 * in radians.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetInclination(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Longitude_of_the_ascending_node">longitude of the
 * ascending node</a>, in radians.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetLongitudeOfAscendingNode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Argument_of_periapsis">argument of periapsis</a>, in radians.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetArgumentOfPeriapsis(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly at epoch</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetMeanAnomalyAtEpoch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time since the epoch (the point at which the
 * <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly at epoch</a> was measured, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetEpoch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Mean_anomaly">mean anomaly</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetMeanAnomaly(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/Eccentric_anomaly">eccentric anomaly</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetEccentricAnomaly(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <a href="https://en.wikipedia.org/wiki/True_anomaly">true anomaly</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetTrueAnomaly(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * If the object is going to change sphere of influence in the future, returns the new orbit
 * after the change. Otherwise returns <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function orbitGetNextOrbit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time until the object changes sphere of influence, in seconds. Returns <c>NaN</c> if the
 * object is not going to change sphere of influence.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetTimeToSoiChange(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current orbital speed in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function orbitGetOrbitalSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this cargo bay.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cargoBayGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the cargo bay.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function cargoBayGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function cargoBayGetOpen(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the cargo bay is open.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function cargoBaySetOpen(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this control surface.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlSurfaceGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlSurfaceGetPitchEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has pitch control enabled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSurfaceSetPitchEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlSurfaceGetYawEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has yaw control enabled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSurfaceSetYawEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlSurfaceGetRollEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has roll control enabled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSurfaceSetRollEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlSurfaceGetInverted(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface movement is inverted.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSurfaceSetInverted(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function controlSurfaceGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the control surface has been fully deployed.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function controlSurfaceSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Surface area of the control surface in <math>m^2</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function controlSurfaceGetSurfaceArea(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function controlSurfaceGetAvailableTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Fires the decoupler. Returns the new vessel created when the decoupler fires.
 * Throws an exception if the decoupler has already fired.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function decouplerDecouple(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this decoupler.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function decouplerGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the decoupler has fired.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function decouplerGetDecoupled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the decoupler is enabled in the staging sequence.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function decouplerGetStaged(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The impulse that the decoupler imparts when it is fired, in Newton seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function decouplerGetImpulse(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function dockingPortUndock(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position of the docking port in the given reference frame.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function dockingPortPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The direction that docking port points in, in the given reference frame.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function dockingPortDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rotation of the docking port, in the given reference frame.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function dockingPortRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this docking port.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function dockingPortGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current state of the docking port.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function dockingPortGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part that this docking port is docked to. Returns <c>null</c> if this
 * docking port is not docked to anything.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function dockingPortGetDockedPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The distance a docking port must move away when it undocks before it
 * becomes ready to dock with another port, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function dockingPortGetReengageDistance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the docking port has a shield.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function dockingPortGetHasShield(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {boolean}
*/function dockingPortGetShielded(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {boolean} value
*/function dockingPortSetShielded(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function dockingPortGetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Toggle the current engine mode.
 * </summary>
 * </doc>
 * @param {Object} this
*/function engineToggleMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this engine.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function engineGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine is active. Setting this attribute may have no effect,
 * depending on <see cref="M:SpaceCenter.Engine.CanShutdown" /> and <see cref="M:SpaceCenter.Engine.CanRestart" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine is active. Setting this attribute may have no effect,
 * depending on <see cref="M:SpaceCenter.Engine.CanShutdown" /> and <see cref="M:SpaceCenter.Engine.CanRestart" />.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function engineSetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current amount of thrust being produced by the engine, in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The amount of thrust, in Newtons, that would be produced by the engine
 * when activated and with its throttle set to 100%.
 * Returns zero if the engine does not have any fuel.
 * Takes the engine's current <see cref="M:SpaceCenter.Engine.ThrustLimit" /> and atmospheric conditions into account.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetAvailableThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The amount of thrust, in Newtons, that would be produced by the engine
 * when activated and fueled, with its throttle and throttle limiter set to 100%.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetMaxThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the engine in a
 * vacuum, in Newtons. This is the amount of thrust produced by the engine
 * when activated, <see cref="M:SpaceCenter.Engine.ThrustLimit" /> is set to 100%, the main
 * vessel's throttle is set to 100% and the engine is in a vacuum.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetMaxVacuumThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The thrust limiter of the engine. A value between 0 and 1. Setting this
 * attribute may have no effect, for example the thrust limit for a solid
 * rocket booster cannot be changed in flight.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetThrustLimit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The thrust limiter of the engine. A value between 0 and 1. Setting this
 * attribute may have no effect, for example the thrust limit for a solid
 * rocket booster cannot be changed in flight.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function engineSetThrustLimit(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function engineGetThrusters(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current specific impulse of the engine, in seconds. Returns zero
 * if the engine is not active.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the engine, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetVacuumSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The specific impulse of the engine at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetKerbinSeaLevelSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The names of the propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function engineGetPropellantNames(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The propellants that the engine consumes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function engineGetPropellants(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function engineGetPropellantRatios(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine has any fuel available.
 * </summary>
 *   <remarks>
 * The engine must be activated for this property to update correctly.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetHasFuel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current throttle setting for the engine. A value between 0 and 1.
 * This is not necessarily the same as the vessel's main throttle
 * setting, as some engines take time to adjust their throttle
 * (such as jet engines).
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetThrottle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the <see cref="M:SpaceCenter.Control.Throttle" /> affects the engine. For example,
 * this is <c>true</c> for liquid fueled rockets, and <c>false</c> for solid rocket
 * boosters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetThrottleLocked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine can be restarted once shutdown. If the engine cannot be shutdown,
 * returns <c>false</c>. For example, this is <c>true</c> for liquid fueled rockets
 * and <c>false</c> for solid rocket boosters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetCanRestart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine can be shutdown once activated. For example, this is
 * <c>true</c> for liquid fueled rockets and <c>false</c> for solid rocket boosters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetCanShutdown(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine has multiple modes of operation.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetHasModes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function engineGetMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the current engine mode.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function engineSetMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The available modes for the engine.
 * A dictionary mapping mode names to <see cref="T:SpaceCenter.Engine" /> objects.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function engineGetModes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetAutoModeSwitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine will automatically switch modes.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function engineSetAutoModeSwitch(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engine is gimballed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetGimballed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The range over which the gimbal can move, in degrees.
 * Returns 0 if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetGimbalRange(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engines gimbal is locked in place. Setting this attribute has
 * no effect if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function engineGetGimbalLocked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the engines gimbal is locked in place. Setting this attribute has
 * no effect if the engine is not gimballed.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function engineSetGimbalLocked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The gimbal limiter of the engine. A value between 0 and 1.
 * Returns 0 if the gimbal is locked.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function engineGetGimbalLimit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The gimbal limiter of the engine. A value between 0 and 1.
 * Returns 0 if the gimbal is locked.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function engineSetGimbalLimit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the engine is inactive, or not gimballed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function engineGetAvailableTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Run the experiment.
 * </summary>
 * </doc>
 * @param {Object} this
*/function experimentRun(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Transmit all experimental data contained by this part.
 * </summary>
 * </doc>
 * @param {Object} this
*/function experimentTransmit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Dump the experimental data contained by the experiment.
 * </summary>
 * </doc>
 * @param {Object} this
*/function experimentDump(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reset the experiment.
 * </summary>
 * </doc>
 * @param {Object} this
*/function experimentReset(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this experiment.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function experimentGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the experiment is inoperable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function experimentGetInoperable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the experiment has been deployed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function experimentGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the experiment can be re-run.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function experimentGetRerunnable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the experiment contains data.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function experimentGetHasData(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The data contained in this experiment.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function experimentGetData(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Determines if the experiment is available given the current conditions.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function experimentGetAvailable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the biome the experiment is currently in.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function experimentGetBiome(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Containing information on the corresponding specific science result for the current conditions.
 * Returns null if experiment is unavailable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function experimentGetScienceSubject(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Jettison the fairing. Has no effect if it has already been jettisoned.
 * </summary>
 * </doc>
 * @param {Object} this
*/function fairingJettison(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this fairing.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function fairingGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the fairing has been jettisoned.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function fairingGetJettisoned(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the force.
 * </summary>
 * </doc>
 * @param {Object} this
*/function forceRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part that this force is applied to.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function forceGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function forceGetForceVector(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The force vector. The magnitude of the vector is the strength of the force in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function forceSetForceVector(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function forceGetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position at which the force acts.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function forceSetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function forceGetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The reference frame of the force vector and position.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function forceSetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this intake.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function intakeGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function intakeGetOpen(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the intake is open.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function intakeSetOpen(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Speed of the flow into the intake, in <math>m/s</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function intakeGetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate of flow into the intake, in units of resource per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function intakeGetFlow(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The area of the intake's opening, in square meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function intakeGetArea(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this landing gear.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function landingGearGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the landing gear is deployable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function landingGearGetDeployable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the current state of the landing gear.
 * </summary>
 *   <remarks>
 * Fixed landing gear are always deployed.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function landingGearGetState(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {boolean}
*/function landingGearGetDeployed(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {boolean} value
*/function landingGearSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this landing leg.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function landingLegGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current state of the landing leg.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function landingLegGetState(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {boolean}
*/function landingLegGetDeployed(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {boolean} value
*/function landingLegSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Releases the docking clamp. Has no effect if the clamp has already been released.
 * </summary>
 * </doc>
 * @param {Object} this
*/function launchClampRelease(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this launch clamp.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function launchClampGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this light.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lightGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function lightGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the light is switched on.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function lightSetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lightGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The color of the light, as an RGB triple.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function lightSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current power usage, in units of charge per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function lightGetPowerUsage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns <c>true</c> if the module has a field with the given name.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {boolean}
*/function moduleHasField(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the value of a field.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {string}
*/function moduleGetField(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given integer number.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name
 * @param {number} value
*/function moduleSetFieldInt(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given floating point number.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name
 * @param {number} value
*/function moduleSetFieldFloat(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the value of a field to the given string.
 * </summary>
 *   <param name="name">Name of the field.</param>
 *   <param name="value">Value to set.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name
 * @param {string} value
*/function moduleSetFieldString(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the value of a field to its original value.
 * </summary>
 *   <param name="name">Name of the field.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name
*/function moduleResetField(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the module has an event with the given name.
 *            </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {boolean}
*/function moduleHasEvent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Trigger the named event. Equivalent to clicking the button in the right-click menu of the part.
 * </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} name
*/function moduleTriggerEvent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 *     <c>true</c> if the part has an action with the given name.
 *            </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {boolean}
*/function moduleHasAction(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {string} name
 * @param {boolean} value
*/function moduleSetAction(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the PartModule. For example, "ModuleEngines".
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function moduleGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part that contains this module.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function moduleGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The modules field names and their associated values, as a dictionary.
 * These are the values visible in the right-click menu of the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function moduleGetFields(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of the names of all of the modules events. Events are the clickable buttons
 * visible in the right-click menu of the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function moduleGetEvents(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all the names of the modules actions. These are the parts actions that can be assigned
 * to action groups in the in-game editor.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function moduleGetActions(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Deploys the parachute. This has no effect if the parachute has already
 * been deployed.
 * </summary>
 * </doc>
 * @param {Object} this
*/function parachuteDeploy(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this parachute.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function parachuteGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the parachute has been deployed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function parachuteGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current state of the parachute.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function parachuteGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function parachuteGetDeployAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude at which the parachute will full deploy, in meters.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function parachuteSetDeployAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function parachuteGetDeployMinPressure(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum pressure at which the parachute will semi-deploy, in atmospheres.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function parachuteSetDeployMinPressure(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function partPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position of the parts center of mass in the given reference frame.
 * If the part is physicsless, this is equivalent to <see cref="M:SpaceCenter.Part.Position" />.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function partCenterOfMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The direction of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function partDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The velocity of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function partVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rotation of the part in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function partRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Exert a constant force on the part, acting at the given position.
 * Returns an object that can be used to remove or modify the force.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} force
 * @param {Object} position
 * @param {Object} referenceFrame * @returns {Object}
*/function partAddForce(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Exert an instantaneous force on the part, acting at the given position.
 * </summary>
 *   <remarks>
 * The force is applied instantaneously in a single physics update.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {Object} force
 * @param {Object} position
 * @param {Object} referenceFrame
*/function partInstantaneousForce(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Internal name of the part, as used in
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/CFG_File_Documentation">part cfg files</a>.
 * For example "Mark1-2Pod".
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function partGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Title of the part, as shown when the part is right clicked in-game. For example "Mk1-2 Command Pod".
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function partGetTitle(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {string}
*/function partGetTag(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {string} value
*/function partSetTag(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The cost of the part, in units of funds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetCost(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that contains this part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts parent. Returns <c>null</c> if the part does not have a parent.
 * This, in combination with <see cref="M:SpaceCenter.Part.Children" />, can be used to traverse the vessels parts tree.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetParent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts children. Returns an empty list if the part has no children.
 * This, in combination with <see cref="M:SpaceCenter.Part.Parent" />, can be used to traverse the vessels parts tree.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetChildren(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the part is axially attached to its parent, i.e. on the top
 * or bottom of its parent. If the part has no parent, returns <c>false</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetAxiallyAttached(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the part is radially attached to its parent, i.e. on the side of its parent.
 * If the part has no parent, returns <c>false</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetRadiallyAttached(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be activated. Returns -1 if the part is not activated by staging.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The stage in which this part will be decoupled. Returns -1 if the part is never decoupled from the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetDecoupleStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the part is <a href="http://wiki.kerbalspaceprogram.com/wiki/Massless_part">massless</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetMassless(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current mass of the part, including resources it contains, in kilograms.
 * Returns zero if the part is massless.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The mass of the part, not including any resources it contains, in kilograms. Returns zero if the part is massless.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetDryMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the part is shielded from the exterior of the vessel, for example by a fairing.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetShielded(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The dynamic pressure acting on the part, in Pascals.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetDynamicPressure(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The impact tolerance of the part, in meters per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetImpactTolerance(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Temperature of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Temperature of the skin of the part, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetSkinTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetMaxTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Maximum temperature that the skin of the part can survive, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetMaxSkinTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the internal temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the skin temperature of the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalSkinMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A measure of how much energy it takes to increase the temperature of the resources contained in the part, in Joules per Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalResourceMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is begin generated by the part.
 * For example, some engines generate heat by combusting fuel.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalInternalFlux(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is conducting into or out of the part via contact with other parts.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalConductionFlux(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is convecting into or out of the part from the surrounding atmosphere.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalConvectionFlux(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is radiating into or out of the part from the surrounding environment.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part is gaining heat energy, and negative means it is losing heat energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalRadiationFlux(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which heat energy is transferring between the part's skin and its internals.
 * Measured in energy per unit time, or power, in Watts.
 * A positive value means the part's internals are gaining heat energy,
 * and negative means its skin is gaining heat energy.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function partGetThermalSkinToInternalFlux(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Resources" /> object for the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetResources(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether this part is crossfeed capable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetCrossfeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether this part is a fuel line.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function partGetIsFuelLine(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is into this part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetFuelLinesFrom(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts that are connected to this part via fuel lines, where the direction of the fuel line is out of this part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetFuelLinesTo(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The modules for this part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetModules(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.CargoBay" /> if the part is a cargo bay, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetCargoBay(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ControlSurface" /> if the part is an aerodynamic control surface, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetControlSurface(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Decoupler" /> if the part is a decoupler, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetDecoupler(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.DockingPort" /> if the part is a docking port, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetDockingPort(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Engine" /> if the part is an engine, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetEngine(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.Experiment" /> if the part is a science experiment, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetExperiment(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Fairing" /> if the part is a fairing, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetFairing(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function partGetIntake(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingGear" /> if the part is a landing gear, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetLandingGear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LandingLeg" /> if the part is a landing leg, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetLandingLeg(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.LaunchClamp" /> if the part is a launch clamp, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetLaunchClamp(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Light" /> if the part is a light, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetLight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parachute" /> if the part is a parachute, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetParachute(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Radiator" /> if the part is a radiator, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetRadiator(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.RCS" /> if the part is an RCS block/thruster, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetRcs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ReactionWheel" /> if the part is a reaction wheel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetReactionWheel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceConverter" /> if the part is a resource converter, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetResourceConverter(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.ResourceHarvester" /> if the part is a resource harvester, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetResourceHarvester(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Sensor" /> if the part is a sensor, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetSensor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.SolarPanel" /> if the part is a solar panel, otherwise <c>null</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetSolarPanel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The moment of inertia of the part in <math>kg.m^2</math> around its center of mass
 * in the parts reference frame (<see cref="T:SpaceCenter.ReferenceFrame" />).
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetMomentOfInertia(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The inertia tensor of the part in the parts reference frame (<see cref="T:SpaceCenter.ReferenceFrame" />).
 * Returns the 3x3 matrix as a list of elements, in row-major order.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partGetInertiaTensor(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function partGetReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function partGetCenterOfMassReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of parts whose <see cref="M:SpaceCenter.Part.Name" /> is <paramref name="name" />.
 * </summary>
 *   <param name="name">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {Object}
*/function partsWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parts whose <see cref="M:SpaceCenter.Part.Title" /> is <paramref name="title" />.
 * </summary>
 *   <param name="title">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} title * @returns {Object}
*/function partsWithTitle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parts whose <see cref="M:SpaceCenter.Part.Tag" /> is <paramref name="tag" />.
 * </summary>
 *   <param name="tag">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} tag * @returns {Object}
*/function partsWithTag(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parts that contain a <see cref="T:SpaceCenter.Module" /> whose
 * <see cref="M:SpaceCenter.Module.Name" /> is <paramref name="moduleName" />.
 * </summary>
 *   <param name="moduleName">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} moduleName * @returns {Object}
*/function partsWithModule(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parts that are activated in the given <paramref name="stage" />.
 * </summary>
 *   <param name="stage">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {number} stage * @returns {Object}
*/function partsInStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parts that are decoupled in the given <paramref name="stage" />.
 * </summary>
 *   <param name="stage">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {number} stage * @returns {Object}
*/function partsInDecoupleStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of modules (combined across all parts in the vessel) whose
 * <see cref="M:SpaceCenter.Module.Name" /> is <paramref name="moduleName" />.
 * </summary>
 *   <param name="moduleName">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {string} moduleName * @returns {Object}
*/function partsModulesWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all of the vessels parts.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetAll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessels root part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetRoot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetControlling(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part from which the vessel is controlled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function partsSetControlling(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all control surfaces in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetControlSurfaces(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all cargo bays in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetCargoBays(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all decouplers in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetDecouplers(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all docking ports in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetDockingPorts(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function partsGetEngines(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all science experiments in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetExperiments(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all fairings in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetFairings(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all intakes in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetIntakes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all landing gear attached to the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetLandingGear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all landing legs attached to the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetLandingLegs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all launch clamps attached to the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetLaunchClamps(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all lights in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetLights(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all parachutes in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetParachutes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all radiators in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetRadiators(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all RCS blocks/thrusters in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetRcs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all reaction wheels in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetReactionWheels(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all resource converters in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetResourceConverters(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all resource harvesters in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetResourceHarvesters(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all sensors in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetSensors(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all solar panels in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function partsGetSolarPanels(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the propellant.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function propellantGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current amount of propellant.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function propellantGetCurrentAmount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The required amount of propellant.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function propellantGetCurrentRequirement(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total amount of the underlying resource currently reachable given resource flow rules.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function propellantGetTotalResourceAvailable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total vehicle capacity for the underlying propellant resource, restricted by resource flow rules.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function propellantGetTotalResourceCapacity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored when calculating required mass flow given specific impulse.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function propellantGetIgnoreForIsp(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * If this propellant should be ignored for thrust curve calculations.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function propellantGetIgnoreForThrustCurve(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * If this propellant has a stack gauge or not.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function propellantGetDrawStackGauge(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * If this propellant is deprived.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function propellantGetIsDeprived(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The propellant ratio.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function propellantGetRatio(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The reachable resources connected to this propellant.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function propellantGetConnectedResources(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this RCS.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function rcsGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are active.
 * An RCS thruster is inactive if the RCS action group is disabled (<see cref="M:SpaceCenter.Control.RCS" />),
 * the RCS thruster itself is not enabled (<see cref="M:SpaceCenter.RCS.Enabled" />) or
 * it is covered by a fairing (<see cref="M:SpaceCenter.Part.Shielded" />).
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thrusters are enabled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetPitchEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetPitchEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetYawEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetYawEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetRollEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetRollEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetForwardEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when pitch control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetForwardEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetUpEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when yaw control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetUpEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetRightEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS thruster will fire when roll control input is given.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function rcsSetRightEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the RCS is inactive.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function rcsGetAvailableTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active, in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function rcsGetMaxThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum amount of thrust that can be produced by the RCS thrusters when active in a vacuum, in Newtons.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function rcsGetMaxVacuumThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of thrusters, one of each nozzel in the RCS part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function rcsGetThrusters(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current specific impulse of the RCS, in seconds. Returns zero
 * if the RCS is not active.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function rcsGetSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vacuum specific impulse of the RCS, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function rcsGetVacuumSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The specific impulse of the RCS at sea level on Kerbin, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function rcsGetKerbinSeaLevelSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The names of resources that the RCS consumes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function rcsGetPropellants(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ratios of resources that the RCS consumes. A dictionary mapping resource names
 * to the ratios at which they are consumed by the RCS.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function rcsGetPropellantRatios(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the RCS has fuel available.
 * </summary>
 *   <remarks>
 * The RCS thruster must be activated for this property to update correctly.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function rcsGetHasFuel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this radiator.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function radiatorGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the radiator is deployable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function radiatorGetDeployable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * For a deployable radiator, <c>true</c> if the radiator is extended.
 * If the radiator is not deployable, this is always <c>true</c>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function radiatorGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * For a deployable radiator, <c>true</c> if the radiator is extended.
 * If the radiator is not deployable, this is always <c>true</c>.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function radiatorSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current state of the radiator.
 * </summary>
 *   <remarks>
 * A fixed radiator is always <see cref="M:SpaceCenter.RadiatorState.Extended" />.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function radiatorGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this reaction wheel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function reactionWheelGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function reactionWheelGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is active.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function reactionWheelSetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the reaction wheel is broken.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function reactionWheelGetBroken(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The available torque in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * Returns zero if the reaction wheel is inactive or broken.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function reactionWheelGetAvailableTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum torque the reaction wheel can provide, is it active,
 * in the pitch, roll and yaw axes of the vessel, in Newton meters.
 * These axes correspond to the coordinate axes of the <see cref="M:SpaceCenter.Vessel.ReferenceFrame" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function reactionWheelGetMaxTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * True if the specified converter is active.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {boolean}
*/function resourceConverterActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {string}
*/function resourceConverterName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Start the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index
*/function resourceConverterStart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Stop the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index
*/function resourceConverterStop(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {Object}
*/function resourceConverterState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Status information for the specified converter.
 * This is the full status message shown in the in-game UI.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {string}
*/function resourceConverterStatusInfo(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * List of the names of resources consumed by the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {Object}
*/function resourceConverterInputs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * List of the names of resources produced by the specified converter.
 * </summary>
 *   <param name="index">Index of the converter.</param>
 * </doc>
 * @param {Object} this
 * @param {number} index * @returns {Object}
*/function resourceConverterOutputs(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this converter.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourceConverterGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of converters in the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceConverterGetCount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this harvester.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourceHarvesterGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The state of the harvester.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourceHarvesterGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function resourceHarvesterGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the harvester is deployed.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function resourceHarvesterSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function resourceHarvesterGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the harvester is actively drilling.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function resourceHarvesterSetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rate at which the drill is extracting ore, in units per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceHarvesterGetExtractionRate(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The thermal efficiency of the drill, as a percentage of its maximum.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceHarvesterGetThermalEfficiency(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The core temperature of the drill, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceHarvesterGetCoreTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The core temperature at which the drill will operate with peak efficiency, in Kelvin.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceHarvesterGetOptimumCoreTemperature(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Data amount.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceDataGetDataAmount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Science value.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceDataGetScienceValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Transmit value.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceDataGetTransmitValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Amount of science already earned from this subject, not updated until after transmission/recovery.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceSubjectGetScience(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Total science allowable for this subject.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceSubjectGetScienceCap(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 *  Whether the experiment has been completed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function scienceSubjectGetIsComplete(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Multiply science value by this to determine data amount in mits.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceSubjectGetDataScale(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Diminishing value multiplier for decreasing the science value returned from repeated experiments.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceSubjectGetScientificValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Multiplier for specific Celestial Body/Experiment Situation combination.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function scienceSubjectGetSubjectValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Title of science subject, displayed in science archives
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function scienceSubjectGetTitle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this sensor.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function sensorGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function sensorGetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the sensor is active.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function sensorSetActive(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current value of the sensor.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function sensorGetValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current power usage of the sensor, in units of charge per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function sensorGetPowerUsage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part object for this solar panel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function solarPanelGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function solarPanelGetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the solar panel is extended.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function solarPanelSetDeployed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current state of the solar panel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function solarPanelGetState(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current amount of energy being generated by the solar panel, in
 * units of charge per second.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function solarPanelGetEnergyFlow(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current amount of sunlight that is incident on the solar panel,
 * as a percentage. A value between 0 and 1.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function solarPanelGetSunExposure(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position at which the thruster generates thrust, in the given reference frame.
 * For gimballed engines, this takes into account the current rotation of the gimbal.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function thrusterThrustPosition(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function thrusterThrustDirection(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function thrusterInitialThrustPosition(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function thrusterInitialThrustDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position around which the gimbal pivots.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function thrusterGimbalPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The <see cref="T:SpaceCenter.Part" /> that contains this thruster.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function thrusterGetPart(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function thrusterGetThrustReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the thruster is gimballed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function thrusterGetGimballed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current gimbal angle in the pitch, roll and yaw axes.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function thrusterGetGimbalAngle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the resource.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function resourceGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part containing the resource.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourceGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total amount of the resource that can be stored in the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceGetMax(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The amount of the resource that is currently stored in the part.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceGetAmount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The density of the resource, in <math>kg/l</math>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceGetDensity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The flow mode of the resource.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourceGetFlowMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function resourceGetEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether use of this resource is enabled.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function resourceSetEnabled(undefined) {
	//todo
}

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
 * @param {Object} fromPart
 * @param {Object} toPart
 * @param {string} resource
 * @param {number} maxAmount * @returns {Object}
*/function resourceTransferStaticStart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the transfer has completed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function resourceTransferGetComplete(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The amount of the resource that has been transferred.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function resourceTransferGetAmount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * All the individual resources with the given name that can be stored.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {Object}
*/function resourcesWithResource(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Check whether the named resource can be stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {boolean}
*/function resourcesHasResource(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the amount of a resource that can be stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {number}
*/function resourcesMax(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the amount of a resource that is currently stored.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {number}
*/function resourcesAmount(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the density of a resource, in kg/l.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {string} name * @returns {number}
*/function resourcesStaticDensity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the flow mode of a resource.
 * </summary>
 *   <param name="name">The name of the resource.</param>
 * </doc>
 * @param {string} name * @returns {Object}
*/function resourcesStaticFlowMode(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * All the individual resources that can be stored.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourcesGetAll(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of resource names that can be stored.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function resourcesGetNames(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether use of all the resources are enabled.
 * </summary>
 *   <remarks>
 * This is true if all of the resources are enabled. If any of the resources are not enabled, this is false.
 * </remarks>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function resourcesGetEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether use of all the resources are enabled.
 * </summary>
 *   <remarks>
 * This is true if all of the resources are enabled. If any of the resources are not enabled, this is false.
 * </remarks>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function resourcesSetEnabled(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Recover the vessel.
 * </summary>
 * </doc>
 * @param {Object} this
*/function vesselRecover(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselFlight(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} stage
 * @param {boolean} cumulative * @returns {Object}
*/function vesselResourcesInDecoupleStage(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the position vector of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the velocity vector of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the rotation of the center of mass of the vessel in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the direction in which the vessel is pointing, as a unit vector, in the given reference frame.
 * </summary>
 *   <param name="referenceFrame">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselDirection(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {Object} referenceFrame * @returns {Object}
*/function vesselAngularVelocity(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function vesselGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function vesselSetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetType(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The type of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function vesselSetType(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The situation the vessel is in.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetSituation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel is recoverable.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function vesselGetRecoverable(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The mission elapsed time in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetMet(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the biome the vessel is currently in.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function vesselGetBiome(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current orbit of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetOrbit(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns a <see cref="T:SpaceCenter.Control" /> object that can be used to manipulate
 * the vessel's control inputs. For example, its pitch/yaw/roll controls,
 * RCS and thrust.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetControl(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An <see cref="T:SpaceCenter.AutoPilot" /> object, that can be used to perform
 * simple auto-piloting of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetAutoPilot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Resources" /> object, that can used to get information
 * about resources stored in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetResources(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A <see cref="T:SpaceCenter.Parts" /> object, that can used to interact with the parts that make up this vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetParts(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, including resources, in kg.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total mass of the vessel, excluding resources, in kg.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetDryMass(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total thrust currently being produced by the vessel's engines, in
 * Newtons. This is computed by summing <see cref="M:SpaceCenter.Engine.Thrust" /> for
 * every engine in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Gets the total available thrust that can be produced by the vessel's
 * active engines, in Newtons. This is computed by summing
 * <see cref="M:SpaceCenter.Engine.AvailableThrust" /> for every active engine in the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetAvailableThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total maximum thrust that can be produced by the vessel's active
 * engines, in Newtons. This is computed by summing
 * <see cref="M:SpaceCenter.Engine.MaxThrust" /> for every active engine.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetMaxThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The total maximum thrust that can be produced by the vessel's active
 * engines when the vessel is in a vacuum, in Newtons. This is computed by
 * summing <see cref="M:SpaceCenter.Engine.MaxVacuumThrust" /> for every active engine.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetMaxVacuumThrust(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The combined specific impulse of all active engines, in seconds. This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The combined vacuum specific impulse of all active engines, in seconds. This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetVacuumSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The combined specific impulse of all active engines at sea level on Kerbin, in seconds.
 * This is computed using the formula
 * <a href="http://wiki.kerbalspaceprogram.com/wiki/Specific_impulse#Multiple_engines">described here</a>.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function vesselGetKerbinSeaLevelSpecificImpulse(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The moment of inertia of the vessel around its center of mass in <math>kg.m^2</math>.
 * The inertia values are around the pitch, roll and yaw directions respectively.
 * This corresponds to the vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetMomentOfInertia(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The inertia tensor of the vessel around its center of mass, in the vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * Returns the 3x3 matrix as a list of elements, in row-major order.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetInertiaTensor(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function vesselGetAvailableTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active and powered reaction wheels can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetAvailableReactionWheelTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active RCS thrusters can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetAvailableRcsTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum torque that the currently active and gimballed engines can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetAvailableEngineTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum torque that the aerodynamic control surfaces can generate.
 * Returns the torques in <math>N.m</math> around each of the coordinate axes of the
 * vessels reference frame (<see cref="M:SpaceCenter.Vessel.ReferenceFrame" />).
 * These axes are equivalent to the pitch, roll and yaw axes of the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetAvailableControlSurfaceTorque(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the vessel.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the vessel.</description></item><item><description>The x-axis points out to the right of the vessel.</description></item><item><description>The y-axis points in the forward direction of the vessel.</description></item><item><description>The z-axis points out of the bottom off the vessel.</description></item></list></summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function vesselGetOrbitalReferenceFrame(undefined) {
	//todo
}

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
 * @param {Object} this * @returns {Object}
*/function vesselGetSurfaceReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The reference frame that is fixed relative to the vessel, and orientated with the velocity
 * vector of the vessel relative to the surface of the body being orbited.
 * <list type="bullet"><item><description>The origin is at the center of mass of the vessel.</description></item><item><description>The axes rotate with the vessel's velocity vector.</description></item><item><description>The y-axis points in the direction of the vessel's velocity vector,
 * relative to the surface of the body being orbited.</description></item><item><description>The z-axis is in the plane of the
 * <a href="https://en.wikipedia.org/wiki/Horizon">astronomical horizon</a>.</description></item><item><description>The x-axis is orthogonal to the other two axes.</description></item></list></summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function vesselGetSurfaceVelocityReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Removes the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this
*/function waypointRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function waypointGetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Celestial body the waypoint is attached to.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function waypointSetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function waypointGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the waypoint as it appears on the map and the contract.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function waypointSetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The seed of the icon color. See <see cref="M:SpaceCenter.WaypointManager.Colors" /> for example colors.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function waypointGetIcon(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The icon of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function waypointSetIcon(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetLatitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The latitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetLatitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetLongitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The longitude of the waypoint.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetLongitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetMeanAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above sea level, in meters.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetMeanAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetSurfaceAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body or sea level, whichever is closer, in meters.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetSurfaceAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetBedrockAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The altitude of the waypoint above the surface of the body, in meters. When over water, this is the altitude above the sea floor.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function waypointSetBedrockAltitude(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * True if waypoint is a point near or on the body rather than high in orbit.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function waypointGetNearSurface(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * True if waypoint is actually glued to the ground.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function waypointGetGrounded(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The integer index of this waypoint amongst its cluster of sibling waypoints. 
 * In other words, when you have a cluster of waypoints called "Somewhere Alpha", "Somewhere Beta", and "Somewhere Gamma", 
 * then the alpha site has index 0, the beta site has index 1 and the gamma site has index 2. 
 * When <see cref="M:SpaceCenter.Waypoint.Clustered" /> is false, this value is zero but meaningless.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetIndex(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * True if this waypoint is part of a set of clustered waypoints with greek letter names appended (Alpha, Beta, Gamma, etc). 
 * If true, there is a one-to-one correspondence with the greek letter name and the <see cref="M:SpaceCenter.Waypoint.Index" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function waypointGetClustered(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the waypoint belongs to a contract.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function waypointGetHasContract(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The id of the associated contract.
 * Returns 0 if the waypoint does not belong to a contract.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function waypointGetContractId(undefined) {
	//todo
}

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
 * @param {Object} this
 * @param {number} latitude
 * @param {number} longitude
 * @param {Object} body
 * @param {string} name * @returns {Object}
*/function waypointManagerAddWaypoint(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all existing waypoints.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function waypointManagerGetWaypoints(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns all available icons (from "GameData/Squad/Contracts/Icons/").
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function waypointManagerGetIcons(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * An example map of known color - seed pairs. 
 * Any other integers may be used as seed.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function waypointManagerGetColors(undefined) {
	//todo
}
