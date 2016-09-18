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
 * @param {SpaceCenter.Vessel} vessel
 * @returns {RemoteTech.Comms}
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
 * @param {SpaceCenter.Part} part
 * @returns {RemoteTech.Antenna}
*/
function antenna(part) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The names of the ground stations.
 * </summary>
 * </doc> * @returns {string[]}
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
 * @param {RemoteTech.Antenna} antenna
 * @returns {SpaceCenter.Part}
*/
function antennaGetPart(antenna) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the antenna has a connection.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @returns {boolean}
*/
function antennaGetHasConnection(antenna) {
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
 * @param {RemoteTech.Antenna} antenna
 * @returns {RemoteTech.Target}
*/
function antennaGetTarget(antenna) {
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
 * @param {RemoteTech.Antenna} antenna
 * @param {RemoteTech.Target} value
*/
function antennaSetTarget(antenna, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @returns {SpaceCenter.CelestialBody}
*/
function antennaGetTargetBody(antenna) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The celestial body the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {SpaceCenter.CelestialBody} value
*/
function antennaSetTargetBody(antenna, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @returns {string}
*/
function antennaGetTargetGroundStation(antenna) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The ground station the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {string} value
*/
function antennaSetTargetGroundStation(antenna, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @returns {SpaceCenter.Vessel}
*/
function antennaGetTargetVessel(antenna) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The vessel the antenna is targetting.
 * </summary>
 * </doc>
 * @param {RemoteTech.Antenna} antenna
 * @param {SpaceCenter.Vessel} value
*/
function antennaSetTargetVessel(antenna, value) {
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
 * @param {RemoteTech.Comms} comms
 * @param {SpaceCenter.Vessel} other
 * @returns {number}
*/
function commsSignalDelayToVessel(comms, other) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the vessel.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {SpaceCenter.Vessel}
*/
function commsGetVessel(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel can be controlled locally.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {boolean}
*/
function commsGetHasLocalControl(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a flight computer on board.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {boolean}
*/
function commsGetHasFlightComputer(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has any connection.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {boolean}
*/
function commsGetHasConnection(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the vessel has a connection to a ground station.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {boolean}
*/
function commsGetHasConnectionToGroundStation(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The shortest signal delay to the vessel, in seconds.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {number}
*/
function commsGetSignalDelay(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The signal delay between the vessel and the closest ground station, in seconds.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {number}
*/
function commsGetSignalDelayToGroundStation(comms) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The antennas for this vessel.
 * </summary>
 * </doc>
 * @param {RemoteTech.Comms} comms
 * @returns {RemoteTech.Antenna[]}
*/
function commsGetAntennas(comms) {
	//todo
}
