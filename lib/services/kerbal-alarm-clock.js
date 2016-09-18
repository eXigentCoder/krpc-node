/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/">Kerbal Alarm Clock</a>.
 * </summary>
 * </doc>*/


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
 * @returns {KerbalAlarmClock.Alarm}
*/
function alarmWithName(name) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get a list of alarms of the specified <paramref name="type" />.
 * </summary>
 *   <param name="type">Type of alarm to return.</param>
 * </doc>
 * @param {KerbalAlarmClock.AlarmType} type
 * @returns {Object}
*/
function alarmsWithType(type) {
	//todo
}

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
 * @returns {KerbalAlarmClock.Alarm}
*/
function createAlarm(type, name, ut) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all the alarms.
 * </summary>
 * </doc> * @returns {Object}
*/
function getAlarms() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Removes the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
*/
function alarmRemove(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {KerbalAlarmClock.AlarmAction}
*/
function alarmGetAction(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {KerbalAlarmClock.AlarmAction} value
*/
function alarmSetAction(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {number}
*/
function alarmGetMargin(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
*/
function alarmSetMargin(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {number}
*/
function alarmGetTime(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
*/
function alarmSetTime(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The type of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {KerbalAlarmClock.AlarmType}
*/
function alarmGetType(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unique identifier for the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {string}
*/
function alarmGetId(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {string}
*/
function alarmGetName(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {string} value
*/
function alarmSetName(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {string}
*/
function alarmGetNotes(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {string} value
*/
function alarmSetNotes(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds until the alarm will fire.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {number}
*/
function alarmGetRemaining(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {boolean}
*/
function alarmGetRepeat(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {boolean} value
*/
function alarmSetRepeat(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {number}
*/
function alarmGetRepeatPeriod(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {number} value
*/
function alarmSetRepeatPeriod(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {SpaceCenter.Vessel}
*/
function alarmGetVessel(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.Vessel} value
*/
function alarmSetVessel(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {SpaceCenter.CelestialBody}
*/
function alarmGetXferOriginBody(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.CelestialBody} value
*/
function alarmSetXferOriginBody(alarm, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @returns {SpaceCenter.CelestialBody}
*/
function alarmGetXferTargetBody(alarm) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {KerbalAlarmClock.Alarm} alarm
 * @param {SpaceCenter.CelestialBody} value
*/
function alarmSetXferTargetBody(alarm, value) {
	//todo
}
