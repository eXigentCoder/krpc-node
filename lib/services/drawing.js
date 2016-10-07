'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing objects in the flight scene.
 * </summary>
 *   <remarks>
 * For drawing and interacting with the user interface, see the UI service.
 * </remarks>
 * </doc> * @result {void}
 * @returns {void}
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
 * @param {{number, number, number}} start
 * @param {{number, number, number}} end
 * @param {SpaceCenter.ReferenceFrame} referenceFrame
 * @param {boolean} visible
 * @result {Drawing.Line}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addLine = function addLine(start, end, referenceFrame, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddLine', start, end, referenceFrame, visible),
        encode: [proto.krpc.schema.Tuple, proto.krpc.schema.Tuple, encoders.uInt64, encoders.bool],
        decode: decoders.uInt64
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
 * @result {Drawing.Line}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addDirection = function addDirection(direction, referenceFrame, length, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddDirection', direction, referenceFrame, length, visible),
        encode: [proto.krpc.schema.Tuple, encoders.uInt64, encoders.float, encoders.bool],
        decode: decoders.uInt64
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
 * @result {Drawing.Polygon}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addPolygon = function addPolygon(vertices, referenceFrame, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddPolygon', vertices, referenceFrame, visible),
        encode: [proto.krpc.schema.List, encoders.uInt64, encoders.bool],
        decode: decoders.uInt64
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
 * @result {Drawing.Text}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addText = function addText(text, referenceFrame, position, rotation, visible) {
    return {
        call: buildProcedureCall('Drawing', 'AddText', text, referenceFrame, position, rotation, visible),
        encode: [encoders.string, encoders.uInt64, proto.krpc.schema.Tuple, proto.krpc.schema.Tuple, encoders.bool],
        decode: decoders.uInt64
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
 * @result {void}
 * @returns {void}
*/
module.exports.clear = function clear(clientOnly) {
    return {
        call: buildProcedureCall('Drawing', 'Clear', clientOnly),
        encode: [encoders.bool],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineRemove = function lineRemove(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_Remove', line),
        encode: [encoders.uInt64],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetStart = function lineGetStart(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Start', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetStart = function lineSetStart(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Start', line, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetEnd = function lineGetEnd(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_End', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetEnd = function lineSetEnd(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_End', line, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetColor = function lineGetColor(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Color', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetColor = function lineSetColor(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Color', line, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetThickness = function lineGetThickness(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Thickness', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetThickness = function lineSetThickness(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Thickness', line, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetReferenceFrame = function lineGetReferenceFrame(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_ReferenceFrame', line),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetReferenceFrame = function lineSetReferenceFrame(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_ReferenceFrame', line, value),
        encode: [encoders.uInt64, encoders.uInt64],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetVisible = function lineGetVisible(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Visible', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetVisible = function lineSetVisible(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Visible', line, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetMaterial = function lineGetMaterial(line) {
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Material', line),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetMaterial = function lineSetMaterial(line, value) {
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Material', line, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonRemove = function polygonRemove(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_Remove', polygon),
        encode: [encoders.uInt64],
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
 * @result {{number, number, number}[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetVertices = function polygonGetVertices(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Vertices', polygon),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetVertices = function polygonSetVertices(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Vertices', polygon, value),
        encode: [encoders.uInt64, proto.krpc.schema.List],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetColor = function polygonGetColor(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Color', polygon),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetColor = function polygonSetColor(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Color', polygon, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetThickness = function polygonGetThickness(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Thickness', polygon),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetThickness = function polygonSetThickness(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Thickness', polygon, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetReferenceFrame = function polygonGetReferenceFrame(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_ReferenceFrame', polygon),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetReferenceFrame = function polygonSetReferenceFrame(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_ReferenceFrame', polygon, value),
        encode: [encoders.uInt64, encoders.uInt64],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetVisible = function polygonGetVisible(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Visible', polygon),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetVisible = function polygonSetVisible(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Visible', polygon, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetMaterial = function polygonGetMaterial(polygon) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Material', polygon),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetMaterial = function polygonSetMaterial(polygon, value) {
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Material', polygon, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textRemove = function textRemove(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_Remove', text),
        encode: [encoders.uInt64],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetPosition = function textGetPosition(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Position', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetPosition = function textSetPosition(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Position', text, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetRotation = function textGetRotation(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Rotation', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetRotation = function textSetRotation(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Rotation', text, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_AvailableFonts', text),
        encode: [encoders.uInt64],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetContent = function textGetContent(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Content', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetContent = function textSetContent(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Content', text, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetFont = function textGetFont(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Font', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetFont = function textSetFont(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Font', text, value),
        encode: [encoders.uInt64, encoders.string],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetSize = function textGetSize(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Size', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetSize = function textSetSize(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Size', text, value),
        encode: [encoders.uInt64, encoders.sInt32],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetCharacterSize = function textGetCharacterSize(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_CharacterSize', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetCharacterSize = function textSetCharacterSize(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_CharacterSize', text, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {UI.FontStyle}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetStyle = function textGetStyle(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Style', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetStyle = function textSetStyle(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Style', text, value),
        encode: [encoders.uInt64, decoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})],
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
 * @result {UI.TextAlignment}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAlignment = function textGetAlignment(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Alignment', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Alignment', text, value),
        encode: [encoders.uInt64, decoders.enum({0 : 'Left', 1 : 'Right', 2 : 'Center'})],
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
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_LineSpacing', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_LineSpacing', text, value),
        encode: [encoders.uInt64, encoders.float],
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
 * @result {UI.TextAnchor}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAnchor = function textGetAnchor(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Anchor', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAnchor = function textSetAnchor(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Anchor', text, value),
        encode: [encoders.uInt64, decoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})],
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
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetColor = function textGetColor(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Color', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetColor = function textSetColor(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Color', text, value),
        encode: [encoders.uInt64, proto.krpc.schema.Tuple],
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
 * @result {SpaceCenter.ReferenceFrame}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetReferenceFrame = function textGetReferenceFrame(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_ReferenceFrame', text),
        encode: [encoders.uInt64],
        decode: decoders.uInt64
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetReferenceFrame = function textSetReferenceFrame(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_ReferenceFrame', text, value),
        encode: [encoders.uInt64, encoders.uInt64],
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
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetVisible = function textGetVisible(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Visible', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetVisible = function textSetVisible(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Visible', text, value),
        encode: [encoders.uInt64, encoders.bool],
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
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetMaterial = function textGetMaterial(text) {
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Material', text),
        encode: [encoders.uInt64],
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
 * @result {void}
 * @returns {void}
*/
module.exports.textSetMaterial = function textSetMaterial(text, value) {
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Material', text, value),
        encode: [encoders.uInt64, encoders.string],
        decode: null
    };
};
