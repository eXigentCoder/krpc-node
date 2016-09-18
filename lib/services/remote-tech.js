/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
 * </summary>
 * </doc>
*/


/**
 * <doc>
 *   <summary>
 * Get a communications object, representing the communication capability of a particular vessel.
 * </summary>
 * </doc>
 * @param {Object} vessel * @returns {Object}

*/
function comms(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the antenna object for a particular part.
 * </summary>
 * </doc>
 * @param {Object} part * @returns {Object}

*/
function antenna(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The names of the ground stations.
 * </summary>
 * </doc> * @returns {Object}

*/
function getGroundStations() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the part containing this antenna.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function antennaGetPart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function antennaGetHasConnection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The object that the antenna is targetting.
 * This property can be used to set the target to <see cref="M:RemoteTech.Target.None" /> or <see cref="M:RemoteTech.Target.ActiveVessel" />.
 * To set the target to a celestial body, ground station or vessel see <see cref="M:RemoteTech.Antenna.TargetBody" />,
 * <see cref="M:RemoteTech.Antenna.TargetGroundStation" /> and <see cref="M:RemoteTech.Antenna.TargetVessel" />.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function antennaGetTarget(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The object that the antenna is targetting.
 * This property can be used to set the target to <see cref="M:RemoteTech.Target.None" /> or <see cref="M:RemoteTech.Target.ActiveVessel" />.
 * To set the target to a celestial body, ground station or vessel see <see cref="M:RemoteTech.Antenna.TargetBody" />,
 * <see cref="M:RemoteTech.Antenna.TargetGroundStation" /> and <see cref="M:RemoteTech.Antenna.TargetVessel" />.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function antennaSetTarget(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function antennaGetTargetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function antennaSetTargetBody(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function antennaGetTargetGroundStation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function antennaSetTargetGroundStation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function antennaGetTargetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function antennaSetTargetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The signal delay between the this vessel and another vessel, in seconds.
 * </summary>
 *   <param name="other">
 *   </param>
 * </doc>
 * @param {Object} this
 * @param {Object} other * @returns {number}

*/
function commsSignalDelayToVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function commsGetVessel(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function commsGetHasLocalControl(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a flight computer on board.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function commsGetHasFlightComputer(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has any connection.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function commsGetHasConnection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a connection to a ground station.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function commsGetHasConnectionToGroundStation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The shortest signal delay to the vessel, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function commsGetSignalDelay(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The signal delay between the vessel and the closest ground station, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function commsGetSignalDelayToGroundStation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The antennas for this vessel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function commsGetAntennas(undefined) {
	//todo
}
