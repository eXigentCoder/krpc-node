'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing and interacting with in-game user interface elements.
 * </summary>
 *   <remarks>
 * For drawing 3D objects in the flight scene, see the Drawing service.
 * </remarks>
 * </doc>
 * @result {void}
 * @returns {void}
*/


/**
 * <doc>
 *   <summary>
 * Add a new canvas.
 * </summary>
 *   <remarks>
 * If you want to add UI elements to KSPs stock UI canvas, use <see cref="M:UI.StockCanvas" />.
 * </remarks>
 * </doc> * @result {Long} - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addCanvas = function addCanvas() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('UI', 'AddCanvas', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Display a message on the screen.
 * </summary>
 *   <remarks>
 * The message appears just like a stock message, for example quicksave or quickload messages.
 * </remarks>
 *   <param name="content">Message content.</param>
 *   <param name="duration">Duration before the message disappears, in seconds.</param>
 *   <param name="position">Position to display the message.</param>
 * </doc>
 * @param {string} content 
 * @param {number} duration 
 * @param {Long} position 
 * @result {void}
 * @returns {void}
*/
module.exports.message = function message(content, duration, position) {
    let encodedArguments = [
        encoders.string(content), 
        encoders.float(duration), 
        encoders.enum({0 : 'BottomCenter', 1 : 'TopCenter', 2 : 'TopLeft', 3 : 'TopRight'})(position)
    ];
    return {
        call: buildProcedureCall('UI', 'Message', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove all user interface elements.
 * </summary>
 *   <param name="clientOnly">If true, only remove objects created by the calling client.</param>
 * </doc>
 * @param {boolean} clientOnly 
 * @result {void}
 * @returns {void}
*/
module.exports.clear = function clear(clientOnly) {
    let encodedArguments = [
        encoders.bool(clientOnly)
    ];
    return {
        call: buildProcedureCall('UI', 'Clear', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The stock UI canvas.
 * </summary>
 * </doc> * @result {Long} - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getStockCanvas = function getStockCanvas() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('UI', 'get_StockCanvas', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.buttonRemove = function buttonRemove(button) {
    let encodedArguments = [
        encoders.uInt64(button)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetRectTransform = function buttonGetRectTransform(button) {
    let encodedArguments = [
        encoders.uInt64(button)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The text for the button.
 * </summary>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetText = function buttonGetText(button) {
    let encodedArguments = [
        encoders.uInt64(button)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_get_Text', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the button has been clicked.
 * </summary>
 *   <remarks>
 * This property is set to true when the user clicks the button.
 * A client script should reset the property to false in order to detect subsequent button presses.
 * </remarks>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetClicked = function buttonGetClicked(button) {
    let encodedArguments = [
        encoders.uInt64(button)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_get_Clicked', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the button has been clicked.
 * </summary>
 *   <remarks>
 * This property is set to true when the user clicks the button.
 * A client script should reset the property to false in order to detect subsequent button presses.
 * </remarks>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.buttonSetClicked = function buttonSetClicked(button, value) {
    let encodedArguments = [
        encoders.uInt64(button), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_set_Clicked', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetVisible = function buttonGetVisible(button) {
    let encodedArguments = [
        encoders.uInt64(button)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} button - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.buttonSetVisible = function buttonSetVisible(button, value) {
    let encodedArguments = [
        encoders.uInt64(button), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Button_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Create a new container for user interface elements.
 * </summary>
 *   <param name="visible">Whether the panel is visible.</param>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddPanel = function canvasAddPanel(canvas, visible) {
    let encodedArguments = [
        encoders.uInt64(canvas), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddPanel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add text to the canvas.
 * </summary>
 *   <param name="content">The text.</param>
 *   <param name="visible">Whether the text is visible.</param>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} content 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddText = function canvasAddText(canvas, content, visible) {
    let encodedArguments = [
        encoders.uInt64(canvas), 
        encoders.string(content), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddText', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add an input field to the canvas.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddInputField = function canvasAddInputField(canvas, visible) {
    let encodedArguments = [
        encoders.uInt64(canvas), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddInputField', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add a button to the canvas.
 * </summary>
 *   <param name="content">The label for the button.</param>
 *   <param name="visible">Whether the button is visible.</param>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} content 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddButton = function canvasAddButton(canvas, content, visible) {
    let encodedArguments = [
        encoders.uInt64(canvas), 
        encoders.string(content), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddButton', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.canvasRemove = function canvasRemove(canvas) {
    let encodedArguments = [
        encoders.uInt64(canvas)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the canvas.
 * </summary>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasGetRectTransform = function canvasGetRectTransform(canvas) {
    let encodedArguments = [
        encoders.uInt64(canvas)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasGetVisible = function canvasGetVisible(canvas) {
    let encodedArguments = [
        encoders.uInt64(canvas)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} canvas - A long value representing the id for the UI.Canvas see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.canvasSetVisible = function canvasSetVisible(canvas, value) {
    let encodedArguments = [
        encoders.uInt64(canvas), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Canvas_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldRemove = function inputFieldRemove(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the input field.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetRectTransform = function inputFieldGetRectTransform(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetValue = function inputFieldGetValue(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Value', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} value 
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetValue = function inputFieldSetValue(inputField, value) {
    let encodedArguments = [
        encoders.uInt64(inputField), 
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Value', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The text component of the input field.
 * </summary>
 *   <remarks>
 * Use <see cref="M:UI.InputField.Value" /> to get and set the value in the field.
 * This object can be used to alter the style of the input field's text.
 * </remarks>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetText = function inputFieldGetText(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Text', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the input field has been changed.
 * </summary>
 *   <remarks>
 * This property is set to true when the user modifies the value of the input field.
 * A client script should reset the property to false in order to detect subsequent changes.
 * </remarks>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetChanged = function inputFieldGetChanged(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Changed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the input field has been changed.
 * </summary>
 *   <remarks>
 * This property is set to true when the user modifies the value of the input field.
 * A client script should reset the property to false in order to detect subsequent changes.
 * </remarks>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetChanged = function inputFieldSetChanged(inputField, value) {
    let encodedArguments = [
        encoders.uInt64(inputField), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Changed', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetVisible = function inputFieldGetVisible(inputField) {
    let encodedArguments = [
        encoders.uInt64(inputField)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} inputField - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetVisible = function inputFieldSetVisible(inputField, value) {
    let encodedArguments = [
        encoders.uInt64(inputField), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Create a panel within this panel.
 * </summary>
 *   <param name="visible">Whether the new panel is visible.</param>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddPanel = function panelAddPanel(panel, visible) {
    let encodedArguments = [
        encoders.uInt64(panel), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_AddPanel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add text to the panel.
 * </summary>
 *   <param name="content">The text.</param>
 *   <param name="visible">Whether the text is visible.</param>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} content 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddText = function panelAddText(panel, content, visible) {
    let encodedArguments = [
        encoders.uInt64(panel), 
        encoders.string(content), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_AddText', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add an input field to the panel.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.InputField see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddInputField = function panelAddInputField(panel, visible) {
    let encodedArguments = [
        encoders.uInt64(panel), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_AddInputField', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Add a button to the panel.
 * </summary>
 *   <param name="content">The label for the button.</param>
 *   <param name="visible">Whether the button is visible.</param>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {string} content 
 * @param {boolean} visible 
 * @result {Long} - A long value representing the id for the UI.Button see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddButton = function panelAddButton(panel, content, visible) {
    let encodedArguments = [
        encoders.uInt64(panel), 
        encoders.string(content), 
        encoders.bool(visible)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_AddButton', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.panelRemove = function panelRemove(panel) {
    let encodedArguments = [
        encoders.uInt64(panel)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the panel.
 * </summary>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelGetRectTransform = function panelGetRectTransform(panel) {
    let encodedArguments = [
        encoders.uInt64(panel)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelGetVisible = function panelGetVisible(panel) {
    let encodedArguments = [
        encoders.uInt64(panel)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} panel - A long value representing the id for the UI.Panel see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {boolean} value 
 * @result {void}
 * @returns {void}
*/
module.exports.panelSetVisible = function panelSetVisible(panel, value) {
    let encodedArguments = [
        encoders.uInt64(panel), 
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Panel_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetPosition = function rectTransformGetPosition(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Position', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetPosition = function rectTransformSetPosition(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Position', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetLocalPosition = function rectTransformGetLocalPosition(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LocalPosition', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetLocalPosition = function rectTransformSetLocalPosition(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LocalPosition', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetSize = function rectTransformGetSize(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Size', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetSize = function rectTransformSetSize(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetUpperRight = function rectTransformGetUpperRight(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_UpperRight', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetUpperRight = function rectTransformSetUpperRight(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_UpperRight', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetLowerLeft = function rectTransformGetLowerLeft(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LowerLeft', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetLowerLeft = function rectTransformSetLowerLeft(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LowerLeft', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchor = function rectTransformSetAnchor(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Anchor', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetAnchorMax = function rectTransformGetAnchorMax(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMax', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchorMax = function rectTransformSetAnchorMax(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMax', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetAnchorMin = function rectTransformGetAnchorMin(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMin', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchorMin = function rectTransformSetAnchorMin(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMin', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetPivot = function rectTransformGetPivot(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Pivot', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetPivot = function rectTransformSetPivot(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Pivot', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetRotation = function rectTransformGetRotation(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Rotation', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetRotation = function rectTransformSetRotation(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Rotation', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetScale = function rectTransformGetScale(rectTransform) {
    let encodedArguments = [
        encoders.uInt64(rectTransform)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Scale', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {{number, number, number}} value 
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetScale = function rectTransformSetScale(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform), 
        new proto.krpc.schema.Tuple(value)
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Scale', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {void}
 * @returns {void}
*/
module.exports.textRemove = function textRemove(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_Remove', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} - A long value representing the id for the UI.RectTransform see [Long.js]{@link https://www.npmjs.com/package/long}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetRectTransform = function textGetRectTransform(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string[]} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_AvailableFonts', encodedArguments),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetContent = function textGetContent(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Content', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_Content', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {string} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetFont = function textGetFont(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Font', encodedArguments),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_Font', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetSize = function textGetSize(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Size', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetStyle = function textGetStyle(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Style', encodedArguments),
        decode: decoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetStyle = function textSetStyle(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_set_Style', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {Long} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAlignment = function textGetAlignment(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Alignment', encodedArguments),
        decode: decoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @param {Long} value 
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    let encodedArguments = [
        encoders.uInt64(text), 
        encoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})(value)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_set_Alignment', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {number} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_LineSpacing', encodedArguments),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_LineSpacing', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {{number, number, number}} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetColor = function textGetColor(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Color', encodedArguments),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
 * @result {boolean} 
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetVisible = function textGetVisible(text) {
    let encodedArguments = [
        encoders.uInt64(text)
    ];
    return {
        call: buildProcedureCall('UI', 'Text_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Long} text - A long value representing the id for the UI.Text see [Long.js]{@link https://www.npmjs.com/package/long}
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
        call: buildProcedureCall('UI', 'Text_set_Visible', encodedArguments),
        decode: null
    };
};
