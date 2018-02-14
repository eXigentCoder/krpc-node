'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor Drawing
 * @name Drawing
 * @description Provides functionality for drawing objects in the flight scene.
 *  For drawing and interacting with the user interface, see the UI service.
 * @result {void}
 * @returns {void}
 */

/**
 * @augments Drawing
 * @description Draw a line in the scene.
 * @param {{number, number, number}} start - Position of the start of the line.
 * @param {{number, number, number}} end - Position of the end of the line.
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @param {boolean} visible - Whether the line is visible.
 * @result {Long} A long value representing the id for the Drawing.Line
 * @returns {{call :Object, decode: function}}
 */
module.exports.addLine = function addLine(start, end, referenceFrame, visible) {
    let encodedArguments = [
        { buffer: proto.Tuple.encode(start).finish() },
        { buffer: proto.Tuple.encode(end).finish() },
        encoders.uInt64(referenceFrame),
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddLine', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Draw a direction vector in the scene, from the center of mass of the active vessel.
 * @param {{number, number, number}} direction - Direction to draw the line in.
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @param {number} length - The length of the line.
 * @param {boolean} visible - Whether the line is visible.
 * @result {Long} A long value representing the id for the Drawing.Line
 * @returns {{call :Object, decode: function}}
 */
module.exports.addDirection = function addDirection(direction, referenceFrame, length, visible) {
    let encodedArguments = [
        { buffer: proto.Tuple.encode(direction).finish() },
        encoders.uInt64(referenceFrame),
        encoders.float(length),
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddDirection', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Draw a polygon in the scene, defined by a list of vertices.
 * @param {{number, number, number}[]} vertices - Vertices of the polygon.
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @param {boolean} visible - Whether the polygon is visible.
 * @result {Long} A long value representing the id for the Drawing.Polygon
 * @returns {{call :Object, decode: function}}
 */
module.exports.addPolygon = function addPolygon(vertices, referenceFrame, visible) {
    let encodedArguments = [
        { buffer: proto.List.encode(vertices).finish() },
        encoders.uInt64(referenceFrame),
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddPolygon', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Draw text in the scene.
 * @param {string} text - The string to draw.
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @param {{number, number, number}} position - Position of the text.
 * @param {{number, number, number, number}} rotation - Rotation of the text, as a quaternion.
 * @param {boolean} visible - Whether the text is visible.
 * @result {Long} A long value representing the id for the Drawing.Text
 * @returns {{call :Object, decode: function}}
 */
module.exports.addText = function addText(text, referenceFrame, position, rotation, visible) {
    let encodedArguments = [
        encoders.string(text),
        encoders.uInt64(referenceFrame),
        { buffer: proto.Tuple.encode(position).finish() },
        { buffer: proto.Tuple.encode(rotation).finish() },
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddText', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Remove all objects being drawn.
 * @param {boolean} clientOnly - If true, only remove objects created by the calling client.
 * @result {void}
 * @returns {void}
 */
module.exports.clear = function clear(clientOnly) {
    let encodedArguments = [encoders.bool(clientOnly)];
    return {
        call: buildProcedureCall('Drawing', 'Clear', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Remove the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {void}
 * @returns {void}
 */
module.exports.lineRemove = function lineRemove(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Start position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetStart = function lineGetStart(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Start', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Start position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetStart = function lineSetStart(line, value) {
    let encodedArguments = [encoders.uInt64(line), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Start', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description End position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetEnd = function lineGetEnd(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_End', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description End position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetEnd = function lineSetEnd(line, value) {
    let encodedArguments = [encoders.uInt64(line), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_End', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetColor = function lineGetColor(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Color', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetColor = function lineSetColor(line, value) {
    let encodedArguments = [encoders.uInt64(line), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Set the thickness
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetThickness = function lineGetThickness(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Thickness', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments Drawing
 * @description Set the thickness
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetThickness = function lineSetThickness(line, value) {
    let encodedArguments = [encoders.uInt64(line), encoders.float(value)];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Thickness', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {Long} A long value representing the id for the SpaceCenter.ReferenceFrame
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetReferenceFrame = function lineGetReferenceFrame(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetReferenceFrame = function lineSetReferenceFrame(line, value) {
    let encodedArguments = [encoders.uInt64(line), encoders.uInt64(value)];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetVisible = function lineGetVisible(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetVisible = function lineSetVisible(line, value) {
    let encodedArguments = [encoders.uInt64(line), encoders.bool(value)];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.lineGetMaterial = function lineGetMaterial(line) {
    let encodedArguments = [encoders.uInt64(line)];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} line - A long value representing the id for the Drawing.Line
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.lineSetMaterial = function lineSetMaterial(line, value) {
    let encodedArguments = [encoders.uInt64(line), encoders.string(value)];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Material', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Remove the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {void}
 * @returns {void}
 */
module.exports.polygonRemove = function polygonRemove(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Vertices for the polygon.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {{number, number, number}[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetVertices = function polygonGetVertices(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Vertices', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                {
                    isCollection: true,
                    decode: proto.Tuple,
                    subTypes: [decoders.double, decoders.double, decoders.double]
                }
            ]
        }
    };
};

/**
 * @augments Drawing
 * @description Vertices for the polygon.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {{number, number, number}[]} value
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetVertices = function polygonSetVertices(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon),
        { buffer: proto.List.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Vertices', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetColor = function polygonGetColor(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Color', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetColor = function polygonSetColor(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Set the thickness
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetThickness = function polygonGetThickness(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Thickness', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments Drawing
 * @description Set the thickness
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetThickness = function polygonSetThickness(polygon, value) {
    let encodedArguments = [encoders.uInt64(polygon), encoders.float(value)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Thickness', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {Long} A long value representing the id for the SpaceCenter.ReferenceFrame
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetReferenceFrame = function polygonGetReferenceFrame(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetReferenceFrame = function polygonSetReferenceFrame(polygon, value) {
    let encodedArguments = [encoders.uInt64(polygon), encoders.uInt64(value)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetVisible = function polygonGetVisible(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetVisible = function polygonSetVisible(polygon, value) {
    let encodedArguments = [encoders.uInt64(polygon), encoders.bool(value)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.polygonGetMaterial = function polygonGetMaterial(polygon) {
    let encodedArguments = [encoders.uInt64(polygon)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.polygonSetMaterial = function polygonSetMaterial(polygon, value) {
    let encodedArguments = [encoders.uInt64(polygon), encoders.string(value)];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Material', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description A list of all available fonts.
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textStaticAvailableFonts = function textStaticAvailableFonts() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('Drawing', 'Text_static_AvailableFonts', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [decoders.string]
        }
    };
};

/**
 * @augments Drawing
 * @description Remove the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {void}
 * @returns {void}
 */
module.exports.textRemove = function textRemove(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Position of the text.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetPosition = function textGetPosition(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Position', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Position of the text.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetPosition = function textSetPosition(text, value) {
    let encodedArguments = [encoders.uInt64(text), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Position', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Rotation of the text as a quaternion.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetRotation = function textGetRotation(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Rotation', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Rotation of the text as a quaternion.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {{number, number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetRotation = function textSetRotation(text, value) {
    let encodedArguments = [encoders.uInt64(text), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Rotation', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description The text string
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetContent = function textGetContent(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Content', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments Drawing
 * @description The text string
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetContent = function textSetContent(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.string(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Content', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetFont = function textGetFont(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Font', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments Drawing
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetFont = function textSetFont(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.string(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Font', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Font size.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetSize = function textGetSize(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Size', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * @augments Drawing
 * @description Font size.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetSize = function textSetSize(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.sInt32(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Character size.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetCharacterSize = function textGetCharacterSize(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_CharacterSize', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments Drawing
 * @description Character size.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetCharacterSize = function textSetCharacterSize(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.float(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_CharacterSize', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Font style.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {Long} A long value representing the id for the UI.FontStyle
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetStyle = function textGetStyle(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Style', encodedArguments),
        decode: decoders.enum({
            0: 'Normal',
            1: 'Bold',
            2: 'Italic',
            3: 'BoldAndItalic'
        })
    };
};

/**
 * @augments Drawing
 * @description Font style.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {Long} value - A long value representing the id for the UI.FontStyle
 * @result {void}
 * @returns {void}
 */
module.exports.textSetStyle = function textSetStyle(text, value) {
    let encodedArguments = [
        encoders.uInt64(text),
        encoders.enum({
            0: 'Normal',
            1: 'Bold',
            2: 'Italic',
            3: 'BoldAndItalic'
        })(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Style', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {Long} A long value representing the id for the UI.TextAlignment
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetAlignment = function textGetAlignment(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Alignment', encodedArguments),
        decode: decoders.enum({
            0: 'Left',
            1: 'Right',
            2: 'Center'
        })
    };
};

/**
 * @augments Drawing
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {Long} value - A long value representing the id for the UI.TextAlignment
 * @result {void}
 * @returns {void}
 */
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    let encodedArguments = [
        encoders.uInt64(text),
        encoders.enum({
            0: 'Left',
            1: 'Right',
            2: 'Center'
        })(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Alignment', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_LineSpacing', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments Drawing
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.float(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_LineSpacing', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Anchor.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {Long} A long value representing the id for the UI.TextAnchor
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetAnchor = function textGetAnchor(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Anchor', encodedArguments),
        decode: decoders.enum({
            0: 'LowerCenter',
            1: 'LowerLeft',
            2: 'LowerRight',
            3: 'MiddleCenter',
            4: 'MiddleLeft',
            5: 'MiddleRight',
            6: 'UpperCenter',
            7: 'UpperLeft',
            8: 'UpperRight'
        })
    };
};

/**
 * @augments Drawing
 * @description Anchor.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {Long} value - A long value representing the id for the UI.TextAnchor
 * @result {void}
 * @returns {void}
 */
module.exports.textSetAnchor = function textSetAnchor(text, value) {
    let encodedArguments = [
        encoders.uInt64(text),
        encoders.enum({
            0: 'LowerCenter',
            1: 'LowerLeft',
            2: 'LowerRight',
            3: 'MiddleCenter',
            4: 'MiddleLeft',
            5: 'MiddleRight',
            6: 'UpperCenter',
            7: 'UpperLeft',
            8: 'UpperRight'
        })(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Anchor', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetColor = function textGetColor(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Color', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments Drawing
 * @description Set the color
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetColor = function textSetColor(text, value) {
    let encodedArguments = [encoders.uInt64(text), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {Long} A long value representing the id for the SpaceCenter.ReferenceFrame
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetReferenceFrame = function textGetReferenceFrame(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments Drawing
 * @description Reference frame for the positions of the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame
 * @result {void}
 * @returns {void}
 */
module.exports.textSetReferenceFrame = function textSetReferenceFrame(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.uInt64(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetVisible = function textGetVisible(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments Drawing
 * @description Whether the object is visible.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetVisible = function textSetVisible(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.bool(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetMaterial = function textGetMaterial(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments Drawing
 * @description Material used to render the object.
 * Creates the material from a shader with the given name.
 * @param {Long} text - A long value representing the id for the Drawing.Text
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetMaterial = function textSetMaterial(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.string(value)];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Material', encodedArguments),
        decode: null
    };
};
