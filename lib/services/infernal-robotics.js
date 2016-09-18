'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
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
 * @returns {InfernalRobotics.ServoGroup[]}
*/
module.exports.servoGroups = function servoGroups(vessel) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroups', vessel),
        decode: proto.krpc.schema.List
    };
};

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
module.exports.servoGroupWithName = function servoGroupWithName(vessel, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroupWithName', vessel, name),
        decode: proto.krpc.schema.Stream
    };
};

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
module.exports.servoWithName = function servoWithName(vessel, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoWithName', vessel, name),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoMoveRight = function servoMoveRight(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveRight', servo),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the left.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoMoveLeft = function servoMoveLeft(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveLeft', servo),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the center.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoMoveCenter = function servoMoveCenter(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveCenter', servo),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the next preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoMoveNextPreset = function servoMoveNextPreset(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveNextPreset', servo),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the previous preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoMovePrevPreset = function servoMovePrevPreset(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MovePrevPreset', servo),
        decode: null
    };
};

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
module.exports.servoMoveTo = function servoMoveTo(servo, position, speed) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveTo', servo, position, speed),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Stops the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
*/
module.exports.servoStop = function servoStop(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_Stop', servo),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {string}
*/
module.exports.servoGetName = function servoGetName(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Name', servo),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {string} value
*/
module.exports.servoSetName = function servoSetName(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Name', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The part containing the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {SpaceCenter.Part}
*/
module.exports.servoGetPart = function servoGetPart(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Part', servo),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servo should be highlighted in-game.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
module.exports.servoSetHighlight = function servoSetHighlight(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Highlight', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The position of the servo.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetPosition = function servoGetPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Position', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetMinConfigPosition = function servoGetMinConfigPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinConfigPosition', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetMaxConfigPosition = function servoGetMaxConfigPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxConfigPosition', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetMinPosition = function servoGetMinPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinPosition', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The minimum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
module.exports.servoSetMinPosition = function servoSetMinPosition(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MinPosition', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetMaxPosition = function servoGetMaxPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxPosition', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The maximum position of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
module.exports.servoSetMaxPosition = function servoSetMaxPosition(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MaxPosition', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the part configuration.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetConfigSpeed = function servoGetConfigSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_ConfigSpeed', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetSpeed = function servoGetSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Speed', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The speed multiplier of the servo, specified by the in-game tweak menu.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
module.exports.servoSetSpeed = function servoSetSpeed(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Speed', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetCurrentSpeed = function servoGetCurrentSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_CurrentSpeed', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The current speed at which the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
module.exports.servoSetCurrentSpeed = function servoSetCurrentSpeed(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_CurrentSpeed', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {number}
*/
module.exports.servoGetAcceleration = function servoGetAcceleration(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Acceleration', servo),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The current speed multiplier set in the UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {number} value
*/
module.exports.servoSetAcceleration = function servoSetAcceleration(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Acceleration', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servo is moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
module.exports.servoGetIsMoving = function servoGetIsMoving(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsMoving', servo),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servo is freely moving.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
module.exports.servoGetIsFreeMoving = function servoGetIsFreeMoving(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsFreeMoving', servo),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
module.exports.servoGetIsLocked = function servoGetIsLocked(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsLocked', servo),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servo is locked.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
module.exports.servoSetIsLocked = function servoSetIsLocked(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsLocked', servo, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @returns {boolean}
*/
module.exports.servoGetIsAxisInverted = function servoGetIsAxisInverted(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsAxisInverted', servo),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the servos axis is inverted.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @param {boolean} value
*/
module.exports.servoSetIsAxisInverted = function servoSetIsAxisInverted(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsAxisInverted', servo, value),
        decode: null
    };
};

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
module.exports.servoGroupServoWithName = function servoGroupServoWithName(servoGroup, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_ServoWithName', servoGroup, name),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupMoveRight = function servoGroupMoveRight(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveRight', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the left.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupMoveLeft = function servoGroupMoveLeft(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveLeft', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the center.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupMoveCenter = function servoGroupMoveCenter(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveCenter', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the next preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupMoveNextPreset = function servoGroupMoveNextPreset(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveNextPreset', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the previous preset.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupMovePrevPreset = function servoGroupMovePrevPreset(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MovePrevPreset', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Stops the servos in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
*/
module.exports.servoGroupStop = function servoGroupStop(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_Stop', servoGroup),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
module.exports.servoGroupGetName = function servoGroupGetName(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Name', servoGroup),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The name of the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
module.exports.servoGroupSetName = function servoGroupSetName(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Name', servoGroup, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
module.exports.servoGroupGetForwardKey = function servoGroupGetForwardKey(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ForwardKey', servoGroup),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "forward" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
module.exports.servoGroupSetForwardKey = function servoGroupSetForwardKey(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ForwardKey', servoGroup, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {string}
*/
module.exports.servoGroupGetReverseKey = function servoGroupGetReverseKey(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ReverseKey', servoGroup),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The key assigned to be the "reverse" key for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {string} value
*/
module.exports.servoGroupSetReverseKey = function servoGroupSetReverseKey(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ReverseKey', servoGroup, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {number}
*/
module.exports.servoGroupGetSpeed = function servoGroupGetSpeed(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Speed', servoGroup),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * The speed multiplier for the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {number} value
*/
module.exports.servoGroupSetSpeed = function servoGroupSetSpeed(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Speed', servoGroup, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {boolean}
*/
module.exports.servoGroupGetExpanded = function servoGroupGetExpanded(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Expanded', servoGroup),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the group is expanded in the InfernalRobotics UI.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @param {boolean} value
*/
module.exports.servoGroupSetExpanded = function servoGroupSetExpanded(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Expanded', servoGroup, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The servos that are in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {InfernalRobotics.Servo[]}
*/
module.exports.servoGroupGetServos = function servoGroupGetServos(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Servos', servoGroup),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The parts containing the servos in the group.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @returns {SpaceCenter.Part[]}
*/
module.exports.servoGroupGetParts = function servoGroupGetParts(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Parts', servoGroup),
        decode: proto.krpc.schema.List
    };
};
