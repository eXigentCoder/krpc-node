/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing and interacting with in-game user interface elements.
 * </summary>
 *   <remarks>
 * For drawing 3D objects in the flight scene, see the Drawing service.
 * </remarks>
 * </doc>*/


/**
 * <doc>
 *   <summary>
 * Add a new canvas.
 * </summary>
 *   <remarks>
 * If you want to add UI elements to KSPs stock UI canvas, use <see cref="M:UI.StockCanvas" />.
 * </remarks>
 * </doc> * @returns {UI.Canvas}
*/
function addCanvas() {
	//todo
}

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
*/
function message(content, duration, position) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove all user interface elements.
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
 * The stock UI canvas.
 * </summary>
 * </doc> * @returns {UI.Canvas}
*/
function getStockCanvas() {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Button} button
*/
function buttonRemove(button) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @returns {UI.RectTransform}
*/
function buttonGetRectTransform(button) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text for the button.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @returns {UI.Text}
*/
function buttonGetText(button) {
	//todo
}

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
 * @returns {boolean}
*/
function buttonGetClicked(button) {
	//todo
}

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
*/
function buttonSetClicked(button, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @returns {boolean}
*/
function buttonGetVisible(button) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Button} button
 * @param {boolean} value
*/
function buttonSetVisible(button, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Create a new container for user interface elements.
 * </summary>
 *   <param name="visible">Whether the panel is visible.</param>
 * </doc>
 * @param {UI.Canvas} canvas
 * @param {boolean} visible
 * @returns {UI.Panel}
*/
function canvasAddPanel(canvas, visible) {
	//todo
}

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
 * @returns {UI.Text}
*/
function canvasAddText(canvas, content, visible) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Add an input field to the canvas.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {UI.Canvas} canvas
 * @param {boolean} visible
 * @returns {UI.InputField}
*/
function canvasAddInputField(canvas, visible) {
	//todo
}

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
 * @returns {UI.Button}
*/
function canvasAddButton(canvas, content, visible) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
*/
function canvasRemove(canvas) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the canvas.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @returns {UI.RectTransform}
*/
function canvasGetRectTransform(canvas) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @returns {boolean}
*/
function canvasGetVisible(canvas) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Canvas} canvas
 * @param {boolean} value
*/
function canvasSetVisible(canvas, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
*/
function inputFieldRemove(inputField) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @returns {UI.RectTransform}
*/
function inputFieldGetRectTransform(inputField) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @returns {string}
*/
function inputFieldGetValue(inputField) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @param {string} value
*/
function inputFieldSetValue(inputField, value) {
	//todo
}

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
 * @returns {UI.Text}
*/
function inputFieldGetText(inputField) {
	//todo
}

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
 * @returns {boolean}
*/
function inputFieldGetChanged(inputField) {
	//todo
}

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
*/
function inputFieldSetChanged(inputField, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @returns {boolean}
*/
function inputFieldGetVisible(inputField) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.InputField} inputField
 * @param {boolean} value
*/
function inputFieldSetVisible(inputField, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Create a panel within this panel.
 * </summary>
 *   <param name="visible">Whether the new panel is visible.</param>
 * </doc>
 * @param {UI.Panel} panel
 * @param {boolean} visible
 * @returns {UI.Panel}
*/
function panelAddPanel(panel, visible) {
	//todo
}

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
 * @returns {UI.Text}
*/
function panelAddText(panel, content, visible) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Add an input field to the panel.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {UI.Panel} panel
 * @param {boolean} visible
 * @returns {UI.InputField}
*/
function panelAddInputField(panel, visible) {
	//todo
}

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
 * @returns {UI.Button}
*/
function panelAddButton(panel, content, visible) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
*/
function panelRemove(panel) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the panel.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @returns {UI.RectTransform}
*/
function panelGetRectTransform(panel) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @returns {boolean}
*/
function panelGetVisible(panel) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Panel} panel
 * @param {boolean} value
*/
function panelSetVisible(panel, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetPosition(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetPosition(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number, number}}
*/
function rectTransformGetLocalPosition(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number}} value
*/
function rectTransformSetLocalPosition(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetSize(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetSize(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetUpperRight(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetUpperRight(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetLowerLeft(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetLowerLeft(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetAnchor(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetAnchorMax(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetAnchorMax(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetAnchorMin(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetAnchorMin(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number}}
*/
function rectTransformGetPivot(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number}} value
*/
function rectTransformSetPivot(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number, number, number}}
*/
function rectTransformGetRotation(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number, number}} value
*/
function rectTransformSetRotation(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {{number, number, number}}
*/
function rectTransformGetScale(rectTransform) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {{number, number, number}} value
*/
function rectTransformSetScale(rectTransform, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {UI.Text} text
*/
function textRemove(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {UI.RectTransform}
*/
function textGetRectTransform(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {string[]}
*/
function textGetAvailableFonts(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {string}
*/
function textGetContent(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {string} value
*/
function textSetContent(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {string}
*/
function textGetFont(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {string} value
*/
function textSetFont(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {number}
*/
function textGetSize(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {number} value
*/
function textSetSize(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {UI.FontStyle}
*/
function textGetStyle(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {UI.FontStyle} value
*/
function textSetStyle(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {UI.TextAnchor}
*/
function textGetAlignment(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {UI.TextAnchor} value
*/
function textSetAlignment(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {number}
*/
function textGetLineSpacing(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {number} value
*/
function textSetLineSpacing(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {{number, number, number}}
*/
function textGetColor(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {{number, number, number}} value
*/
function textSetColor(text, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @returns {boolean}
*/
function textGetVisible(text) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {UI.Text} text
 * @param {boolean} value
*/
function textSetVisible(text, value) {
	//todo
}
