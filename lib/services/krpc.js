'use strict';
const buildProcedureCall = require('../procedure-call');
const proto = require('../utilities/proto');
const decoders = require('../decoders');
const encoders = require('../encoders');
/**
 * @constructor KRPC
 * @name KRPC
 * @description Main kRPC service, used by clients to interact with basic server functionality.
 * @result {void}
 * @returns {void}
 */

const classMaps = {
    "Expression": {
        "ConstantDouble": {
            "static": "Expression_static_ConstantDouble"
        },
        "ConstantFloat": {
            "static": "Expression_static_ConstantFloat"
        },
        "ConstantInt": {
            "static": "Expression_static_ConstantInt"
        },
        "ConstantBool": {
            "static": "Expression_static_ConstantBool"
        },
        "ConstantString": {
            "static": "Expression_static_ConstantString"
        },
        "Call": {
            "static": "Expression_static_Call"
        },
        "Equal": {
            "static": "Expression_static_Equal"
        },
        "NotEqual": {
            "static": "Expression_static_NotEqual"
        },
        "GreaterThan": {
            "static": "Expression_static_GreaterThan"
        },
        "GreaterThanOrEqual": {
            "static": "Expression_static_GreaterThanOrEqual"
        },
        "LessThan": {
            "static": "Expression_static_LessThan"
        },
        "LessThanOrEqual": {
            "static": "Expression_static_LessThanOrEqual"
        },
        "And": {
            "static": "Expression_static_And"
        },
        "Or": {
            "static": "Expression_static_Or"
        },
        "ExclusiveOr": {
            "static": "Expression_static_ExclusiveOr"
        },
        "Not": {
            "static": "Expression_static_Not"
        },
        "Add": {
            "static": "Expression_static_Add"
        },
        "Subtract": {
            "static": "Expression_static_Subtract"
        },
        "Multiply": {
            "static": "Expression_static_Multiply"
        },
        "Divide": {
            "static": "Expression_static_Divide"
        },
        "Modulo": {
            "static": "Expression_static_Modulo"
        },
        "Power": {
            "static": "Expression_static_Power"
        },
        "LeftShift": {
            "static": "Expression_static_LeftShift"
        },
        "RightShift": {
            "static": "Expression_static_RightShift"
        },
        "Cast": {
            "static": "Expression_static_Cast"
        },
        "Parameter": {
            "static": "Expression_static_Parameter"
        },
        "Function": {
            "static": "Expression_static_Function"
        },
        "Invoke": {
            "static": "Expression_static_Invoke"
        },
        "CreateTuple": {
            "static": "Expression_static_CreateTuple"
        },
        "CreateList": {
            "static": "Expression_static_CreateList"
        },
        "CreateSet": {
            "static": "Expression_static_CreateSet"
        },
        "CreateDictionary": {
            "static": "Expression_static_CreateDictionary"
        },
        "ToList": {
            "static": "Expression_static_ToList"
        },
        "ToSet": {
            "static": "Expression_static_ToSet"
        },
        "Get": {
            "static": "Expression_static_Get"
        },
        "Count": {
            "static": "Expression_static_Count"
        },
        "Sum": {
            "static": "Expression_static_Sum"
        },
        "Max": {
            "static": "Expression_static_Max"
        },
        "Min": {
            "static": "Expression_static_Min"
        },
        "Average": {
            "static": "Expression_static_Average"
        },
        "Select": {
            "static": "Expression_static_Select"
        },
        "Where": {
            "static": "Expression_static_Where"
        },
        "Contains": {
            "static": "Expression_static_Contains"
        },
        "Aggregate": {
            "static": "Expression_static_Aggregate"
        },
        "AggregateWithSeed": {
            "static": "Expression_static_AggregateWithSeed"
        },
        "Concat": {
            "static": "Expression_static_Concat"
        },
        "OrderBy": {
            "static": "Expression_static_OrderBy"
        },
        "All": {
            "static": "Expression_static_All"
        },
        "Any": {
            "static": "Expression_static_Any"
        }
    },
    "Type": {
        "Double": {
            "static": "Type_static_Double"
        },
        "Float": {
            "static": "Type_static_Float"
        },
        "Int": {
            "static": "Type_static_Int"
        },
        "Bool": {
            "static": "Type_static_Bool"
        },
        "String": {
            "static": "Type_static_String"
        }
    }
}
/**
 * @augments KRPC
 * @description Returns the identifier for the current client.
 * @result {bytes}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getClientId = function getClientId() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetClientID', encodedArguments),
        decode: decoders.bytes
    };
};

/**
 * @augments KRPC
 * @description Returns the name of the current client.
 * This is an empty string if the client has no name.
 * @result {string}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getClientName = function getClientName() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetClientName', encodedArguments),
        decode: decoders.string
    };
};

/**
 * @augments KRPC
 * @description Returns some information about the server, such as the version.
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getStatus = function getStatus() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetStatus', encodedArguments),
        decode: proto.Status
    };
};

/**
 * @augments KRPC
 * @description Returns information on all services, procedures, classes, properties etc. provided by the server.
 * Can be used by client libraries to automatically create functionality such as stubs.
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getServices = function getServices() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'GetServices', encodedArguments),
        decode: proto.Services
    };
};

/**
 * @augments KRPC
 * @description Add a streaming request and return its identifier.
 * @param {Object} call
 * @param {boolean} start
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.addStream = function addStream(call, start) {
    let encodedArguments = [
        {buffer: proto.ProcedureCall.encode(call).finish()},
        encoders.bool(start)
    ];
    return {
        call: buildProcedureCall('KRPC', 'AddStream', encodedArguments),
        decode: proto.Stream
    };
};

/**
 * @augments KRPC
 * @description Start a previously added streaming request.
 * @param {number} id
 * @result {void}
 * @returns {void}
 */
