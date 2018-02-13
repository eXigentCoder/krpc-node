'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor InfernalRobotics
 * @name InfernalRobotics
 * @description This service provides functionality to interact with
 * <a href="https://forum.kerbalspaceprogram.com/index.php?/topic/104535-112-magic-smoke-industries-infernal-robotics-202/">Infernal Robotics</a>.
 * @result {void}
 * @returns {void}
 */


/**
 * @augments InfernalRobotics
 * @description A list of all the servo groups in the given {vessel}.
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel
 * @result {Long[]} A list of long values representing the ids for the InfernalRobotics.ServoGroup
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroups = function servoGroups(vessel) {
    let encodedArguments = [
        encoders.uInt64(vessel)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroups', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                decoders.uInt64
            ]
        }
    };
};

/**
 * @augments InfernalRobotics
 * @description Returns the servo group in the given {vessel} with the given {name},
 * or null if none exists. If multiple servo groups have the same name, only one of them is returned.
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel
 * @param {string} name - Name of servo group to find.
 * @result {Long} A long value representing the id for the InfernalRobotics.ServoGroup
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupWithName = function servoGroupWithName(vessel, name) {
    let encodedArguments = [
        encoders.uInt64(vessel),
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroupWithName', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments InfernalRobotics
 * @description Returns the servo in the given {vessel} with the given {name} or
 * null if none exists. If multiple servos have the same name, only one of them is returned.
 * @param {Long} vessel - A long value representing the id for the SpaceCenter.Vessel
 * @param {string} name - Name of the servo to find.
 * @result {Long} A long value representing the id for the InfernalRobotics.Servo
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoWithName = function servoWithName(vessel, name) {
    let encodedArguments = [
        encoders.uInt64(vessel),
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoWithName', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether Infernal Robotics is installed.
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getAvailable = function getAvailable() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('InfernalRobotics', 'get_Available', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to the right.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoMoveRight = function servoMoveRight(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveRight', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to the left.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoMoveLeft = function servoMoveLeft(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveLeft', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to the center.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoMoveCenter = function servoMoveCenter(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveCenter', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to the next preset.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoMoveNextPreset = function servoMoveNextPreset(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveNextPreset', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to the previous preset.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoMovePrevPreset = function servoMovePrevPreset(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MovePrevPreset', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves the servo to {position} and sets the
 * speed multiplier to {speed}.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} position - The position to move the servo to.
 * @param {number} speed - Speed multiplier for the movement.
 * @result {void}
 * @returns {void}
 */
module.exports.servoMoveTo = function servoMoveTo(servo, position, speed) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(position),
        encoders.float(speed)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_MoveTo', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Stops the servo.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {void}
 * @returns {void}
 */
