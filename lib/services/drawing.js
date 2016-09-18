'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
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
 * @param {{number, number, number}} start
 * @param {{number, number, number}} end
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {boolean} visible
 * @returns {Drawing.Line}
*/
module.exports.addLine = function addLine(start, end, referenceFrame, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddLine', start, end, referenceFrame, visible),
        decode: proto.krpc.schema.Stream
    };
};

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
 * @param {{number, number, number}} direction
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {number} length
 * @param {boolean} visible
 * @returns {Drawing.Line}
*/
module.exports.addDirection = function addDirection(direction, referenceFrame, length, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddDirection', direction, referenceFrame, length, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Draw a polygon in the scene, defined by a list of vertices.
 * </summary>
 *   <param name="vertices">Vertices of the polygon.</param>
 *   <param name="referenceFrame">Reference frame that the vertices are in.</param>
 *   <param name="visible">Whether the polygon is visible.</param>
 * </doc>
 * @param {{number, number, number}[]} vertices
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {boolean} visible
 * @returns {Drawing.Polygon}
*/
module.exports.addPolygon = function addPolygon(vertices, referenceFrame, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddPolygon', vertices, referenceFrame, visible),
        decode: proto.krpc.schema.Stream
    };
};

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
 * @param {{number, number, number}} position
 * @param {{number, number, number, number}} rotation
 * @param {boolean} visible
 * @returns {Drawing.Text}
