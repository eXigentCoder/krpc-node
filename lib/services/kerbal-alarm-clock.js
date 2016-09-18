/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/">Kerbal Alarm Clock</a>.
 * </summary>
 * </doc>
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
 * @param {string} name * @returns {Object}

*/
function alarmWithName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get a list of alarms of the specified <paramref name="type" />.
 * </summary>
 *   <param name="type">Type of alarm to return.</param>
 * </doc>
 * @param {Object} type * @returns {Object}

*/
function alarmsWithType(undefined) {
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
 * @param {Object} type
 * @param {string} name
 * @param {number} ut * @returns {Object}

*/
function createAlarm(undefined) {
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
 * @param {Object} this
*/
function alarmRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function alarmGetAction(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function alarmSetAction(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function alarmGetMargin(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function alarmSetMargin(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function alarmGetTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function alarmSetTime(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The type of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function alarmGetType(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The unique identifier for the alarm.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function alarmGetId(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function alarmGetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function alarmSetName(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function alarmGetNotes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function alarmSetNotes(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds until the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function alarmGetRemaining(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function alarmGetRepeat(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function alarmSetRepeat(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function alarmGetRepeatPeriod(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function alarmSetRepeatPeriod(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function alarmGetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function alarmSetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function alarmGetXferOriginBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function alarmSetXferOriginBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function alarmGetXferTargetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function alarmSetXferTargetBody(undefined) {
	//todo
}