module.exports.servoStop = function servoStop(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_Stop', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The name of the servo.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetName = function servoGetName(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments InfernalRobotics
 * @description The name of the servo.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetName = function servoSetName(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Name', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The part containing the servo.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {Long} A long value representing the id for the SpaceCenter.Part
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetPart = function servoGetPart(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Part', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servo should be highlighted in-game.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetHighlight = function servoSetHighlight(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Highlight', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The position of the servo.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetPosition = function servoGetPosition(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Position', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The minimum position of the servo, specified by the part configuration.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetMinConfigPosition = function servoGetMinConfigPosition(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinConfigPosition', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The maximum position of the servo, specified by the part configuration.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetMaxConfigPosition = function servoGetMaxConfigPosition(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxConfigPosition', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The minimum position of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetMinPosition = function servoGetMinPosition(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MinPosition', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The minimum position of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetMinPosition = function servoSetMinPosition(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MinPosition', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The maximum position of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetMaxPosition = function servoGetMaxPosition(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_MaxPosition', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The maximum position of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetMaxPosition = function servoSetMaxPosition(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_MaxPosition', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The speed multiplier of the servo, specified by the part configuration.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetConfigSpeed = function servoGetConfigSpeed(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_ConfigSpeed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The speed multiplier of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetSpeed = function servoGetSpeed(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Speed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The speed multiplier of the servo, specified by the in-game tweak menu.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetSpeed = function servoSetSpeed(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Speed', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The current speed at which the servo is moving.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetCurrentSpeed = function servoGetCurrentSpeed(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_CurrentSpeed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The current speed at which the servo is moving.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetCurrentSpeed = function servoSetCurrentSpeed(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_CurrentSpeed', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The current speed multiplier set in the UI.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetAcceleration = function servoGetAcceleration(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_Acceleration', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The current speed multiplier set in the UI.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetAcceleration = function servoSetAcceleration(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_Acceleration', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servo is moving.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetIsMoving = function servoGetIsMoving(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsMoving', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servo is freely moving.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetIsFreeMoving = function servoGetIsFreeMoving(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsFreeMoving', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servo is locked.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetIsLocked = function servoGetIsLocked(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsLocked', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servo is locked.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetIsLocked = function servoSetIsLocked(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsLocked', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servos axis is inverted.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGetIsAxisInverted = function servoGetIsAxisInverted(servo) {
    let encodedArguments = [
        encoders.uInt64(servo)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_get_IsAxisInverted', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the servos axis is inverted.
 * @param {Long} servo - A long value representing the id for the InfernalRobotics.Servo
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoSetIsAxisInverted = function servoSetIsAxisInverted(servo, value) {
    let encodedArguments = [
        encoders.uInt64(servo),
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'Servo_set_IsAxisInverted', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Returns the servo with the given {name} from this group,
 * or null if none exists.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {string} name - Name of servo to find.
 * @result {Long} A long value representing the id for the InfernalRobotics.Servo
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupServoWithName = function servoGroupServoWithName(servoGroup, name) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_ServoWithName', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves all of the servos in the group to the right.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupMoveRight = function servoGroupMoveRight(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveRight', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves all of the servos in the group to the left.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupMoveLeft = function servoGroupMoveLeft(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveLeft', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves all of the servos in the group to the center.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupMoveCenter = function servoGroupMoveCenter(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveCenter', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves all of the servos in the group to the next preset.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupMoveNextPreset = function servoGroupMoveNextPreset(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MoveNextPreset', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Moves all of the servos in the group to the previous preset.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupMovePrevPreset = function servoGroupMovePrevPreset(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_MovePrevPreset', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Stops the servos in the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupStop = function servoGroupStop(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_Stop', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The name of the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetName = function servoGroupGetName(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments InfernalRobotics
 * @description The name of the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupSetName = function servoGroupSetName(servoGroup, value) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Name', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The key assigned to be the "forward" key for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetForwardKey = function servoGroupGetForwardKey(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ForwardKey', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments InfernalRobotics
 * @description The key assigned to be the "forward" key for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupSetForwardKey = function servoGroupSetForwardKey(servoGroup, value) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ForwardKey', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The key assigned to be the "reverse" key for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetReverseKey = function servoGroupGetReverseKey(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_ReverseKey', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments InfernalRobotics
 * @description The key assigned to be the "reverse" key for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupSetReverseKey = function servoGroupSetReverseKey(servoGroup, value) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_ReverseKey', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The speed multiplier for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetSpeed = function servoGroupGetSpeed(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Speed', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments InfernalRobotics
 * @description The speed multiplier for the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupSetSpeed = function servoGroupSetSpeed(servoGroup, value) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Speed', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the group is expanded in the InfernalRobotics UI.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetExpanded = function servoGroupGetExpanded(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Expanded', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments InfernalRobotics
 * @description Whether the group is expanded in the InfernalRobotics UI.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.servoGroupSetExpanded = function servoGroupSetExpanded(servoGroup, value) {
    let encodedArguments = [
        encoders.uInt64(servoGroup),
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_set_Expanded', encodedArguments),
        decode: null
    };
};

/**
 * @augments InfernalRobotics
 * @description The servos that are in the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {Long[]} A list of long values representing the ids for the InfernalRobotics.Servo
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetServos = function servoGroupGetServos(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Servos', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                decoders.uInt64
            ]
        }
    };
};

/**
 * @augments InfernalRobotics
 * @description The parts containing the servos in the group.
 * @param {Long} servoGroup - A long value representing the id for the InfernalRobotics.ServoGroup
 * @result {Long[]} A list of long values representing the ids for the SpaceCenter.Part
 * @returns {{call :Object, decode: function}}
 */
module.exports.servoGroupGetParts = function servoGroupGetParts(servoGroup) {
    let encodedArguments = [
        encoders.uInt64(servoGroup)
    ];
    return {
        call: buildProcedureCall('InfernalRobotics', 'ServoGroup_get_Parts', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                decoders.uInt64
            ]
        }
    };
};
