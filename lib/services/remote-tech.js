/**
 * <doc>
 *   <summary>
 * This service provides functionality to interact with
 * <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
 * </summary>
 * </doc>*/


/**
 * <doc>
 *   <summary>
 * Get a communications object, representing the communication capability of a particular vessel.
 * </summary>
 * </doc>
 * @param {Object} vessel
 * @returns {Object}
*/
function comms(vessel) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the antenna object for a particular part.
 * </summary>
 * </doc>
 * @param {Object} part
 * @returns {Object}
*/
function antenna(part) {
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
 * @param {Object} this
 * @returns {Object}
*/
function antennaGetPart(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {boolean}
*/
function antennaGetHasConnection(this) {
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
 * @returns {Object}
*/
function antennaGetTarget(this) {
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
function antennaSetTarget(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {Object}
*/
function antennaGetTargetBody(this) {
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
function antennaSetTargetBody(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {string}
*/
function antennaGetTargetGroundStation(this) {
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
function antennaSetTargetGroundStation(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {Object}
*/
function antennaGetTargetVessel(this) {
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
function antennaSetTargetVessel(this, value) {
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
 * @param {Object} other
 * @returns {number}
*/
function commsSignalDelayToVessel(this, other) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the vessel.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {Object}
*/
function commsGetVessel(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {boolean}
*/
function commsGetHasLocalControl(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a flight computer on board.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {boolean}
*/
function commsGetHasFlightComputer(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has any connection.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {boolean}
*/
function commsGetHasConnection(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a connection to a ground station.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {boolean}
*/
function commsGetHasConnectionToGroundStation(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The shortest signal delay to the vessel, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {number}
*/
function commsGetSignalDelay(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The signal delay between the vessel and the closest ground station, in seconds.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {number}
*/
function commsGetSignalDelayToGroundStation(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The antennas for this vessel.
 * </summary>
 * </doc>
 * @param {Object} this
 * @returns {Object}
*/
function commsGetAntennas(this) {
	//todo
}