module.exports.startStream = function startStream(id) {
    let encodedArguments = [
        encoders.uInt64(id)
    ];
    return {
        call: buildProcedureCall('KRPC', 'StartStream', encodedArguments),
        decode: null
    };
};

/**
 * @augments KRPC
 * @description Set the update rate for a stream in Hz.
 * @param {number} id
 * @param {number} rate
 * @result {void}
 * @returns {void}
 */
module.exports.setStreamRate = function setStreamRate(id, rate) {
    let encodedArguments = [
        encoders.uInt64(id),
        encoders.float(rate)
    ];
    return {
        call: buildProcedureCall('KRPC', 'SetStreamRate', encodedArguments),
        decode: null
    };
};

/**
 * @augments KRPC
 * @description Remove a streaming request.
 * @param {number} id
 * @result {void}
 * @returns {void}
 */
module.exports.removeStream = function removeStream(id) {
    let encodedArguments = [
        encoders.uInt64(id)
    ];
    return {
        call: buildProcedureCall('KRPC', 'RemoveStream', encodedArguments),
        decode: null
    };
};

/**
 * @augments KRPC
 * @description Create an event from a server side expression.
 * @param {Long} expression - A long value representing the id for the KRPC.Expression
 * @result {Object}
 * @returns {{call :Object, decode: function}}
 */
module.exports.addEvent = function addEvent(expression) {
    let encodedArguments = [
        encoders.uInt64(expression)
    ];
    return {
        call: buildProcedureCall('KRPC', 'AddEvent', encodedArguments),
        decode: proto.Event
    };
};

/**
 * @augments KRPC
 * @description A list of RPC clients that are currently connected to the server.
 * Each entry in the list is a clients identifier, name and address.
 * @result {{bytes, string, string}[]}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getClients = function getClients() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_Clients', encodedArguments),
        decode: {
            isCollection: true,
            decode: proto.List,
            subTypes: [
                {
                    isCollection: true,
                    decode: proto.Tuple,
                    subTypes: [
                        decoders.bytes,
                        decoders.string,
                        decoders.string
                    ]
                }
            ]
        }
    };
};

/**
 * @augments KRPC
 * @description Get the current game scene.
 * @result {Long} A long value representing the id for the KRPC.GameScene
 * @returns {{call :Object, decode: function}}
 */
