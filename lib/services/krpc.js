/**
 * <doc>
 *   <summary>
 * Main kRPC service, used by clients to interact with basic server functionality.
 * </summary>
 * </doc>
*/


/**
 * <doc>
 *   <summary>
 * Returns some information about the server, such as the version.
 * </summary>
 * </doc> * @returns {Object}

*/
function getStatus() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Returns information on all services, procedures, classes, properties etc. provided by the server.
 * Can be used by client libraries to automatically create functionality such as stubs.
 * </summary>
 * </doc> * @returns {Object}

*/
function getServices() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Add a streaming request and return its identifier.
 * </summary>
 * </doc>
 * @param {Object} call * @returns {Object}

*/
function addStream(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove a streaming request.
 * </summary>
 * </doc>
 * @param {number} id
*/
function removeStream(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of RPC clients that are currently connected to the server.
 * Each entry in the list is a clients identifier, name and address.
 * </summary>
 * </doc> * @returns {Object}

*/
function getClients() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Get the current game scene.
 * </summary>
 * </doc> * @returns {Object}

*/
function getCurrentGameScene() {
	//todo
}