*/
module.exports.addText = function addText(text, referenceFrame, position, rotation, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddText', text, referenceFrame, position, rotation, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Remove all objects being drawn.
 * </summary>
 *   <param name="clientOnly">If true, only remove objects created by the calling client.</param>
 * </doc>
 * @param {boolean} clientOnly
*/
module.exports.clear = function clear(clientOnly) {
    return {
        call: buildProcedureCall('Drawing', 'Clear', clientOnly),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
*/
module.exports.lineRemove = function lineRemove(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_Remove', line),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {{number, number, number}}
*/
module.exports.lineGetStart = function lineGetStart(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Start', line),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Start position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {{number, number, number}} value
*/
module.exports.lineSetStart = function lineSetStart(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Start', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {{number, number, number}}
*/
module.exports.lineGetEnd = function lineGetEnd(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_End', line),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * End position of the line.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {{number, number, number}} value
*/
module.exports.lineSetEnd = function lineSetEnd(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_End', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {{number, number, number}}
*/
module.exports.lineGetColor = function lineGetColor(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Color', line),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {{number, number, number}} value
*/
module.exports.lineSetColor = function lineSetColor(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Color', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {number}
*/
module.exports.lineGetThickness = function lineGetThickness(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Thickness', line),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {number} value
*/
module.exports.lineSetThickness = function lineSetThickness(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Thickness', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {SpaceCenter.ReferenceFrame}
*/
module.exports.lineGetReferenceFrame = function lineGetReferenceFrame(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_ReferenceFrame', line),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {SpaceCenter.ReferenceFrame} value
*/
module.exports.lineSetReferenceFrame = function lineSetReferenceFrame(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_ReferenceFrame', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @returns {boolean}
*/
module.exports.lineGetVisible = function lineGetVisible(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Visible', line),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Line} line
 * @param {boolean} value
*/
module.exports.lineSetVisible = function lineSetVisible(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Visible', line, value),
        decode: null
    };
};

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
module.exports.lineGetMaterial = function lineGetMaterial(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Material', line),
        decode: decoders.string
    };
};

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
module.exports.lineSetMaterial = function lineSetMaterial(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Material', line, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
*/
module.exports.polygonRemove = function polygonRemove(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_Remove', polygon),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {{number, number, number}[]}
*/
module.exports.polygonGetVertices = function polygonGetVertices(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Vertices', polygon),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * Vertices for the polygon.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {{number, number, number}[]} value
*/
module.exports.polygonSetVertices = function polygonSetVertices(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Vertices', polygon, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {{number, number, number}}
*/
module.exports.polygonGetColor = function polygonGetColor(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Color', polygon),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {{number, number, number}} value
*/
module.exports.polygonSetColor = function polygonSetColor(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Color', polygon, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {number}
*/
module.exports.polygonGetThickness = function polygonGetThickness(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Thickness', polygon),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Set the thickness
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {number} value
*/
module.exports.polygonSetThickness = function polygonSetThickness(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Thickness', polygon, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {SpaceCenter.ReferenceFrame}
*/
module.exports.polygonGetReferenceFrame = function polygonGetReferenceFrame(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_ReferenceFrame', polygon),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {SpaceCenter.ReferenceFrame} value
*/
module.exports.polygonSetReferenceFrame = function polygonSetReferenceFrame(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_ReferenceFrame', polygon, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @returns {boolean}
*/
module.exports.polygonGetVisible = function polygonGetVisible(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Visible', polygon),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Polygon} polygon
 * @param {boolean} value
*/
module.exports.polygonSetVisible = function polygonSetVisible(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Visible', polygon, value),
        decode: null
    };
};

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
module.exports.polygonGetMaterial = function polygonGetMaterial(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Material', polygon),
        decode: decoders.string
    };
};

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
module.exports.polygonSetMaterial = function polygonSetMaterial(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Material', polygon, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
*/
module.exports.textRemove = function textRemove(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_Remove', text),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {{number, number, number}}
*/
module.exports.textGetPosition = function textGetPosition(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Position', text),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the text.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {{number, number, number}} value
*/
module.exports.textSetPosition = function textSetPosition(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Position', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {{number, number, number, number}}
*/
module.exports.textGetRotation = function textGetRotation(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Rotation', text),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation of the text as a quaternion.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {{number, number, number, number}} value
*/
module.exports.textSetRotation = function textSetRotation(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Rotation', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string[]}
*/
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_AvailableFonts', text),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string}
*/
module.exports.textGetContent = function textGetContent(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Content', text),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {string} value
*/
module.exports.textSetContent = function textSetContent(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Content', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {string}
*/
module.exports.textGetFont = function textGetFont(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Font', text),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {string} value
*/
module.exports.textSetFont = function textSetFont(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Font', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
module.exports.textGetSize = function textGetSize(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Size', text),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
module.exports.textSetSize = function textSetSize(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Size', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
module.exports.textGetCharacterSize = function textGetCharacterSize(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_CharacterSize', text),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Character size.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
module.exports.textSetCharacterSize = function textSetCharacterSize(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_CharacterSize', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.FontStyle}
*/
module.exports.textGetStyle = function textGetStyle(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Style', text),
        decode: decoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.FontStyle} value
*/
module.exports.textSetStyle = function textSetStyle(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Style', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.TextAlignment}
*/
module.exports.textGetAlignment = function textGetAlignment(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Alignment', text),
        decode: decoders.enum({0 : 'Left', 1 : 'Right', 2 : 'Center'})
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.TextAlignment} value
*/
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Alignment', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {number}
*/
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_LineSpacing', text),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {number} value
*/
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_LineSpacing', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {UI.TextAnchor}
*/
module.exports.textGetAnchor = function textGetAnchor(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Anchor', text),
        decode: decoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})
    };
};

/**
 * <doc>
 *   <summary>
 * Anchor.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {UI.TextAnchor} value
*/
module.exports.textSetAnchor = function textSetAnchor(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Anchor', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {{number, number, number}}
*/
module.exports.textGetColor = function textGetColor(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Color', text),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {{number, number, number}} value
*/
module.exports.textSetColor = function textSetColor(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Color', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {SpaceCenter.ReferenceFrame}
*/
module.exports.textGetReferenceFrame = function textGetReferenceFrame(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_ReferenceFrame', text),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Reference frame for the positions of the object.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {SpaceCenter.ReferenceFrame} value
*/
module.exports.textSetReferenceFrame = function textSetReferenceFrame(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_ReferenceFrame', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @returns {boolean}
*/
module.exports.textGetVisible = function textGetVisible(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Visible', text),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the object is visible.
 * </summary>
 * </doc>
 * @param {Drawing.Text} text
 * @param {boolean} value
*/
module.exports.textSetVisible = function textSetVisible(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Visible', text, value),
        decode: null
    };
};

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
module.exports.textGetMaterial = function textGetMaterial(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Material', text),
        decode: decoders.string
    };
};

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
module.exports.textSetMaterial = function textSetMaterial(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Material', text, value),
        decode: null
    };
};
