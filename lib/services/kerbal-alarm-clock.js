'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor KerbalAlarmClock
 * @name KerbalAlarmClock
 * @description This service provides functionality to interact with
 * <a href="https://forum.kerbalspaceprogram.com/index.php?/topic/22809-13x-kerbal-alarm-clock-v3850-may-30/">Kerbal Alarm Clock</a>.
 * @result {void}
 * @returns {void}
 */

module.exports.classMaps = {
    "Alarm": {
        "Remove": "alarmRemove",
        "Action": {
            "get": "alarmGetAction",
            "set": "alarmSetAction"
        },
        "Margin": {
            "get": "alarmGetMargin",
            "set": "alarmSetMargin"
        },
        "Time": {
            "get": "alarmGetTime",
            "set": "alarmSetTime"
        },
        "Type": {
            "get": "alarmGetType"
        },
        "ID": {
            "get": "alarmGetId"
        },
        "Name": {
            "get": "alarmGetName",
            "set": "alarmSetName"
        },
        "Notes": {
            "get": "alarmGetNotes",
            "set": "alarmSetNotes"
        },
        "Remaining": {
            "get": "alarmGetRemaining"
        },
        "Repeat": {
            "get": "alarmGetRepeat",
            "set": "alarmSetRepeat"
        },
        "RepeatPeriod": {
            "get": "alarmGetRepeatPeriod",
            "set": "alarmSetRepeatPeriod"
        },
        "Vessel": {
            "get": "alarmGetVessel",
            "set": "alarmSetVessel"
        },
        "XferOriginBody": {
            "get": "alarmGetXferOriginBody",
            "set": "alarmSetXferOriginBody"
        },
        "XferTargetBody": {
            "get": "alarmGetXferTargetBody",
            "set": "alarmSetXferTargetBody"
        }
    }
}
/**
 * @augments KerbalAlarmClock
 * @description Get the alarm with the given {name}, or null
 * if no alarms have that name. If more than one alarm has the name,
 * only returns one of them.
 * @param {string} name - Name of the alarm to search for.
 * @result {Long} A long value representing the id for the KerbalAlarmClock.Alarm
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmWithName = function alarmWithName(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmWithName', encodedArguments),
        decode: {
            isObject: true,
            service: 'kerbalAlarmClock',
            type: 'Alarm',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Get a list of alarms of the specified {type}.
 * @param {Long} type - A long value representing the id for the KerbalAlarmClock.AlarmType
 * @result {Long[]} A list of long values representing the ids for the KerbalAlarmClock.Alarm
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmsWithType = function alarmsWithType(type) {
    let encodedArguments = [
        encoders.enum({
            0: 'Raw',
            1: 'Maneuver',
            2: 'ManeuverAuto',
            3: 'Apoapsis',
            4: 'Periapsis',
            5: 'AscendingNode',
            6: 'DescendingNode',
            7: 'Closest',
            8: 'Contract',
            9: 'ContractAuto',
            10: 'Crew',
            11: 'Distance',
            12: 'EarthTime',
            13: 'LaunchRendevous',
            14: 'SOIChange',
            15: 'SOIChangeAuto',
            16: 'Transfer',
            17: 'TransferModelled'
        })(type)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmsWithType', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                {
                    isObject: true,
                    service: 'kerbalAlarmClock',
                    type: 'Alarm',
                    decode: decoders.uInt64
                }
            ]
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Create a new alarm and return it.
 * @param {Long} type - A long value representing the id for the KerbalAlarmClock.AlarmType
 * @param {string} name - Name of the new alarm.
 * @param {number} ut - Time at which the new alarm should trigger.
 * @result {Long} A long value representing the id for the KerbalAlarmClock.Alarm
 * @returns {{call :Object, decode: function}}
 */
