'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor UI
 * @name UI
 * @description Provides functionality for drawing and interacting with in-game user interface elements.
 *  For drawing 3D objects in the flight scene, see the Drawing service.
 * @result {void}
 * @returns {void}
 */

/**
 * @augments UI
 * @description Add a new canvas.
 *  If you want to add UI elements to KSPs stock UI canvas, use {@link M:UI.StockCanvas}.
 * @result {Long} A long value representing the id for the UI.Canvas
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
 * @augments UI
 * @description Display a message on the screen.
 *  The message appears just like a stock message, for example quicksave or quickload messages.
 * @param {string} content - Message content.
 * @param {number} duration - Duration before the message disappears, in seconds.
 * @param {Long} position - A long value representing the id for the UI.MessagePosition
 * @result {void}
 * @returns {void}
 */
module.exports.message = function message(content, duration, position) {
    let encodedArguments = [
        encoders.string(content),
        encoders.float(duration),
        encoders.enum({
            0: 'BottomCenter',
            1: 'TopCenter',
            2: 'TopLeft',
            3: 'TopRight'
        })(position)
    ];
    return {
        call: buildProcedureCall('UI', 'Message', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Remove all user interface elements.
 * @param {boolean} clientOnly - If true, only remove objects created by the calling client.
 * @result {void}
 * @returns {void}
 */
module.exports.clear = function clear(clientOnly) {
    let encodedArguments = [encoders.bool(clientOnly)];
    return {
        call: buildProcedureCall('UI', 'Clear', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The stock UI canvas.
 * @result {Long} A long value representing the id for the UI.Canvas
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
 * @augments UI
 * @description Remove the UI object.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @result {void}
 * @returns {void}
 */
module.exports.buttonRemove = function buttonRemove(button) {
    let encodedArguments = [encoders.uInt64(button)];
    return {
        call: buildProcedureCall('UI', 'Button_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The rect transform for the text.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @result {Long} A long value representing the id for the UI.RectTransform
 * @returns {{call :Object, decode: function}}
 */
module.exports.buttonGetRectTransform = function buttonGetRectTransform(button) {
    let encodedArguments = [encoders.uInt64(button)];
    return {
        call: buildProcedureCall('UI', 'Button_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description The text for the button.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @result {Long} A long value representing the id for the UI.Text
 * @returns {{call :Object, decode: function}}
 */
module.exports.buttonGetText = function buttonGetText(button) {
    let encodedArguments = [encoders.uInt64(button)];
    return {
        call: buildProcedureCall('UI', 'Button_get_Text', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Whether the button has been clicked.
 *  This property is set to true when the user clicks the button.
 * A client script should reset the property to false in order to detect subsequent button presses.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.buttonGetClicked = function buttonGetClicked(button) {
    let encodedArguments = [encoders.uInt64(button)];
    return {
        call: buildProcedureCall('UI', 'Button_get_Clicked', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the button has been clicked.
 *  This property is set to true when the user clicks the button.
 * A client script should reset the property to false in order to detect subsequent button presses.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.buttonSetClicked = function buttonSetClicked(button, value) {
    let encodedArguments = [encoders.uInt64(button), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'Button_set_Clicked', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.buttonGetVisible = function buttonGetVisible(button) {
    let encodedArguments = [encoders.uInt64(button)];
    return {
        call: buildProcedureCall('UI', 'Button_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} button - A long value representing the id for the UI.Button
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.buttonSetVisible = function buttonSetVisible(button, value) {
    let encodedArguments = [encoders.uInt64(button), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'Button_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Create a new container for user interface elements.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @param {boolean} visible - Whether the panel is visible.
 * @result {Long} A long value representing the id for the UI.Panel
 * @returns {{call :Object, decode: function}}
 */
module.exports.canvasAddPanel = function canvasAddPanel(canvas, visible) {
    let encodedArguments = [encoders.uInt64(canvas), encoders.bool(visible)];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddPanel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Add text to the canvas.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @param {string} content - The text.
 * @param {boolean} visible - Whether the text is visible.
 * @result {Long} A long value representing the id for the UI.Text
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
 * @augments UI
 * @description Add an input field to the canvas.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @param {boolean} visible - Whether the input field is visible.
 * @result {Long} A long value representing the id for the UI.InputField
 * @returns {{call :Object, decode: function}}
 */
module.exports.canvasAddInputField = function canvasAddInputField(canvas, visible) {
    let encodedArguments = [encoders.uInt64(canvas), encoders.bool(visible)];
    return {
        call: buildProcedureCall('UI', 'Canvas_AddInputField', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Add a button to the canvas.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @param {string} content - The label for the button.
 * @param {boolean} visible - Whether the button is visible.
 * @result {Long} A long value representing the id for the UI.Button
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
 * @augments UI
 * @description Remove the UI object.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @result {void}
 * @returns {void}
 */
module.exports.canvasRemove = function canvasRemove(canvas) {
    let encodedArguments = [encoders.uInt64(canvas)];
    return {
        call: buildProcedureCall('UI', 'Canvas_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The rect transform for the canvas.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @result {Long} A long value representing the id for the UI.RectTransform
 * @returns {{call :Object, decode: function}}
 */
module.exports.canvasGetRectTransform = function canvasGetRectTransform(canvas) {
    let encodedArguments = [encoders.uInt64(canvas)];
    return {
        call: buildProcedureCall('UI', 'Canvas_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.canvasGetVisible = function canvasGetVisible(canvas) {
    let encodedArguments = [encoders.uInt64(canvas)];
    return {
        call: buildProcedureCall('UI', 'Canvas_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} canvas - A long value representing the id for the UI.Canvas
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.canvasSetVisible = function canvasSetVisible(canvas, value) {
    let encodedArguments = [encoders.uInt64(canvas), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'Canvas_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Remove the UI object.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {void}
 * @returns {void}
 */
module.exports.inputFieldRemove = function inputFieldRemove(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The rect transform for the input field.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {Long} A long value representing the id for the UI.RectTransform
 * @returns {{call :Object, decode: function}}
 */
module.exports.inputFieldGetRectTransform = function inputFieldGetRectTransform(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description The value of the input field.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.inputFieldGetValue = function inputFieldGetValue(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Value', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments UI
 * @description The value of the input field.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.inputFieldSetValue = function inputFieldSetValue(inputField, value) {
    let encodedArguments = [encoders.uInt64(inputField), encoders.string(value)];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Value', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The text component of the input field.
 *  Use {@link M:UI.InputField.Value} to get and set the value in the field.
 * This object can be used to alter the style of the input field's text.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {Long} A long value representing the id for the UI.Text
 * @returns {{call :Object, decode: function}}
 */
module.exports.inputFieldGetText = function inputFieldGetText(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Text', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Whether the input field has been changed.
 *  This property is set to true when the user modifies the value of the input field.
 * A client script should reset the property to false in order to detect subsequent changes.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.inputFieldGetChanged = function inputFieldGetChanged(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Changed', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the input field has been changed.
 *  This property is set to true when the user modifies the value of the input field.
 * A client script should reset the property to false in order to detect subsequent changes.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.inputFieldSetChanged = function inputFieldSetChanged(inputField, value) {
    let encodedArguments = [encoders.uInt64(inputField), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Changed', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.inputFieldGetVisible = function inputFieldGetVisible(inputField) {
    let encodedArguments = [encoders.uInt64(inputField)];
    return {
        call: buildProcedureCall('UI', 'InputField_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} inputField - A long value representing the id for the UI.InputField
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.inputFieldSetVisible = function inputFieldSetVisible(inputField, value) {
    let encodedArguments = [encoders.uInt64(inputField), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'InputField_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Create a panel within this panel.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @param {boolean} visible - Whether the new panel is visible.
 * @result {Long} A long value representing the id for the UI.Panel
 * @returns {{call :Object, decode: function}}
 */
module.exports.panelAddPanel = function panelAddPanel(panel, visible) {
    let encodedArguments = [encoders.uInt64(panel), encoders.bool(visible)];
    return {
        call: buildProcedureCall('UI', 'Panel_AddPanel', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Add text to the panel.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @param {string} content - The text.
 * @param {boolean} visible - Whether the text is visible.
 * @result {Long} A long value representing the id for the UI.Text
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
 * @augments UI
 * @description Add an input field to the panel.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @param {boolean} visible - Whether the input field is visible.
 * @result {Long} A long value representing the id for the UI.InputField
 * @returns {{call :Object, decode: function}}
 */
module.exports.panelAddInputField = function panelAddInputField(panel, visible) {
    let encodedArguments = [encoders.uInt64(panel), encoders.bool(visible)];
    return {
        call: buildProcedureCall('UI', 'Panel_AddInputField', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Add a button to the panel.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @param {string} content - The label for the button.
 * @param {boolean} visible - Whether the button is visible.
 * @result {Long} A long value representing the id for the UI.Button
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
 * @augments UI
 * @description Remove the UI object.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @result {void}
 * @returns {void}
 */
module.exports.panelRemove = function panelRemove(panel) {
    let encodedArguments = [encoders.uInt64(panel)];
    return {
        call: buildProcedureCall('UI', 'Panel_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The rect transform for the panel.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @result {Long} A long value representing the id for the UI.RectTransform
 * @returns {{call :Object, decode: function}}
 */
module.exports.panelGetRectTransform = function panelGetRectTransform(panel) {
    let encodedArguments = [encoders.uInt64(panel)];
    return {
        call: buildProcedureCall('UI', 'Panel_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.panelGetVisible = function panelGetVisible(panel) {
    let encodedArguments = [encoders.uInt64(panel)];
    return {
        call: buildProcedureCall('UI', 'Panel_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} panel - A long value representing the id for the UI.Panel
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.panelSetVisible = function panelSetVisible(panel, value) {
    let encodedArguments = [encoders.uInt64(panel), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'Panel_set_Visible', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Position of the rectangles pivot point relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetPosition = function rectTransformGetPosition(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Position', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Position of the rectangles pivot point relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetPosition = function rectTransformSetPosition(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Position', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Position of the rectangles pivot point relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetLocalPosition = function rectTransformGetLocalPosition(
    rectTransform
) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LocalPosition', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Position of the rectangles pivot point relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetLocalPosition = function rectTransformSetLocalPosition(
    rectTransform,
    value
) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LocalPosition', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Width and height of the rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetSize = function rectTransformGetSize(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Size', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Width and height of the rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetSize = function rectTransformSetSize(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Position of the rectangles upper right corner relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetUpperRight = function rectTransformGetUpperRight(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_UpperRight', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Position of the rectangles upper right corner relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetUpperRight = function rectTransformSetUpperRight(
    rectTransform,
    value
) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_UpperRight', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Position of the rectangles lower left corner relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetLowerLeft = function rectTransformGetLowerLeft(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LowerLeft', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Position of the rectangles lower left corner relative to the anchors.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetLowerLeft = function rectTransformSetLowerLeft(
    rectTransform,
    value
) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LowerLeft', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetAnchor = function rectTransformSetAnchor(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Anchor', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetAnchorMax = function rectTransformGetAnchorMax(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMax', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetAnchorMax = function rectTransformSetAnchorMax(
    rectTransform,
    value
) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMax', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetAnchorMin = function rectTransformGetAnchorMin(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMin', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetAnchorMin = function rectTransformSetAnchorMin(
    rectTransform,
    value
) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMin', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetPivot = function rectTransformGetPivot(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Pivot', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetPivot = function rectTransformSetPivot(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Pivot', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Rotation, as a quaternion, of the object around its pivot point.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetRotation = function rectTransformGetRotation(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Rotation', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Rotation, as a quaternion, of the object around its pivot point.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetRotation = function rectTransformSetRotation(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Rotation', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Scale factor applied to the object in the x, y and z dimensions.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.rectTransformGetScale = function rectTransformGetScale(rectTransform) {
    let encodedArguments = [encoders.uInt64(rectTransform)];
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Scale', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Scale factor applied to the object in the x, y and z dimensions.
 * @param {Long} rectTransform - A long value representing the id for the UI.RectTransform
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.rectTransformSetScale = function rectTransformSetScale(rectTransform, value) {
    let encodedArguments = [
        encoders.uInt64(rectTransform),
        { buffer: proto.Tuple.encode(value).finish() }
    ];
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Scale', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Remove the UI object.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {void}
 * @returns {void}
 */
module.exports.textRemove = function textRemove(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_Remove', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description The rect transform for the text.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {Long} A long value representing the id for the UI.RectTransform
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetRectTransform = function textGetRectTransform(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_RectTransform', encodedArguments),
        decode: decoders.uInt64
    };
};

/**
 * @augments UI
 * @description A list of all available fonts.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_AvailableFonts', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [decoders.string]
        }
    };
};

/**
 * @augments UI
 * @description The text string
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetContent = function textGetContent(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Content', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments UI
 * @description The text string
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetContent = function textSetContent(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.string(value)];
    return {
        call: buildProcedureCall('UI', 'Text_set_Content', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetFont = function textGetFont(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Font', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments UI
 * @description Name of the font
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {string} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetFont = function textSetFont(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.string(value)];
    return {
        call: buildProcedureCall('UI', 'Text_set_Font', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Font size.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetSize = function textGetSize(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Size', encodedArguments),
        decode: decoders.sInt32
    };
};

/**
 * @augments UI
 * @description Font size.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetSize = function textSetSize(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.sInt32(value)];
    return {
        call: buildProcedureCall('UI', 'Text_set_Size', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Font style.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {Long} A long value representing the id for the UI.FontStyle
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetStyle = function textGetStyle(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Style', encodedArguments),
        decode: decoders.enum({
            0: 'Normal',
            1: 'Bold',
            2: 'Italic',
            3: 'BoldAndItalic'
        })
    };
};

/**
 * @augments UI
 * @description Font style.
 * @param {Long} text - A long value representing the id for the UI.Text
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
        call: buildProcedureCall('UI', 'Text_set_Style', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {Long} A long value representing the id for the UI.TextAnchor
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetAlignment = function textGetAlignment(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Alignment', encodedArguments),
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
 * @augments UI
 * @description Alignment.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {Long} value - A long value representing the id for the UI.TextAnchor
 * @result {void}
 * @returns {void}
 */
module.exports.textSetAlignment = function textSetAlignment(text, value) {
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
        call: buildProcedureCall('UI', 'Text_set_Alignment', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {number}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_LineSpacing', encodedArguments),
        decode: decoders.float
    };
};

/**
 * @augments UI
 * @description Line spacing.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {number} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.float(value)];
    return {
        call: buildProcedureCall('UI', 'Text_set_LineSpacing', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Set the color
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetColor = function textGetColor(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Color', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.Tuple,
            subTypes: [decoders.double, decoders.double, decoders.double]
        }
    };
};

/**
 * @augments UI
 * @description Set the color
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetColor = function textSetColor(text, value) {
    let encodedArguments = [encoders.uInt64(text), { buffer: proto.Tuple.encode(value).finish() }];
    return {
        call: buildProcedureCall('UI', 'Text_set_Color', encodedArguments),
        decode: null
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.textGetVisible = function textGetVisible(text) {
    let encodedArguments = [encoders.uInt64(text)];
    return {
        call: buildProcedureCall('UI', 'Text_get_Visible', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments UI
 * @description Whether the UI object is visible.
 * @param {Long} text - A long value representing the id for the UI.Text
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.textSetVisible = function textSetVisible(text, value) {
    let encodedArguments = [encoders.uInt64(text), encoders.bool(value)];
    return {
        call: buildProcedureCall('UI', 'Text_set_Visible', encodedArguments),
        decode: null
    };
};
