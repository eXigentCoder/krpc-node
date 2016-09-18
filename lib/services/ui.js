/**
 * <doc>
 *   <summary>
 * Provides functionality for drawing and interacting with in-game user interface elements.
 * </summary>
 *   <remarks>
 * For drawing 3D objects in the flight scene, see the Drawing service.
 * </remarks>
 * </doc>
*/


/**
 * <doc>
 *   <summary>
 * Add a new canvas.
 * </summary>
 *   <remarks>
 * If you want to add UI elements to KSPs stock UI canvas, use <see cref="M:UI.StockCanvas" />.
 * </remarks>
 * </doc> * @returns {Object}

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
 * @param {Object} position
*/
function message(undefined) {
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
function clear(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The stock UI canvas.
 * </summary>
 * </doc> * @returns {Object}

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
 * @param {Object} this
*/
function buttonRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function buttonGetRectTransform(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text for the button.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function buttonGetText(undefined) {
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
 * @param {Object} this * @returns {boolean}

*/
function buttonGetClicked(undefined) {
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
 * @param {Object} this
 * @param {boolean} value
*/
function buttonSetClicked(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function buttonGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function buttonSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Create a new container for user interface elements.
 * </summary>
 *   <param name="visible">Whether the panel is visible.</param>
 * </doc>
 * @param {Object} this
 * @param {boolean} visible * @returns {Object}

*/
function canvasAddPanel(undefined) {
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
 * @param {Object} this
 * @param {string} content
 * @param {boolean} visible * @returns {Object}

*/
function canvasAddText(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Add an input field to the canvas.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {Object} this
 * @param {boolean} visible * @returns {Object}

*/
function canvasAddInputField(undefined) {
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
 * @param {Object} this
 * @param {string} content
 * @param {boolean} visible * @returns {Object}

*/
function canvasAddButton(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function canvasRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the canvas.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function canvasGetRectTransform(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function canvasGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function canvasSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function inputFieldRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the input field.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function inputFieldGetRectTransform(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function inputFieldGetValue(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The value of the input field.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function inputFieldSetValue(undefined) {
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
 * @param {Object} this * @returns {Object}

*/
function inputFieldGetText(undefined) {
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
 * @param {Object} this * @returns {boolean}

*/
function inputFieldGetChanged(undefined) {
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
 * @param {Object} this
 * @param {boolean} value
*/
function inputFieldSetChanged(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function inputFieldGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function inputFieldSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Create a panel within this panel.
 * </summary>
 *   <param name="visible">Whether the new panel is visible.</param>
 * </doc>
 * @param {Object} this
 * @param {boolean} visible * @returns {Object}

*/
function panelAddPanel(undefined) {
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
 * @param {Object} this
 * @param {string} content
 * @param {boolean} visible * @returns {Object}

*/
function panelAddText(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Add an input field to the panel.
 * </summary>
 *   <param name="visible">Whether the input field is visible.</param>
 * </doc>
 * @param {Object} this
 * @param {boolean} visible * @returns {Object}

*/
function panelAddInputField(undefined) {
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
 * @param {Object} this
 * @param {string} content
 * @param {boolean} visible * @returns {Object}

*/
function panelAddButton(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function panelRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the panel.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function panelGetRectTransform(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function panelGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function panelSetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetLocalPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles pivot point relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetLocalPosition(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Width and height of the rectangle.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetUpperRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles upper right corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetUpperRight(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetLowerLeft(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Position of the rectangles lower left corner relative to the anchors.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetLowerLeft(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the minimum and maximum anchor points as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetAnchor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetAnchorMax(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the lower left corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetAnchorMax(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetAnchorMin(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The anchor point for the upper right corner of the rectangle defined as a fraction of the size of the parent rectangle.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetAnchorMin(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetPivot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Location of the pivot point around which the rectangle rotates, defined as a fraction of the size of the rectangle itself.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetPivot(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Rotation, as a quaternion, of the object around its pivot point.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetRotation(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function rectTransformGetScale(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Scale factor applied to the object in the x, y and z dimensions.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function rectTransformSetScale(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Remove the UI object.
 * </summary>
 * </doc>
 * @param {Object} this
*/
function textRemove(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The rect transform for the text.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function textGetRectTransform(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * A list of all available fonts.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function textGetAvailableFonts(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function textGetContent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * The text string
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function textSetContent(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Object} this * @returns {string}

*/
function textGetFont(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Name of the font
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {string} value
*/
function textSetFont(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function textGetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font size.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function textSetSize(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function textGetStyle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Font style.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function textSetStyle(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function textGetAlignment(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Alignment.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function textSetAlignment(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {number}

*/
function textGetLineSpacing(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Line spacing.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {number} value
*/
function textSetLineSpacing(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this * @returns {Object}

*/
function textGetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Set the color
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {Object} value
*/
function textSetColor(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this * @returns {boolean}

*/
function textGetVisible(undefined) {
	//todo
}

/**
 * <doc>
 *   <summary>
 * Whether the UI object is visible.
 * </summary>
 * </doc>
 * @param {Object} this
 * @param {boolean} value
*/
function textSetVisible(undefined) {
	//todo
}
