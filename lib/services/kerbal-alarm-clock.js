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
 * </doc> * @result {void}
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
 * @result {KerbalAlarmClock.Alarm}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmWithName = function alarmWithName(name) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmWithName', name),
        encode: [encoders.string],
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
 * @param {KerbalAlarmClock.AlarmType} type
 * @result {KerbalAlarmClock.Alarm[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmsWithType = function alarmsWithType(type) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'AlarmsWithType', type),
        encode: [decoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'})],
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
 * @param {KerbalAlarmClock.AlarmType} type
 * @param {string} name
 * @param {number} ut
 * @result {KerbalAlarmClock.Alarm}
 * @returns {{call :Object, decode: function}}
*/
module.exports.createAlarm = function createAlarm(type, name, ut) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'CreateAlarm', type, name, ut),
        encode: [decoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'}), encoders.string, encoders.double],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all the alarms.
 * </summary>
 * </doc> * @result {KerbalAlarmClock.Alarm[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getAlarms = function getAlarms() {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'get_Alarms'),
        encode: [],
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Removes the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {void}
 * @returns {void}
*/
module.exports.alarmRemove = function alarmRemove(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_Remove', alarm),
        encode: [encoders.uInt64],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {KerbalAlarmClock.AlarmAction}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetAction = function alarmGetAction(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Action', alarm),
        encode: [encoders.uInt64],
        decode: decoders.enum({0 : 'DoNothing', 1 : 'DoNothingDeleteWhenPassed', 2 : 'KillWarp', 3 : 'KillWarpOnly', 4 : 'MessageOnly', 5 : 'PauseGame'})
    };
};

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {KerbalAlarmClock.AlarmAction} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetAction = function alarmSetAction(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Action', alarm, value),
        encode: [encoders.uInt64, decoders.enum({0 : 'DoNothing', 1 : 'DoNothingDeleteWhenPassed', 2 : 'KillWarp', 3 : 'KillWarpOnly', 4 : 'MessageOnly', 5 : 'PauseGame'})],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetMargin = function alarmGetMargin(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Margin', alarm),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetMargin = function alarmSetMargin(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Margin', alarm, value),
        encode: [encoders.uInt64, encoders.double],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetTime = function alarmGetTime(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Time', alarm),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetTime = function alarmSetTime(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Time', alarm, value),
        encode: [encoders.uInt64, encoders.double],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The type of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {KerbalAlarmClock.AlarmType}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetType = function alarmGetType(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Type', alarm),
        encode: [encoders.uInt64],
        decode: decoders.enum({0 : 'Raw', 1 : 'Maneuver', 2 : 'ManeuverAuto', 3 : 'Apoapsis', 4 : 'Periapsis', 5 : 'AscendingNode', 6 : 'DescendingNode', 7 : 'Closest', 8 : 'Contract', 9 : 'ContractAuto', 10 : 'Crew', 11 : 'Distance', 12 : 'EarthTime', 13 : 'LaunchRendevous', 14 : 'SOIChange', 15 : 'SOIChangeAuto', 16 : 'Transfer', 17 : 'TransferModelled'})
    };
};

/**
 * <doc>
 *   <summary>
 * The unique identifier for the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetId = function alarmGetId(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_ID', alarm),
        encode: [encoders.uInt64],
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetName = function alarmGetName(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Name', alarm),
        encode: [encoders.uInt64],
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetName = function alarmSetName(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Name', alarm, value),
        encode: [encoders.uInt64, encoders.string],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetNotes = function alarmGetNotes(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Notes', alarm),
        encode: [encoders.uInt64],
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetNotes = function alarmSetNotes(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Notes', alarm, value),
        encode: [encoders.uInt64, encoders.string],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The number of seconds until the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetRemaining = function alarmGetRemaining(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Remaining', alarm),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetRepeat = function alarmGetRepeat(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Repeat', alarm),
        encode: [encoders.uInt64],
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetRepeat = function alarmSetRepeat(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Repeat', alarm, value),
        encode: [encoders.uInt64, encoders.bool],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetRepeatPeriod = function alarmGetRepeatPeriod(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_RepeatPeriod', alarm),
        encode: [encoders.uInt64],
        decode: decoders.double
    };
};

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetRepeatPeriod = function alarmSetRepeatPeriod(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_RepeatPeriod', alarm, value),
        encode: [encoders.uInt64, encoders.double],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {SpaceCenter.Vessel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetVessel = function alarmGetVessel(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_Vessel', alarm),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.Vessel} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetVessel = function alarmSetVessel(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_Vessel', alarm, value),
        encode: [encoders.uInt64, encoders.uInt64],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetXferOriginBody = function alarmGetXferOriginBody(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferOriginBody', alarm),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetXferOriginBody = function alarmSetXferOriginBody(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_XferOriginBody', alarm, value),
        encode: [encoders.uInt64, encoders.uInt64],
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @result {SpaceCenter.CelestialBody}
 * @returns {{call :Object, decode: function}}
*/
module.exports.alarmGetXferTargetBody = function alarmGetXferTargetBody(alarm) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_get_XferTargetBody', alarm),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.CelestialBody} value
 * @result {void}
 * @returns {void}
*/
module.exports.alarmSetXferTargetBody = function alarmSetXferTargetBody(alarm, value) {
    return {
        call: buildProcedureCall('KerbalAlarmClock', 'Alarm_set_XferTargetBody', alarm, value),
        encode: [encoders.uInt64, encoders.uInt64],
        decode: null
    };
};
