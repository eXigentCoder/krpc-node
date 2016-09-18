/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214/">Infernal Robotics</a>.
 * </summary>
 * </doc>*/


/**
 * <doc>
 *   <summary>
 * A list of all the servo groups in the given <paramref name="vessel" />.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @returns {Object}
*/
function servoGroups(vessel) {
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {string} name
 * @returns {InfernalRobotics.ServoGroup}
*/
function servoGroupWithName(vessel, name) {
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
 * @param {SpaceCenter.Vessel} vessel
 * @param {string} name
 * @returns {InfernalRobotics.Servo}
*/
function servoWithName(vessel, name) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoMoveRight(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the left.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoMoveLeft(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the center.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoMoveCenter(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the next preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoMoveNextPreset(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves the servo to the previous preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoMovePrevPreset(this) {
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
 * @param {InfernalRobotics.Servo} servo
 * @param {number} position
 * @param {number} speed
*/
function servoMoveTo(this, position, speed) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Stops the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
function servoStop(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {string}
*/
function servoGetName(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {string} value
*/
function servoSetName(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The part containing the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {SpaceCenter.Part}
*/
function servoGetPart(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo should be highlighted in-game.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
function servoSetHighlight(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The position of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetMinConfigPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetMaxConfigPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetMinPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
function servoSetMinPosition(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetMaxPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
function servoSetMaxPosition(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetConfigSpeed(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetSpeed(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
function servoSetSpeed(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetCurrentSpeed(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
function servoSetCurrentSpeed(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
function servoGetAcceleration(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
function servoSetAcceleration(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
function servoGetIsMoving(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is freely moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
function servoGetIsFreeMoving(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
function servoGetIsLocked(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
function servoSetIsLocked(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
function servoGetIsAxisInverted(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
function servoSetIsAxisInverted(this, value) {
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
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} name
 * @returns {InfernalRobotics.Servo}
*/
function servoGroupServoWithName(this, name) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupMoveRight(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the left.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupMoveLeft(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the center.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupMoveCenter(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the next preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupMoveNextPreset(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the previous preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupMovePrevPreset(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Stops the servos in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
function servoGroupStop(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
function servoGroupGetName(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
function servoGroupSetName(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
function servoGroupGetForwardKey(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
function servoGroupSetForwardKey(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
function servoGroupGetReverseKey(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
function servoGroupSetReverseKey(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {number}
*/
function servoGroupGetSpeed(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {number} value
*/
function servoGroupSetSpeed(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {boolean}
*/
function servoGroupGetExpanded(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {boolean} value
*/
function servoGroupSetExpanded(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The servos that are in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {Object}
*/
function servoGroupGetServos(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The parts containing the servos in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {Object}
*/
function servoGroupGetParts(this) {
	//todo
}