module.exports.getCurrentGameScene = function getCurrentGameScene() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_CurrentGameScene', encodedArguments),
        decode: decoders.enum({
            0: 'SpaceCenter',
            1: 'Flight',
            2: 'TrackingStation',
            3: 'EditorVAB',
            4: 'EditorSPH'
        })
    };
};

/**
 * @augments KRPC
 * @description Whether the game is paused.
 * @result {boolean}
 * @returns {{call :Object, decode: function}}
 */
module.exports.getPaused = function getPaused() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'get_Paused', encodedArguments),
        decode: decoders.bool
    };
};

/**
 * @augments KRPC
 * @description Whether the game is paused.
 * @param {boolean} value
 * @result {void}
 * @returns {void}
 */
module.exports.setPaused = function setPaused(value) {
    let encodedArguments = [
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'set_Paused', encodedArguments),
        decode: null
    };
};

/**
 * @augments KRPC
 * @description A constant value of double precision floating point type.
 * @param {number} value
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConstantDouble = function expressionStaticConstantDouble(value) {
    let encodedArguments = [
        encoders.double(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ConstantDouble', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A constant value of single precision floating point type.
 * @param {number} value
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConstantFloat = function expressionStaticConstantFloat(value) {
    let encodedArguments = [
        encoders.float(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ConstantFloat', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A constant value of integer type.
 * @param {number} value
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConstantInt = function expressionStaticConstantInt(value) {
    let encodedArguments = [
        encoders.sInt32(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ConstantInt', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A constant value of boolean type.
 * @param {boolean} value
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConstantBool = function expressionStaticConstantBool(value) {
    let encodedArguments = [
        encoders.bool(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ConstantBool', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A constant value of string type.
 * @param {string} value
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConstantString = function expressionStaticConstantString(value) {
    let encodedArguments = [
        encoders.string(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ConstantString', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description An RPC call.
 * @param {Object} call
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCall = function expressionStaticCall(call) {
    let encodedArguments = [
        {buffer: proto.ProcedureCall.encode(call).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Call', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Equality comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticEqual = function expressionStaticEqual(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Equal', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Inequality comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticNotEqual = function expressionStaticNotEqual(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_NotEqual', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Greater than numerical comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticGreaterThan = function expressionStaticGreaterThan(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_GreaterThan', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Greater than or equal numerical comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticGreaterThanOrEqual = function expressionStaticGreaterThanOrEqual(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_GreaterThanOrEqual', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Less than numerical comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticLessThan = function expressionStaticLessThan(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_LessThan', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Less than or equal numerical comparison.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticLessThanOrEqual = function expressionStaticLessThanOrEqual(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_LessThanOrEqual', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Boolean and operator.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAnd = function expressionStaticAnd(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_And', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Boolean or operator.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticOr = function expressionStaticOr(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Or', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Boolean exclusive-or operator.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticExclusiveOr = function expressionStaticExclusiveOr(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ExclusiveOr', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Boolean negation operator.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticNot = function expressionStaticNot(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Not', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical addition.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAdd = function expressionStaticAdd(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Add', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical subtraction.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticSubtract = function expressionStaticSubtract(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Subtract', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical multiplication.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticMultiply = function expressionStaticMultiply(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Multiply', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical division.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticDivide = function expressionStaticDivide(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Divide', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical modulo operator.
 * 
 * 
 * Returns: The remainder of arg0 divided by arg1
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticModulo = function expressionStaticModulo(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Modulo', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Numerical power operator.
 * 
 * 
 * Returns: arg0 raised to the power of arg1, with type of arg0
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticPower = function expressionStaticPower(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Power', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Bitwise left shift.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticLeftShift = function expressionStaticLeftShift(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_LeftShift', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Bitwise right shift.
 * @param {Long} arg0 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticRightShift = function expressionStaticRightShift(arg0, arg1) {
    let encodedArguments = [
        encoders.uInt64(arg0),
        encoders.uInt64(arg1)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_RightShift', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Perform a cast to the given type.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} type - A long value representing the id for the KRPC.Type
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCast = function expressionStaticCast(arg, type) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(type)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Cast', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A named parameter of type double.
 * Returns: A named parameter.
 * @param {string} name - The name of the parameter.
 * @param {Long} type - A long value representing the id for the KRPC.Type
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticParameter = function expressionStaticParameter(name, type) {
    let encodedArguments = [
        encoders.string(name),
        encoders.uInt64(type)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Parameter', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A function.
 * Returns: A function.
 * @param {Long[]} parameters - A list of long values representing the ids for the KRPC.Expression
 * @param {Long} body - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticFunction = function expressionStaticFunction(parameters, body) {
    let encodedArguments = [
        {buffer: proto.List.encode(parameters).finish()},
        encoders.uInt64(body)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Function', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description A function call.
 * Returns: A function call.
 * @param {Long} function_ - A long value representing the id for the KRPC.Expression
 * @param {key : Long} args - The arguments to call the function with.
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticInvoke = function expressionStaticInvoke(function_, args) {
    let encodedArguments = [
        encoders.uInt64(function_),
        {buffer: proto.Dictionary.encode(args).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Invoke', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Construct a tuple.
 * Returns: The tuple.
 * @param {Long[]} elements - A list of long values representing the ids for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCreateTuple = function expressionStaticCreateTuple(elements) {
    let encodedArguments = [
        {buffer: proto.List.encode(elements).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_CreateTuple', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Construct a list.
 * Returns: The list.
 * @param {Long[]} values - A list of long values representing the ids for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCreateList = function expressionStaticCreateList(values) {
    let encodedArguments = [
        {buffer: proto.List.encode(values).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_CreateList', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Construct a set.
 * Returns: The set.
 * @param {Long[]} values - The values. Should all be of the same type.
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCreateSet = function expressionStaticCreateSet(values) {
    let encodedArguments = [
        {buffer: proto.Set.encode(values).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_CreateSet', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Construct a dictionary, from a list of corresponding keys and values.
 * Returns: The dictionary.
 * @param {Long[]} keys - A list of long values representing the ids for the KRPC.Expression
 * @param {Long[]} values - A list of long values representing the ids for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCreateDictionary = function expressionStaticCreateDictionary(keys, values) {
    let encodedArguments = [
        {buffer: proto.List.encode(keys).finish()},
        {buffer: proto.List.encode(values).finish()}
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_CreateDictionary', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Convert a collection to a list.
 * Returns: The collection as a list.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticToList = function expressionStaticToList(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ToList', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Convert a collection to a set.
 * Returns: The collection as a set.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticToSet = function expressionStaticToSet(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_ToSet', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Access an element in a tuple, list or dictionary.
 * Returns: The element.
 * 
 * <param name="index">The index of the element to access.
 * A zero indexed integer for a tuple or list, or a key for a dictionary.</param>
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} index - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticGet = function expressionStaticGet(arg, index) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(index)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Get', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Number of elements in a collection.
 * Returns: The number of elements in the collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticCount = function expressionStaticCount(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Count', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Sum all elements of a collection.
 * Returns: The sum of the elements in the collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticSum = function expressionStaticSum(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Sum', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Maximum of all elements in a collection.
 * Returns: The maximum elements in the collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticMax = function expressionStaticMax(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Max', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Minimum of all elements in a collection.
 * Returns: The minimum elements in the collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticMin = function expressionStaticMin(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Min', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Minimum of all elements in a collection.
 * Returns: The minimum elements in the collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAverage = function expressionStaticAverage(arg) {
    let encodedArguments = [
        encoders.uInt64(arg)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Average', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Run a function on every element in the collection.
 * Returns: The modified collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} func - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticSelect = function expressionStaticSelect(arg, func) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(func)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Select', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Run a function on every element in the collection.
 * Returns: The modified collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} func - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticWhere = function expressionStaticWhere(arg, func) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(func)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Where', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Determine if a collection contains a value.
 * Returns: Whether the collection contains a value.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} value - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticContains = function expressionStaticContains(arg, value) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(value)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Contains', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Applies an accumulator function over a sequence.
 * Returns: The accumulated value.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} func - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAggregate = function expressionStaticAggregate(arg, func) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(func)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Aggregate', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Applies an accumulator function over a sequence, with a given seed.
 * Returns: The accumulated value.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} seed - A long value representing the id for the KRPC.Expression
 * @param {Long} func - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAggregateWithSeed = function expressionStaticAggregateWithSeed(arg, seed, func) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(seed),
        encoders.uInt64(func)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_AggregateWithSeed', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Concatenate two sequences.
 * Returns: The first sequence followed by the second sequence.
 * @param {Long} arg1 - A long value representing the id for the KRPC.Expression
 * @param {Long} arg2 - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticConcat = function expressionStaticConcat(arg1, arg2) {
    let encodedArguments = [
        encoders.uInt64(arg1),
        encoders.uInt64(arg2)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Concat', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Order a collection using a key function.
 * Returns: The ordered collection.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} key - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticOrderBy = function expressionStaticOrderBy(arg, key) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(key)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_OrderBy', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Determine whether all items in a collection satisfy a boolean predicate.
 * Returns: Whether all items satisfy the predicate.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} predicate - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAll = function expressionStaticAll(arg, predicate) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(predicate)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_All', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Determine whether any item in a collection satisfies a boolean predicate.
 * Returns: Whether any item satisfies the predicate.
 * @param {Long} arg - A long value representing the id for the KRPC.Expression
 * @param {Long} predicate - A long value representing the id for the KRPC.Expression
 * @result {Long} A long value representing the id for the KRPC.Expression
 * @returns {{call :Object, decode: function}}
 */
