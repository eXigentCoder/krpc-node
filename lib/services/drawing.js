/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing objects in the flight scene.
 * </summary>
 *   <remarks>
 * For drawing and interacting with the user interface, see the UI service.
 * </remarks>
 * </doc>*/


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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {boolean} visible
 * @returns {Drawing.Line}
*/
function addLine(start, end, referenceFrame, visible) {
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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {number} length
 * @param {boolean} visible
 * @returns {Drawing.Line}
*/
function addDirection(direction, referenceFrame, length, visible) {
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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {boolean} visible
 * @returns {Drawing.Polygon}
*/
function addPolygon(vertices, referenceFrame, visible) {
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
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {Object} position
 * @param {Object} rotation
 * @param {boolean} visible
 * @returns {Drawing.Text}
*/
function addText(text, referenceFrame, position, rotation, visible) {
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
*/
function clear(clientOnly) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
*/
function lineRemove(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {Object}
*/
function lineGetStart(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {Object} value
*/
function lineSetStart(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {Object}
*/
function lineGetEnd(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {Object} value
*/
function lineSetEnd(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {Object}
*/
function lineGetColor(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {Object} value
*/
function lineSetColor(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {number}
*/
function lineGetThickness(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {number} value
*/
function lineSetThickness(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {SpaceCenter.ReferenceFrame}
*/
function lineGetReferenceFrame(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {SpaceCenter.ReferenceFrame} value
*/
function lineSetReferenceFrame(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {boolean}
*/
function lineGetVisible(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {boolean} value
*/
function lineSetVisible(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {string}
*/
function lineGetMaterial(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {string} value
*/
function lineSetMaterial(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
*/
function polygonRemove(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {Object}
*/
function polygonGetVertices(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {Object} value
*/
function polygonSetVertices(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {Object}
*/
function polygonGetColor(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {Object} value
*/
function polygonSetColor(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {number}
*/
function polygonGetThickness(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {number} value
*/
function polygonSetThickness(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {SpaceCenter.ReferenceFrame}
*/
function polygonGetReferenceFrame(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {SpaceCenter.ReferenceFrame} value
*/
function polygonSetReferenceFrame(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {boolean}
*/
function polygonGetVisible(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {boolean} value
*/
function polygonSetVisible(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {string}
*/
function polygonGetMaterial(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {string} value
*/
function polygonSetMaterial(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
*/
function textRemove(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {Object}
*/
function textGetPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {Object} value
*/
function textSetPosition(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {Object}
*/
function textGetRotation(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {Object} value
*/
function textSetRotation(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {Object}
*/
function textGetAvailableFonts(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string}
*/
function textGetContent(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {string} value
*/
function textSetContent(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string}
*/
function textGetFont(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {string} value
*/
function textSetFont(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
function textGetSize(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
function textSetSize(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
function textGetCharacterSize(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
function textSetCharacterSize(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.FontStyle}
*/
function textGetStyle(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.FontStyle} value
*/
function textSetStyle(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.TextAlignment}
*/
function textGetAlignment(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.TextAlignment} value
*/
function textSetAlignment(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
function textGetLineSpacing(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
function textSetLineSpacing(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.TextAnchor}
*/
function textGetAnchor(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.TextAnchor} value
*/
function textSetAnchor(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {Object}
*/
function textGetColor(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {Object} value
*/
function textSetColor(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {SpaceCenter.ReferenceFrame}
*/
function textGetReferenceFrame(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {SpaceCenter.ReferenceFrame} value
*/
function textSetReferenceFrame(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {boolean}
*/
function textGetVisible(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {boolean} value
*/
function textSetVisible(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string}
*/
function textGetMaterial(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Material used to render the object.
 * Creates the material from a shader with the given name.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {string} value
*/
function textSetMaterial(this, value) {
	//todo
}
