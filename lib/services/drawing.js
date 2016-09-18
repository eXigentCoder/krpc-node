/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing objects in the flight scene.
 * </summary>
 *   <remarks>
 * For drawing and interacting with the user interface, see the UI service.
 * </remarks>
 * </doc>
*/

/**
 * <doc>
 *   <summary>
 * Draw a line in the scene.
 * </summary>
 *   <param name="start">Position of the start of the line.</param>
 *   <param name="end">Position of the end of the line.</param>
 *   <param name="referenceFrame">Reference frame that the positions are in.</param>
 *   <param name="visible">Whether the line is visible.</param>
 * </doc>
 * @param {Object} start
 * @param {Object} end
 * @param {Object} referenceFrame
 * @param {boolean} visible * @returns {Object}
*/function addLine(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Draw a direction vector in the scene, from the center of mass of the active vessel.
 * </summary>
 *   <param name="direction">Direction to draw the line in.</param>
 *   <param name="referenceFrame">Reference frame that the direction is in.</param>
 *   <param name="length">The length of the line.</param>
 *   <param name="visible">Whether the line is visible.</param>
 * </doc>
 * @param {Object} direction
 * @param {Object} referenceFrame
 * @param {number} length
 * @param {boolean} visible * @returns {Object}
*/function addDirection(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Draw a polygon in the scene, defined by a list of vertices.
 * </summary>
 *   <param name="vertices">Vertices of the polygon.</param>
 *   <param name="referenceFrame">Reference frame that the vertices are in.</param>
 *   <param name="visible">Whether the polygon is visible.</param>
 * </doc>
 * @param {Object} vertices
 * @param {Object} referenceFrame
 * @param {boolean} visible * @returns {Object}
*/function addPolygon(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Draw text in the scene.
 * </summary>
 *   <param name="text">The string to draw.</param>
 *   <param name="referenceFrame">Reference frame that the text position is in.</param>
 *   <param name="position">Position of the text.</param>
 *   <param name="rotation">Rotation of the text, as a quaternion.</param>
 *   <param name="visible">Whether the text is visible.</param>
 * </doc>
 * @param {string} text
 * @param {Object} referenceFrame
 * @param {Object} position
 * @param {Object} rotation
 * @param {boolean} visible * @returns {Object}
*/function addText(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove all objects being drawn.
 * </summary>
 *   <param name="clientOnly">If true, only remove objects created by the calling client.</param>
 * </doc>
 * @param {boolean} clientOnly
*/function clear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Object} this
*/function lineRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lineGetStart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function lineSetStart(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lineGetEnd(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function lineSetEnd(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lineGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function lineSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function lineGetThickness(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function lineSetThickness(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function lineGetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function lineSetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function lineGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function lineSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function lineGetMaterial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function lineSetMaterial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Object} this
*/function polygonRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function polygonGetVertices(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function polygonSetVertices(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function polygonGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function polygonSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function polygonGetThickness(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function polygonSetThickness(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function polygonGetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function polygonSetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function polygonGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function polygonSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function polygonGetMaterial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function polygonSetMaterial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Object} this
*/function textRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetAvailableFonts(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function textGetContent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function textSetContent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function textGetFont(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function textSetFont(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function textGetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function textSetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function textGetCharacterSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function textSetCharacterSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetStyle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetStyle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetAlignment(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetAlignment(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}
*/function textGetLineSpacing(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/function textSetLineSpacing(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetAnchor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetAnchor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}
*/function textGetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/function textSetReferenceFrame(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}
*/function textGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/function textSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}
*/function textGetMaterial(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/function textSetMaterial(undefined) {
	//todo
}
