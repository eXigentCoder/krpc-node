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
 * @param {string} name * @returns {Object}
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
 * @param {Object} type * @returns {Object}
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
 * @param {Object} type
 * @param {string} name
 * @param {number} ut * @returns {Object}
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
 * @param {Object} this*/
function alarmRemove(this) {
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
function alarmGetAction(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The action that the alarm triggers.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value*/
function alarmSetAction(this, value) {
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
function alarmGetMargin(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The number of seconds before the event that the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value*/
function alarmSetMargin(this, value) {
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
function alarmGetTime(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time at which the alarm will fire.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value*/
function alarmSetTime(this, value) {
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
function alarmGetType(this) {
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
function alarmGetId(this) {
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
function alarmGetName(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The short name of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value*/
function alarmSetName(this, value) {
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
function alarmGetNotes(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The long description of the alarm.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value*/
function alarmSetNotes(this, value) {
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
function alarmGetRemaining(this) {
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
function alarmGetRepeat(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the alarm will be repeated after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value*/
function alarmSetRepeat(this, value) {
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
function alarmGetRepeatPeriod(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The time delay to automatically create an alarm after it has fired.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value*/
function alarmSetRepeatPeriod(this, value) {
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
function alarmGetVessel(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel that the alarm is attached to.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value*/
function alarmSetVessel(this, value) {
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
function alarmGetXferOriginBody(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is departing from.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value*/
function alarmSetXferOriginBody(this, value) {
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
function alarmGetXferTargetBody(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the vessel is arriving at.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value*/
function alarmSetXferTargetBody(this, value) {
	//todo
}
