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
function buttonRemove(this) {
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
function buttonGetRectTransform(this) {
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
function buttonGetText(this) {
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
function buttonGetClicked(this) {
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
function buttonSetClicked(this, value) {
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
function buttonGetVisible(this) {
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
function buttonSetVisible(this, value) {
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
function canvasAddPanel(this, visible) {
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
function canvasAddText(this, content, visible) {
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
function canvasAddInputField(this, visible) {
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
function canvasAddButton(this, content, visible) {
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
function canvasRemove(this) {
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
function canvasGetRectTransform(this) {
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
function canvasGetVisible(this) {
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
function canvasSetVisible(this, value) {
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
function inputFieldRemove(this) {
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
function inputFieldGetRectTransform(this) {
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
function inputFieldGetValue(this) {
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
function inputFieldSetValue(this, value) {
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
function inputFieldGetText(this) {
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
function inputFieldGetChanged(this) {
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
function inputFieldSetChanged(this, value) {
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
function inputFieldGetVisible(this) {
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
function inputFieldSetVisible(this, value) {
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
function panelAddPanel(this, visible) {
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
function panelAddText(this, content, visible) {
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
function panelAddInputField(this, visible) {
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
function panelAddButton(this, content, visible) {
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
function panelRemove(this) {
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
function panelGetRectTransform(this) {
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
function panelGetVisible(this) {
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
function panelSetVisible(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetPosition(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetLocalPosition(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetLocalPosition(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetSize(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetSize(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetUpperRight(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetUpperRight(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetLowerLeft(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetLowerLeft(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetAnchor(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetAnchorMax(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetAnchorMax(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetAnchorMin(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetAnchorMin(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetPivot(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetPivot(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetRotation(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetRotation(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @returns {Object}
*/
function rectTransformGetScale(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {UI.RectTransform} rectTransform
 * @param {Object} value
*/
function rectTransformSetScale(this, value) {
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
function textRemove(this) {
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
function textGetRectTransform(this) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {UI.Text} text
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
 * @param {UI.Text} text
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
 * @param {UI.Text} text
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
 * @param {UI.Text} text
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
 * @param {UI.Text} text
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
 * @param {UI.Text} text
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
 * @param {UI.Text} text
 * @param {number} value
*/
function textSetSize(this, value) {
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
function textGetStyle(this) {
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
function textSetStyle(this, value) {
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
function textGetAlignment(this) {
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
function textSetAlignment(this, value) {
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
function textGetLineSpacing(this) {
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
function textSetLineSpacing(this, value) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {UI.Text} text
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
 * @param {UI.Text} text
 * @param {Object} value
*/
function textSetColor(this, value) {
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
function textGetVisible(this) {
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
function textSetVisible(this, value) {
	//todo
}