module.exports.expressionStaticAny = function expressionStaticAny(arg, predicate) {
    let encodedArguments = [
        encoders.uInt64(arg),
        encoders.uInt64(predicate)
    ];
    return {
        call: buildProcedureCall('KRPC', 'Expression_static_Any', encodedArguments),
        decode: {
            isObject: true,
            type: 'Expression',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Double type.
 * @result {Long} A long value representing the id for the KRPC.Type
 * @returns {{call :Object, decode: function}}
 */
module.exports.typeStaticDouble = function typeStaticDouble() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'Type_static_Double', encodedArguments),
        decode: {
            isObject: true,
            type: 'Type',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Float type.
 * @result {Long} A long value representing the id for the KRPC.Type
 * @returns {{call :Object, decode: function}}
 */
module.exports.typeStaticFloat = function typeStaticFloat() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'Type_static_Float', encodedArguments),
        decode: {
            isObject: true,
            type: 'Type',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Int type.
 * @result {Long} A long value representing the id for the KRPC.Type
 * @returns {{call :Object, decode: function}}
 */
module.exports.typeStaticInt = function typeStaticInt() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'Type_static_Int', encodedArguments),
        decode: {
            isObject: true,
            type: 'Type',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description Bool type.
 * @result {Long} A long value representing the id for the KRPC.Type
 * @returns {{call :Object, decode: function}}
 */
module.exports.typeStaticBool = function typeStaticBool() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'Type_static_Bool', encodedArguments),
        decode: {
            isObject: true,
            type: 'Type',
            decode: decoders.uInt64
        }
    };
};

/**
 * @augments KRPC
 * @description String type.
 * @result {Long} A long value representing the id for the KRPC.Type
 * @returns {{call :Object, decode: function}}
 */
module.exports.typeStaticString = function typeStaticString() {
    let encodedArguments = [];
    return {
        call: buildProcedureCall('KRPC', 'Type_static_String', encodedArguments),
        decode: {
            isObject: true,
            type: 'Type',
            decode: decoders.uInt64
        }
    };
};
