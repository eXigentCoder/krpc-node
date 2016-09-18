/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214/">Infernal Robotics</a>.
 * </summary>
 * </doc>
*/


/**
 * <doc>
 *   <summary>
 * A list of all the servo groups in the given <paramref name="vessel" />.
 * </summary>
 * </doc>
 * @param {Object} vessel * @returns {Object}

*/
function servoGroups(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the servo group in the given <paramref name="vessel" /> with the given <paramref name="name" />,
 * or <c>null</c> if none exists. If multiple servo groups have the same name, only one of them is returned.
 * </summary>
 *   <param name="vessel">Vessel to check.</param>
 *   <param name="name">Name of servo group to find.</param>
 * </doc>
 * @param {Object} vessel
 * @param {string} name * @returns {Object}

*/
function servoGroupWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the servo in the given <paramref name="vessel" /> with the given <paramref name="name" /> or
 * <c>null</c> if none exists. If multiple servos have the same name, only one of them is returned.
 * </summary>
 *   <param name="vessel">Vessel to check.</param>
 *   <param name="name">Name of the servo to find.</param>
 * </doc>
 * @param {Object} vessel
 * @param {string} name * @returns {Object}

*/
function servoWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the right.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoMoveRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the left.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoMoveLeft(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the center.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoMoveCenter(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the next preset.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoMoveNextPreset(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the previous preset.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoMovePrevPreset(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to <paramref name="position" /> and sets the
 * speed multiplier to <paramref name="speed" />.
 * </summary>
 *   <param name="position">The position to move the servo to.</param>
 *   <param name="speed">Speed multiplier for the movement.</param>
 * </doc>
 * @param {Object} this
 * @param {number} position
 * @param {number} speed
*/
function servoMoveTo(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Stops the servo.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoStop(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function servoGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function servoSetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part containing the servo.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function servoGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo should be highlighted in-game.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function servoSetHighlight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position of the servo.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetMinConfigPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetMaxConfigPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetMinPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoSetMinPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetMaxPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoSetMaxPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetConfigSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoSetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetCurrentSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoSetCurrentSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGetAcceleration(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoSetAcceleration(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is moving.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function servoGetIsMoving(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is freely moving.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function servoGetIsFreeMoving(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function servoGetIsLocked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function servoSetIsLocked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function servoGetIsAxisInverted(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function servoSetIsAxisInverted(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns the servo with the given <paramref name="name" /> from this group,
 * or <c>null</c> if none exists.
 * </summary>
 *   <param name="name">Name of servo to find.</param>
 * </doc>
 * @param {Object} this
 * @param {string} name * @returns {Object}

*/
function servoGroupServoWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the right.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupMoveRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the left.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupMoveLeft(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the center.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupMoveCenter(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the next preset.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupMoveNextPreset(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the previous preset.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupMovePrevPreset(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Stops the servos in the group.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function servoGroupStop(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function servoGroupGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function servoGroupSetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function servoGroupGetForwardKey(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function servoGroupSetForwardKey(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function servoGroupGetReverseKey(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function servoGroupSetReverseKey(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function servoGroupGetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function servoGroupSetSpeed(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function servoGroupGetExpanded(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function servoGroupSetExpanded(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The servos that are in the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function servoGroupGetServos(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts containing the servos in the group.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function servoGroupGetParts(undefined) {
	//todo
}
