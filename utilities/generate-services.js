'use strict';
const Client = require('../lib/client');
const fs = require('fs');
const async = require('async');
const _ = require('lodash');
const os = require('os');
const util = require('util');
let eol = os.EOL;
let client = Client();
client.on('open', onOpen);
client.on('error', onError);
client.on('message', onMessage);

function onOpen() {
    client.send(client.apis.krpc.services.get());
}

function onError(err) {
    throw err;
}

function onMessage(response) {
    let serviceResponse = response.results[0];
    serviceResponse = Client.apis.krpc.services.decode(serviceResponse.value);
    async.eachSeries(serviceResponse.services, createService, function (err) {
        if (err) {
            throw err;
        }
        client.socket.close(1000);
    });
}

function createService(service, callback) {
    let fileName = _.kebabCase(service.name) + ".js";
    let filePath = './lib/services/' + fileName;
    fs.writeFile(filePath, buildContent(service), null, callback);
}

function buildContent(service) {
    let content = processDocumentation(service);
    content += eol;
    service.procedures.forEach(function (procedure) {
        content += getProcedureCode(procedure, service);
    });
    return content;
}

/**
 *
 * @param procedure
 * @param service
 * @returns {*}
 */
function getProcedureCode(procedure, service) {
    let content = eol;
    content += processDocumentation(procedure);
    content += 'function ' + _.camelCase(procedure.name) + '(' + addParameter(procedure.parameters) + ') {' + eol;
    content += '\t//todo' + eol;
    content += '}' + eol;
    return content;
}

function processDocumentation(procedure) {
    let content = '/**' + eol;
    content += ' * ' + procedure.documentation.replace(/\n/g, eol + ' * ');
    if (procedure.parameters && procedure.parameters.length !== 0) {
        procedure.parameters.forEach(function (param) {
            content += documentParam(param);
        });
        content += eol;
    }
    if (procedure.return_type) {
        content += documentReturnType(procedure.return_type, procedure);
    }
    content += '*/' + eol;
    return content;
}

function documentParam(param) {
    return eol + ' * @param ' + getTypeStringFromCode(param.type, null, param) + ' ' + getParamName(param);
}

function documentReturnType(returnType, procedure) {
    return ' * @returns ' + getTypeStringFromCode(returnType, null, procedure) + eol;
}

function addParameter(parameters) {
    if (!parameters || parameters.length === 0) {
        return '';
    }
    let content = '';
    let paramCount = parameters.length;
    parameters.forEach(function (param, index) {
        content += getParamName(param);
        if (index < paramCount - 1) {
            content += ', ';
        }
    });
    return content;
}

const typeCodeMappings = {
    // Values
    0: {originalName: 'NONE', dotNet: 'None', jsDoc: 'void'},
    1: {originalName: 'DOUBLE', dotNet: 'Double', jsDoc: 'number'},
    2: {originalName: 'FLOAT', dotNet: 'Float', jsDoc: 'number'},
    3: {originalName: 'SINT32', dotNet: 'Sint32', jsDoc: 'number'},
    4: {originalName: 'SINT64', dotNet: 'Sint64', jsDoc: 'number'},
    5: {originalName: 'UINT32', dotNet: 'Uint32', jsDoc: 'number'},
    6: {originalName: 'UINT64', dotNet: 'Uint64', jsDoc: 'number'},
    7: {originalName: 'BOOL', dotNet: 'Bool', jsDoc: 'boolean'},
    8: {originalName: 'STRING', dotNet: 'String', jsDoc: 'string'},
    9: {originalName: 'BYTES', dotNet: 'Bytes', jsDoc: 'bytes'},
    // Objects
    100: {originalName: 'CLASS', dotNet: 'Class', jsDoc: 'Object'},
    101: {originalName: 'ENUMERATION', dotNet: 'Enumeration', jsDoc: 'Object'},
    //  Messages
    200: {originalName: 'REQUEST', dotNet: 'Request', jsDoc: 'Object'},
    201: {originalName: 'STREAM_UPDATE', dotNet: 'StreamUpdate', jsDoc: 'Object'},
    202: {originalName: 'STREAM', dotNet: 'Stream', jsDoc: 'Object'},
    203: {originalName: 'STATUS', dotNet: 'Status', jsDoc: 'Object'},
    204: {originalName: 'SERVICES', dotNet: 'Services', jsDoc: 'Object'},
    // Collections
    300: {originalName: 'TUPLE', dotNet: 'Tuple', jsDoc: 'Object'},
    301: {originalName: 'LIST', dotNet: 'List', jsDoc: 'Object'},
    302: {originalName: 'SET', dotNet: 'Set', jsDoc: 'Object'},
    303: {originalName: 'DICTIONARY', dotNet: 'Dictionary', jsDoc: 'Object'}
};

function getTypeStringFromCode(type, doNotAddBraces, param) {
    switch (type.code) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
            return processValueType(type, doNotAddBraces, param);
        case 100:
        case 101:
            return processObjectType(type, doNotAddBraces, param);
        case 300:
            return processTypeCode300(type, doNotAddBraces, param);
        case 301:
            return processTypeCode301(type, doNotAddBraces, param);
        case 303:
            return processTypeCode303(type, doNotAddBraces, param);
        default:
            todo(type, doNotAddBraces, param);
            throw new Error(util.format("Unable to determine type string for type for %j", type));
    }
}

function getParamName(param) {
    let name = param.name;
    if (name === 'this') {
        name = _.camelCase(param.type.name);
    }
    if (!name) {
        throw new Error('Name was null');
    }
    return name;
}

function processValueType(type, doNotAddBraces) {
    return addBracesIfRequired(typeCodeMappings[type.code].jsDoc, doNotAddBraces);
}

function processObjectType(type, doNotAddBraces) {
    return addBracesIfRequired(type.service + '.' + type.name, doNotAddBraces);
}

function processTypeCode300(type, doNotAddBraces, param) {
    let typeString = '{';
    let length = type.types.length;
    type.types.forEach(function (innerType, index) {
        typeString += getTypeStringFromCode(innerType, true, param);
        if (index < length - 1) {
            typeString += ', ';
        }
    });
    typeString += '}';
    return addBracesIfRequired(typeString, doNotAddBraces);
}

function processTypeCode301(type, doNotAddBraces, param) {
    let typeString = '';
    let length = type.types.length;
    type.types.forEach(function (innerType, index) {
        typeString += getTypeStringFromCode(innerType, true, param) + '[]';
        if (index < length - 1) {
            typeString += ', ';
        }
    });
    return addBracesIfRequired(typeString, doNotAddBraces);
}

function addBracesIfRequired(typeString, doNotAddBraces) {
    if (doNotAddBraces) {
        return typeString;
    }
    return '{' + typeString + '}';
}

function processTypeCode303(type, doNotAddBraces, param) {
    let length = type.types.length;
    if (length !== 2) {
        throw new Error("Dictionary should be key-value pair");
    }
    if (type.types[0].code !== 8) {
        throw new Error("Expected dictionary key to be a string");
    }
    let typeString = 'key : ' + getTypeStringFromCode(type.types[1], true, param);
    return addBracesIfRequired(typeString, doNotAddBraces);
}

function todo(type, doNotAddBraces, param) {
    console.log(type.code, type, param);
}