module.exports.createAlarm = function createAlarm(type, name, ut) {
    let encodedArguments = [
        encoders.enum({
            0: 'Raw',
            1: 'Maneuver',
            2: 'ManeuverAuto',
            3: 'Apoapsis',
            4: 'Periapsis',
            5: 'AscendingNode',
            6: 'DescendingNode',
            7: 'Closest',
            8: 'Contract',
            9: 'ContractAuto',
            10: 'Crew',
            11: 'Distance',
            12: 'EarthTime',
            13: 'LaunchRendevous',
            14: 'SOIChange',
            15: 'SOIChangeAuto',
            16: 'Transfer',
            17: 'TransferModelled'
        })(type),
        encoders.string(name),
        encoders.double(ut)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'CreateAlarm', encodedArguments),
        decode: {
            isObject: true,
            service: 'kerbalAlarmClock',
            type: 'Alarm',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Whether Kerbal Alarm Clock is available.
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getAvailable = function getAvailable() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'get_Available', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments KerbalAlarmClock
 * @description A list of all the alarms.
 * @result {Long[]} A list of long values representing the ids for the KerbalAlarmClock.Alarm
 * @returns {{call :Object, decode: function}}
 */
module.exports.getAlarms = function getAlarms() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'get_Alarms', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                {
                    isObject: true,
                    service: 'kerbalAlarmClock',
                    type: 'Alarm',
                    decode: decoders.uInt64
                }
            ]
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Removes the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {void}
 * @returns {void}
 */
module.exports.alarmRemove = function alarmRemove(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The action that the alarm triggers.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {Long} A long value representing the id for the KerbalAlarmClock.AlarmAction
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetAction = function alarmGetAction(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Action', encodedArguments),
        decode: decoders.enum({
            0: 'DoNothing',
            1: 'DoNothingDeleteWhenPassed',
            2: 'KillWarp',
            3: 'KillWarpOnly',
            4: 'MessageOnly',
            5: 'PauseGame'
        })
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The action that the alarm triggers.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {Long} value - A long value representing the id for the KerbalAlarmClock.AlarmAction
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetAction = function alarmSetAction(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.enum({
            0: 'DoNothing',
            1: 'DoNothingDeleteWhenPassed',
            2: 'KillWarp',
            3: 'KillWarpOnly',
            4: 'MessageOnly',
            5: 'PauseGame'
        })(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Action', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The number of seconds before the event that the alarm will fire.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetMargin = function alarmGetMargin(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Margin', encodedArguments),
        decode: decoders.double
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The number of seconds before the event that the alarm will fire.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetMargin = function alarmSetMargin(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Margin', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The time at which the alarm will fire.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetTime = function alarmGetTime(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Time', encodedArguments),
        decode: decoders.double
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The time at which the alarm will fire.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetTime = function alarmSetTime(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Time', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The type of the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {Long} A long value representing the id for the KerbalAlarmClock.AlarmType
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetType = function alarmGetType(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Type', encodedArguments),
        decode: decoders.enum({
            0: 'Raw',
            1: 'Maneuver',
            2: 'ManeuverAuto',
            3: 'Apoapsis',
            4: 'Periapsis',
            5: 'AscendingNode',
            6: 'DescendingNode',
            7: 'Closest',
            8: 'Contract',
            9: 'ContractAuto',
            10: 'Crew',
            11: 'Distance',
            12: 'EarthTime',
            13: 'LaunchRendevous',
            14: 'SOIChange',
            15: 'SOIChangeAuto',
            16: 'Transfer',
            17: 'TransferModelled'
        })
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The unique identifier for the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetId = function alarmGetId(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_ID', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The short name of the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetName = function alarmGetName(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Name', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The short name of the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetName = function alarmSetName(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Name', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The long description of the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetNotes = function alarmGetNotes(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Notes', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The long description of the alarm.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetNotes = function alarmSetNotes(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Notes', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The number of seconds until the alarm will fire.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetRemaining = function alarmGetRemaining(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Remaining', encodedArguments),
        decode: decoders.double
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Whether the alarm will be repeated after it has fired.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetRepeat = function alarmGetRepeat(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Repeat', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments KerbalAlarmClock
 * @description Whether the alarm will be repeated after it has fired.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetRepeat = function alarmSetRepeat(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Repeat', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The time delay to automatically create an alarm after it has fired.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetRepeatPeriod = function alarmGetRepeatPeriod(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_RepeatPeriod', encodedArguments),
        decode: decoders.double
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The time delay to automatically create an alarm after it has fired.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetRepeatPeriod = function alarmSetRepeatPeriod(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_RepeatPeriod', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The vessel that the alarm is attached to.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {Long} A long value representing the id for the SpaceCenter.Vessel
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetVessel = function alarmGetVessel(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Vessel', encodedArguments),
        decode: {
            isObject: true,
            service: 'spaceCenter',
            type: 'Vessel',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The vessel that the alarm is attached to.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetVessel = function alarmSetVessel(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Vessel', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The celestial body the vessel is departing from.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {Long} A long value representing the id for the SpaceCenter.CelestialBody
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetXferOriginBody = function alarmGetXferOriginBody(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferOriginBody', encodedArguments),
        decode: {
            isObject: true,
            service: 'spaceCenter',
            type: 'CelestialBody',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The celestial body the vessel is departing from.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetXferOriginBody = function alarmSetXferOriginBody(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_XferOriginBody', encodedArguments),
        decode: null
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The celestial body the vessel is arriving at.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @result {Long} A long value representing the id for the SpaceCenter.CelestialBody
 * @returns {{call :Object, decode: function}}
 */
module.exports.alarmGetXferTargetBody = function alarmGetXferTargetBody(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferTargetBody', encodedArguments),
        decode: {
            isObject: true,
            service: 'spaceCenter',
            type: 'CelestialBody',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KerbalAlarmClock
 * @description The celestial body the vessel is arriving at.
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody
 * @result {void}
 * @returns {void}
 */
module.exports.alarmSetXferTargetBody = function alarmSetXferTargetBody(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm),
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_XferTargetBody', encodedArguments),
        decode: null
    };
};
