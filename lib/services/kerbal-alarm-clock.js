'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/">Kerbal Alarm Clock</a>.
 * </summary>
 * </doc>
 * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Get the alarm with the given <paramref name="name" />, or <c>null</c>
 * if no alarms have that name. If more than one alarm has the name,
 * only returns one of them.
 * </summary>
 *   <param name="name">Name of the alarm to search for.</param>
 * </doc>
 * @param {string} name 
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmWithName = function alarmWithName(name) {
    let encodedArguments = [
        encoders.string(name)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmWithName', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Get a list of alarms of the specified <paramref name="type" />.
 * </summary>
 *   <param name="type">Type of alarm to return.</param>
 * </doc>
 * @param {Long} type 
 * @result {Long[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmsWithType = function alarmsWithType(type) {
    let encodedArguments = [
        encoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'})(type)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmsWithType', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Create a new alarm and return it.
 * </summary>
 *   <param name="type">Type of the new alarm.</param>
 *   <param name="name">Name of the new alarm.</param>
 *   <param name="ut">Time at which the new alarm should trigger.</param>
 * </doc>
 * @param {Long} type 
 * @param {string} name 
 * @param {number} ut 
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.createAlarm = function createAlarm(type, name, ut) {
    let encodedArguments = [
        encoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'})(type), 
        encoders.string(name), 
        encoders.double(ut)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'CreateAlarm', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all the alarms.
 * </summary>
 * </doc> * @result {Long[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getAlarms = function getAlarms() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'get_Alarms', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetAction = function alarmGetAction(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Action', encodedArguments),
        decode: decoders.enum({0 : 'DoNothing', 1 : 'DoNothingDeleteWhenPassed', 2 : 'KillWarp', 3 : 'KillWarpOnly', 4 : 'MessageOnly', 5 : 'PauseGame'})
    };
};

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value 
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetAction = function alarmSetAction(alarm, value) {
    let encodedArguments = [
        encoders.uInt64(alarm), 
        encoders.enum({0 : 'DoNothing', 1 : 'DoNothingDeleteWhenPassed', 2 : 'KillWarp', 3 : 'KillWarpOnly', 4 : 'MessageOnly', 5 : 'PauseGame'})(value)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Action', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The type of the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetType = function alarmGetType(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Type', encodedArguments),
        decode: decoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'})
    };
};

/**
 * <doc>
 *   <summary>
 * The unique identifier for the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The number of seconds until the alarm will fire.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetVessel = function alarmGetVessel(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Vessel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.Vessel see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetXferOriginBody = function alarmGetXferOriginBody(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferOriginBody', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
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
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetXferTargetBody = function alarmGetXferTargetBody(alarm) {
    let encodedArguments = [
        encoders.uInt64(alarm)
    ];
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferTargetBody', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {Long} alarm - A long value representing the id for the KerbalAlarmClock.Alarm see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.CelestialBody see [Long.js]{@link https://www.npmjs.com/package/long}
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
