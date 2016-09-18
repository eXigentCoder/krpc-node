'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing and interacting with in-game user interface elements.
 * </summary>
 *   <remarks>
 * For drawing 3D objects in the flight scene, see the Drawing service.
 * </remarks>
 * </doc> * @result {void}
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
 * </doc> * @result {UI.Canvas}
 * @returns {{call :Object, decode: function}}
*/
module.exports.addCanvas = function addCanvas() {
    return {
        call: buildProcedureCall('UI', 'AddCanvas'),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.MessagePosition} position
 * @result {void}
 * @returns {void}
*/
module.exports.message = function message(content, duration, position) {
    return {
        call: buildProcedureCall('UI', 'Message', content, duration, position),
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
    return {
        call: buildProcedureCall('UI', 'Clear', clientOnly),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The stock UI canvas.
 * </summary>
 * </doc> * @result {UI.Canvas}
 * @returns {{call :Object, decode: function}}
*/
module.exports.getStockCanvas = function getStockCanvas() {
    return {
        call: buildProcedureCall('UI', 'get_StockCanvas'),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @result {void}
 * @returns {void}
*/
module.exports.buttonRemove = function buttonRemove(button) {
    return {
        call: buildProcedureCall('UI', 'Button_Remove', button),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @result {UI.RectTransform}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetRectTransform = function buttonGetRectTransform(button) {
    return {
        call: buildProcedureCall('UI', 'Button_get_RectTransform', button),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * The text for the button.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @result {UI.Text}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetText = function buttonGetText(button) {
    return {
        call: buildProcedureCall('UI', 'Button_get_Text', button),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.Button} button
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetClicked = function buttonGetClicked(button) {
    return {
        call: buildProcedureCall('UI', 'Button_get_Clicked', button),
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
 * @param {UI.Button} button
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.buttonSetClicked = function buttonSetClicked(button, value) {
    return {
        call: buildProcedureCall('UI', 'Button_set_Clicked', button, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.buttonGetVisible = function buttonGetVisible(button) {
    return {
        call: buildProcedureCall('UI', 'Button_get_Visible', button),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.buttonSetVisible = function buttonSetVisible(button, value) {
    return {
        call: buildProcedureCall('UI', 'Button_set_Visible', button, value),
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
 * @param {UI.Canvas} canvas
 * @param {boolean} visible
 * @result {UI.Panel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddPanel = function canvasAddPanel(canvas, visible) {
    return {
        call: buildProcedureCall('UI', 'Canvas_AddPanel', canvas, visible),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.Canvas} canvas
 * @param {string} content
 * @param {boolean} visible
 * @result {UI.Text}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddText = function canvasAddText(canvas, content, visible) {
    return {
        call: buildProcedureCall('UI', 'Canvas_AddText', canvas, content, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Add an input field to the canvas.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {UI.Canvas} canvas
 * @param {boolean} visible
 * @result {UI.InputField}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddInputField = function canvasAddInputField(canvas, visible) {
    return {
        call: buildProcedureCall('UI', 'Canvas_AddInputField', canvas, visible),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.Canvas} canvas
 * @param {string} content
 * @param {boolean} visible
 * @result {UI.Button}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasAddButton = function canvasAddButton(canvas, content, visible) {
    return {
        call: buildProcedureCall('UI', 'Canvas_AddButton', canvas, content, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @result {void}
 * @returns {void}
*/
module.exports.canvasRemove = function canvasRemove(canvas) {
    return {
        call: buildProcedureCall('UI', 'Canvas_Remove', canvas),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the canvas.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @result {UI.RectTransform}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasGetRectTransform = function canvasGetRectTransform(canvas) {
    return {
        call: buildProcedureCall('UI', 'Canvas_get_RectTransform', canvas),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.canvasGetVisible = function canvasGetVisible(canvas) {
    return {
        call: buildProcedureCall('UI', 'Canvas_get_Visible', canvas),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.canvasSetVisible = function canvasSetVisible(canvas, value) {
    return {
        call: buildProcedureCall('UI', 'Canvas_set_Visible', canvas, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldRemove = function inputFieldRemove(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_Remove', inputField),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @result {UI.RectTransform}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetRectTransform = function inputFieldGetRectTransform(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_get_RectTransform', inputField),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetValue = function inputFieldGetValue(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_get_Value', inputField),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetValue = function inputFieldSetValue(inputField, value) {
    return {
        call: buildProcedureCall('UI', 'InputField_set_Value', inputField, value),
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
 * @param {UI.InputField} inputField
 * @result {UI.Text}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetText = function inputFieldGetText(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_get_Text', inputField),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.InputField} inputField
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetChanged = function inputFieldGetChanged(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_get_Changed', inputField),
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
 * @param {UI.InputField} inputField
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetChanged = function inputFieldSetChanged(inputField, value) {
    return {
        call: buildProcedureCall('UI', 'InputField_set_Changed', inputField, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.inputFieldGetVisible = function inputFieldGetVisible(inputField) {
    return {
        call: buildProcedureCall('UI', 'InputField_get_Visible', inputField),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.inputFieldSetVisible = function inputFieldSetVisible(inputField, value) {
    return {
        call: buildProcedureCall('UI', 'InputField_set_Visible', inputField, value),
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
 * @param {UI.Panel} panel
 * @param {boolean} visible
 * @result {UI.Panel}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddPanel = function panelAddPanel(panel, visible) {
    return {
        call: buildProcedureCall('UI', 'Panel_AddPanel', panel, visible),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.Panel} panel
 * @param {string} content
 * @param {boolean} visible
 * @result {UI.Text}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddText = function panelAddText(panel, content, visible) {
    return {
        call: buildProcedureCall('UI', 'Panel_AddText', panel, content, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Add an input field to the panel.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {UI.Panel} panel
 * @param {boolean} visible
 * @result {UI.InputField}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddInputField = function panelAddInputField(panel, visible) {
    return {
        call: buildProcedureCall('UI', 'Panel_AddInputField', panel, visible),
        decode: proto.krpc.schema.Stream
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
 * @param {UI.Panel} panel
 * @param {string} content
 * @param {boolean} visible
 * @result {UI.Button}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelAddButton = function panelAddButton(panel, content, visible) {
    return {
        call: buildProcedureCall('UI', 'Panel_AddButton', panel, content, visible),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @result {void}
 * @returns {void}
*/
module.exports.panelRemove = function panelRemove(panel) {
    return {
        call: buildProcedureCall('UI', 'Panel_Remove', panel),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the panel.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @result {UI.RectTransform}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelGetRectTransform = function panelGetRectTransform(panel) {
    return {
        call: buildProcedureCall('UI', 'Panel_get_RectTransform', panel),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.panelGetVisible = function panelGetVisible(panel) {
    return {
        call: buildProcedureCall('UI', 'Panel_get_Visible', panel),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.panelSetVisible = function panelSetVisible(panel, value) {
    return {
        call: buildProcedureCall('UI', 'Panel_set_Visible', panel, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetPosition = function rectTransformGetPosition(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Position', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetPosition = function rectTransformSetPosition(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Position', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetLocalPosition = function rectTransformGetLocalPosition(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LocalPosition', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetLocalPosition = function rectTransformSetLocalPosition(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LocalPosition', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetSize = function rectTransformGetSize(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Size', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetSize = function rectTransformSetSize(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Size', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetUpperRight = function rectTransformGetUpperRight(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_UpperRight', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetUpperRight = function rectTransformSetUpperRight(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_UpperRight', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetLowerLeft = function rectTransformGetLowerLeft(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_LowerLeft', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetLowerLeft = function rectTransformSetLowerLeft(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_LowerLeft', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchor = function rectTransformSetAnchor(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Anchor', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetAnchorMax = function rectTransformGetAnchorMax(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMax', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchorMax = function rectTransformSetAnchorMax(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMax', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetAnchorMin = function rectTransformGetAnchorMin(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_AnchorMin', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetAnchorMin = function rectTransformSetAnchorMin(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_AnchorMin', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetPivot = function rectTransformGetPivot(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Pivot', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetPivot = function rectTransformSetPivot(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Pivot', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetRotation = function rectTransformGetRotation(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Rotation', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetRotation = function rectTransformSetRotation(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Rotation', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.rectTransformGetScale = function rectTransformGetScale(rectTransform) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_get_Scale', rectTransform),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.rectTransformSetScale = function rectTransformSetScale(rectTransform, value) {
    return {
        call: buildProcedureCall('UI', 'RectTransform_set_Scale', rectTransform, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {void}
 * @returns {void}
*/
module.exports.textRemove = function textRemove(text) {
    return {
        call: buildProcedureCall('UI', 'Text_Remove', text),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {UI.RectTransform}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetRectTransform = function textGetRectTransform(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_RectTransform', text),
        decode: proto.krpc.schema.Stream
    };
};

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {string[]}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAvailableFonts = function textGetAvailableFonts(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_AvailableFonts', text),
        decode: proto.krpc.schema.List
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetContent = function textGetContent(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Content', text),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetContent = function textSetContent(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Content', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {string}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetFont = function textGetFont(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Font', text),
        decode: decoders.string
    };
};

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {string} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetFont = function textSetFont(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Font', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetSize = function textGetSize(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Size', text),
        decode: decoders.sInt32
    };
};

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetSize = function textSetSize(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Size', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {UI.FontStyle}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetStyle = function textGetStyle(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Style', text),
        decode: decoders.enum({0 : 'Normal', 1 : 'Bold', 2 : 'Italic', 3 : 'BoldAndItalic'})
    };
};

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {UI.FontStyle} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetStyle = function textSetStyle(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Style', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {UI.TextAnchor}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetAlignment = function textGetAlignment(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Alignment', text),
        decode: decoders.enum({0 : 'LowerCenter', 1 : 'LowerLeft', 2 : 'LowerRight', 3 : 'MiddleCenter', 4 : 'MiddleLeft', 5 : 'MiddleRight', 6 : 'UpperCenter', 7 : 'UpperLeft', 8 : 'UpperRight'})
    };
};

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {UI.TextAnchor} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetAlignment = function textSetAlignment(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Alignment', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {number}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetLineSpacing = function textGetLineSpacing(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_LineSpacing', text),
        decode: decoders.float
    };
};

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {number} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetLineSpacing = function textSetLineSpacing(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_LineSpacing', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {{number, number, number}}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetColor = function textGetColor(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Color', text),
        decode: proto.krpc.schema.Tuple
    };
};

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {{number, number, number}} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetColor = function textSetColor(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Color', text, value),
        decode: null
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
*/
module.exports.textGetVisible = function textGetVisible(text) {
    return {
        call: buildProcedureCall('UI', 'Text_get_Visible', text),
        decode: decoders.bool
    };
};

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {boolean} value
 * @result {void}
 * @returns {void}
*/
module.exports.textSetVisible = function textSetVisible(text, value) {
    return {
        call: buildProcedureCall('UI', 'Text_set_Visible', text, value),
        decode: null
    };
};
