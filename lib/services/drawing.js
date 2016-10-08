'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @description Provides functionality for drawing objects in the flight scene.
 * For drawing and interacting with the user interface, see the UI service.
 * @result {void}
 * @returns {void}
*/


/**
 * @description Draw a line in the scene.
 * @param {{number, number, number}} start 
 * @param {{number, number, number}} end 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addLine = function addLine(start, end, referenceFrame, visible) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(start), 
        new proto.krpc.schema.Tuple(end), 
        encoders.uInt64(referenceFrame), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddLine', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Draw a direction vector in the scene, from the center of mass of the active vessel.
 * @param {{number, number, number}} direction 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} length 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addDirection = function addDirection(direction, referenceFrame, length, visible) {
    let encodedArguments = [
        new proto.krpc.schema.Tuple(direction), 
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
 * @description Draw a polygon in the scene, defined by a list of vertices.
 * @param {{number, number, number}[]} vertices 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addPolygon = function addPolygon(vertices, referenceFrame, visible) {
    let encodedArguments = [
        new proto.krpc.schema.List(vertices), 
        encoders.uInt64(referenceFrame), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddPolygon', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Draw text in the scene.
 * @param {string} text 
 * @param {Long} referenceFrame - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} position 
 * @param {{number, number, number, number}} rotation 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addText = function addText(text, referenceFrame, position, rotation, visible) {
    let encodedArguments = [
        encoders.string(text), 
        encoders.uInt64(referenceFrame), 
        new proto.krpc.schema.Tuple(position), 
        new proto.krpc.schema.Tuple(rotation), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('Drawing', 'AddText', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Remove all objects being drawn.
 * @param {boolean} clientOnly 
 * @result {void}
 * @returns {void}
*/
module.exports.clear = function clear(clientOnly) {
    let encodedArguments = [
        encoders.bool(clientOnly)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Clear', encodedArguments),
        decode: null
    };
};

/**
 * @description Remove the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.lineRemove = function lineRemove(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @description Start position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetStart = function lineGetStart(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Start', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Start position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetStart = function lineSetStart(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Start', encodedArguments),
        decode: null
    };
};

/**
 * @description End position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetEnd = function lineGetEnd(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_End', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description End position of the line.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetEnd = function lineSetEnd(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_End', encodedArguments),
        decode: null
    };
};

/**
 * @description Set the color
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetColor = function lineGetColor(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Color', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Set the color
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetColor = function lineSetColor(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @description Set the thickness
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetThickness = function lineGetThickness(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Thickness', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @description Set the thickness
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetThickness = function lineSetThickness(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Thickness', encodedArguments),
        decode: null
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetReferenceFrame = function lineGetReferenceFrame(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetReferenceFrame = function lineSetReferenceFrame(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetVisible = function lineGetVisible(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetVisible = function lineSetVisible(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.lineGetMaterial = function lineGetMaterial(line) {
    let encodedArguments = [
        encoders.uInt64(line)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} line - A long value representing the id for the Drawing.Line see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.lineSetMaterial = function lineSetMaterial(line, value) {
    let encodedArguments = [
        encoders.uInt64(line), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Line_set_Material', encodedArguments),
        decode: null
    };
};

/**
 * @description Remove the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.polygonRemove = function polygonRemove(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @description Vertices for the polygon.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetVertices = function polygonGetVertices(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Vertices', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * @description Vertices for the polygon.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}[]} value 
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetVertices = function polygonSetVertices(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        new proto.krpc.schema.List(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Vertices', encodedArguments),
        decode: null
    };
};

/**
 * @description Set the color
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetColor = function polygonGetColor(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Color', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Set the color
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetColor = function polygonSetColor(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @description Set the thickness
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetThickness = function polygonGetThickness(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Thickness', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @description Set the thickness
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetThickness = function polygonSetThickness(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Thickness', encodedArguments),
        decode: null
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetReferenceFrame = function polygonGetReferenceFrame(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetReferenceFrame = function polygonSetReferenceFrame(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetVisible = function polygonGetVisible(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetVisible = function polygonSetVisible(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.polygonGetMaterial = function polygonGetMaterial(polygon) {
    let encodedArguments = [
        encoders.uInt64(polygon)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} polygon - A long value representing the id for the Drawing.Polygon see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.polygonSetMaterial = function polygonSetMaterial(polygon, value) {
    let encodedArguments = [
        encoders.uInt64(polygon), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Polygon_set_Material', encodedArguments),
        decode: null
    };
};

/**
 * @description Remove the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textRemove = function textRemove(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @description Position of the text.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetPosition = function textGetPosition(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Position of the text.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetPosition = function textSetPosition(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Position', encodedArguments),
        decode: null
    };
};

/**
 * @description Rotation of the text as a quaternion.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetRotation = function textGetRotation(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Rotation of the text as a quaternion.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetRotation = function textSetRotation(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Rotation', encodedArguments),
        decode: null
    };
};

/**
 * @description A list of all available fonts.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_AvailableFonts', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * @description The text string
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetContent = function textGetContent(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Content', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @description The text string
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetContent = function textSetContent(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Content', encodedArguments),
        decode: null
    };
};

/**
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetFont = function textGetFont(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Font', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetFont = function textSetFont(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Font', encodedArguments),
        decode: null
    };
};

/**
 * @description Font size.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetSize = function textGetSize(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Size', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * @description Font size.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetSize = function textSetSize(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * @description Character size.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetCharacterSize = function textGetCharacterSize(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_CharacterSize', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @description Character size.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetCharacterSize = function textSetCharacterSize(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_CharacterSize', encodedArguments),
        decode: null
    };
};

/**
 * @description Font style.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.FontStyle see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetStyle = function textGetStyle(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Style', encodedArguments),
        decode: decoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})
    };
};

/**
 * @description Font style.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the UI.FontStyle see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textSetStyle = function textSetStyle(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Style', encodedArguments),
        decode: null
    };
};

/**
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.TextAlignment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAlignment = function textGetAlignment(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Alignment', encodedArguments),
        decode: decoders.enum({0 : 'Left', 1 : 'Right', 2 : 'Center'})
    };
};

/**
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the UI.TextAlignment see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.enum({0 : 'Left', 1 : 'Right', 2 : 'Center'})(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Alignment', encodedArguments),
        decode: null
    };
};

/**
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_LineSpacing', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {number} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_LineSpacing', encodedArguments),
        decode: null
    };
};

/**
 * @description Anchor.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.TextAnchor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAnchor = function textGetAnchor(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Anchor', encodedArguments),
        decode: decoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})
    };
};

/**
 * @description Anchor.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the UI.TextAnchor see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAnchor = function textSetAnchor(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Anchor', encodedArguments),
        decode: null
    };
};

/**
 * @description Set the color
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetColor = function textGetColor(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Color', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * @description Set the color
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetColor = function textSetColor(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetReferenceFrame = function textGetReferenceFrame(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_ReferenceFrame', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @description Reference frame for the positions of the object.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value - A long value representing the id for the SpaceCenter.ReferenceFrame see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textSetReferenceFrame = function textSetReferenceFrame(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_ReferenceFrame', encodedArguments),
        decode: null
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetVisible = function textGetVisible(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @description Whether the object is visible.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetVisible = function textSetVisible(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetMaterial = function textGetMaterial(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_get_Material', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @description Material used to render the object.
Creates the material from a shader with the given name.
 * @param {Long} text - A long value representing the id for the Drawing.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetMaterial = function textSetMaterial(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('Drawing', 'Text_set_Material', encodedArguments),
        decode: null
    };
};
