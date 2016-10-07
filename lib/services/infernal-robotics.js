'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214/">Infernal Robotics</a>.
 * </summary>
 * </doc> * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * A list of all the servo groups in the given <paramref name="vessel" />.
 * </summary>
 * </doc>
 * @param {SpaceCenter.Vessel} vessel
 * @result {InfernalRobotics.ServoGroup[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroups = function servoGroups(vessel) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroups', vessel),
        encode: [encoders.uInt64],
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
 * @result {InfernalRobotics.ServoGroup}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupWithName = function servoGroupWithName(vessel, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroupWithName', vessel, name),
        encode: [encoders.uInt64, encoders.string],
        decode: decoders.uInt64
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
 * @result {InfernalRobotics.Servo}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoWithName = function servoWithName(vessel, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoWithName', vessel, name),
        encode: [encoders.uInt64, encoders.string],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Moves the servo to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.Servo} servo
 * @result {void}
 * @returns {void}
*/
module.exports.servoMoveRight = function servoMoveRight(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveRight', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoMoveLeft = function servoMoveLeft(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveLeft', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoMoveCenter = function servoMoveCenter(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveCenter', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoMoveNextPreset = function servoMoveNextPreset(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveNextPreset', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoMovePrevPreset = function servoMovePrevPreset(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MovePrevPreset', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoMoveTo = function servoMoveTo(servo, position, speed) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveTo', servo, position, speed),
        encode: [encoders.uInt64, encoders.float, encoders.float],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoStop = function servoStop(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_Stop', servo),
        encode: [encoders.uInt64],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetName = function servoGetName(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Name', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetName = function servoSetName(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Name', servo, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {SpaceCenter.Part}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetPart = function servoGetPart(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Part', servo),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetHighlight = function servoSetHighlight(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Highlight', servo, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetPosition = function servoGetPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Position', servo),
        encode: [encoders.uInt64],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetMinConfigPosition = function servoGetMinConfigPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinConfigPosition', servo),
        encode: [encoders.uInt64],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetMaxConfigPosition = function servoGetMaxConfigPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxConfigPosition', servo),
        encode: [encoders.uInt64],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetMinPosition = function servoGetMinPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinPosition', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetMinPosition = function servoSetMinPosition(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MinPosition', servo, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetMaxPosition = function servoGetMaxPosition(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxPosition', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetMaxPosition = function servoSetMaxPosition(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MaxPosition', servo, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetConfigSpeed = function servoGetConfigSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_ConfigSpeed', servo),
        encode: [encoders.uInt64],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetSpeed = function servoGetSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Speed', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetSpeed = function servoSetSpeed(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Speed', servo, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetCurrentSpeed = function servoGetCurrentSpeed(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_CurrentSpeed', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetCurrentSpeed = function servoSetCurrentSpeed(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_CurrentSpeed', servo, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetAcceleration = function servoGetAcceleration(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Acceleration', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetAcceleration = function servoSetAcceleration(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Acceleration', servo, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetIsMoving = function servoGetIsMoving(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsMoving', servo),
        encode: [encoders.uInt64],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetIsFreeMoving = function servoGetIsFreeMoving(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsFreeMoving', servo),
        encode: [encoders.uInt64],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetIsLocked = function servoGetIsLocked(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsLocked', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetIsLocked = function servoSetIsLocked(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsLocked', servo, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGetIsAxisInverted = function servoGetIsAxisInverted(servo) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsAxisInverted', servo),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoSetIsAxisInverted = function servoSetIsAxisInverted(servo, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsAxisInverted', servo, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {InfernalRobotics.Servo}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupServoWithName = function servoGroupServoWithName(servoGroup, name) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_ServoWithName', servoGroup, name),
        encode: [encoders.uInt64, encoders.string],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Moves all of the servos in the group to the right.
 * </summary>
 * </doc>
 * @param {InfernalRobotics.ServoGroup} servoGroup
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupMoveRight = function servoGroupMoveRight(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveRight', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupMoveLeft = function servoGroupMoveLeft(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveLeft', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupMoveCenter = function servoGroupMoveCenter(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveCenter', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupMoveNextPreset = function servoGroupMoveNextPreset(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveNextPreset', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupMovePrevPreset = function servoGroupMovePrevPreset(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MovePrevPreset', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupStop = function servoGroupStop(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_Stop', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetName = function servoGroupGetName(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Name', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupSetName = function servoGroupSetName(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Name', servoGroup, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetForwardKey = function servoGroupGetForwardKey(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ForwardKey', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupSetForwardKey = function servoGroupSetForwardKey(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ForwardKey', servoGroup, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetReverseKey = function servoGroupGetReverseKey(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ReverseKey', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupSetReverseKey = function servoGroupSetReverseKey(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ReverseKey', servoGroup, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetSpeed = function servoGroupGetSpeed(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Speed', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupSetSpeed = function servoGroupSetSpeed(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Speed', servoGroup, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetExpanded = function servoGroupGetExpanded(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Expanded', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.servoGroupSetExpanded = function servoGroupSetExpanded(servoGroup, value) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Expanded', servoGroup, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {InfernalRobotics.Servo[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetServos = function servoGroupGetServos(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Servos', servoGroup),
        encode: [encoders.uInt64],
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
 * @result {SpaceCenter.Part[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.servoGroupGetParts = function servoGroupGetParts(servoGroup) {
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Parts', servoGroup),
        encode: [encoders.uInt64],
        decode: proto.krpc.schema.List
    };
};
