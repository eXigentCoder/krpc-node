'use strict';
const Client = require('../lib/client');
const fs = require('fs');
const async = require('async');
const _ = require('lodash');
const os = require('os');
const util = require('util');
const procCallName = 'buildProcedureCall';
const decodersName = 'decoders';
const encodersName = 'encoders';
let eol = os.EOL;
let client = Client();
client.rpc.on('open', onOpen);
client.rpc.on('error', onError);
client.rpc.on('message', onMessage);
var enums = {};
function onOpen() {
    client.rpc.send(client.services.krpc.getServices());
}

function onError(err) {
    throw err;
}

function onMessage(response) {
    let serviceResponse = response.results[0];
    if (serviceResponse.error) {
        throw new Error(serviceResponse.error);
    }
    serviceResponse.value.services.forEach(function (service) {
        enums[service.name] = service.enumerations;
    });
    async.eachSeries(serviceResponse.value.services, createService, function (err) {
        if (err) {
            throw err;
        }
        client.rpc.socket.close(1000);
        process.exit(0);
    });
}

function createService(service, callback) {
    let fileName = _.kebabCase(service.name) + ".js";
    let filePath = './lib/services/' + fileName;
    fs.writeFile(filePath, buildContent(service), null, callback);
}

function buildContent(service) {
    let content = requires();
    content += processDocumentation(service, true);
    content += eol;
    service.procedures.forEach(function (procedure) {
        content += getProcedureCode(procedure, service);
    });
    return content;
}

function requires() {
    let content = "'use strict';" + eol;
    content += 'const ' + procCallName + ' = require(\'../procedure-call\');' + eol;
    content += 'const proto = require(\'../utilities/proto\');' + eol;
    content += 'const ' + decodersName + ' = require(\'../decoders\');' + eol;
    content += 'const ' + encodersName + ' = require(\'../encoders\');' + eol;
    return content;
}

function getProcedureCode(procedure, service) {
    let content = eol;
    content += processDocumentation(procedure, false, service.name);
    let paramString = addParameter(procedure.parameters);
    let procName = _.camelCase(procedure.name);
    content += 'module.exports.' + procName + ' = function ' + procName + '(' + paramString + ') {' + eol;
    content += '    let encodedArguments = ' + getEncodersArray(procedure.parameters, service) + ';' + eol;
    content += '    return {' + eol;
    content += '        call: ' + procCallName + '(\'' + service.name + '\', \'' + procedure.name + '\', encodedArguments),' + eol;
    content += '        decode: ' + getDecodeFn(procedure, service) + eol;
    content += '    };' + eol;
    content += '};' + eol;
    return content;
}

function processDocumentation(procedureOrService, isService, serviceName) {
    let content = '/**' + eol;
    if (isService) {
        content += ' * @constructor ' + procedureOrService.name + eol;
        content += ' * @name ' + procedureOrService.name + eol;
    } else {
        content += ' * @augments ' + serviceName + eol;
    }
    let doc = procedureOrService.documentation
        .replace(/<doc>\s/g, '@description ')
        .replace(/<\/doc>/g, '')
        .replace(/\s<summary>\s/g, ' ')
        .replace(/<\/summary>\s/g, '')
        .replace(/\s<remarks>\s/g, '\n ')
        .replace(/<\/remarks>\s/g, '')
        .replace(/<param.*<\/param>/g, '')
        .replace(/<see cref="/g, '{@link ')
        .replace(/" \/>/g, '}');
    doc = doc.trim().replace(/\n/g, eol + ' * ');
    content += ' * ' + doc;
    if (procedureOrService.parameters && procedureOrService.parameters.length !== 0) {
        content += eol;
        let paramDictionary = buildParamDescriptionDictionary(procedureOrService.documentation);
        procedureOrService.parameters.forEach(function (param) {
            content += documentParam(param, paramDictionary, procedureOrService) + eol;
        });
    } else {
        content += eol;
    }
    if (procedureOrService.return_type) {
        content += _.trimEnd(documentResultType(procedureOrService.return_type, procedureOrService)) + eol;
        content += ' * @returns {{call :Object, decode: function}}' + eol;
    } else {
        content += ' * @result {void}' + eol;
        content += ' * @returns {void}' + eol;
    }
    content += '*/' + eol;
    return content;
}

function documentParam(param, paramDictionary, procedureOrService) {
    let typeString = getTypeStringFromCode(param.type, null, param);
    let name = getParamName(param);
    let options = {
        type: param.type,
        paramDictionary: paramDictionary,
        paramName: name
    };
    let description = getParamDescription(options);
    if (description !== '') {
        return ' * @param ' + typeString + ' ' + name + ' - ' + description;
    }
    return ' * @param ' + typeString + ' ' + name;
}

function documentResultType(returnType, procedureOrService) {
    let typeString = getTypeStringFromCode(returnType, null, procedureOrService);
    let options = {
        type: returnType
    };
    let description = getParamDescription(options);
    return ' * @result ' + typeString + ' ' + description;
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
            return processValueType(type, doNotAddBraces, param);
        case 100:
        case 101:
            return processObjectType(type, doNotAddBraces, param);
        case 300:
            return processTypeCode300(type, doNotAddBraces, param);
        case 301:
        case 302:
            return processTypeCode301or302(type, doNotAddBraces, param);
        case 303:
            return processTypeCode303(type, doNotAddBraces, param);
        default:
            throw new Error(util.format("Unable to determine type string for type for %j %j", type, param));
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
    return addBracesIfRequired('Long', doNotAddBraces);
}

const allowedCodes = [100, 101];
function getParamDescription(options) {
    if (options.type.code === 301 && options.type.types.length === 1) {
        let newOptions = {
            type: options.type.types[0],
            isList: true,
            paramDictionary: options.paramDictionary,
            paramName: options.paramName
        };
        return getParamDescription(newOptions);
    }
    if (allowedCodes.indexOf(options.type.code) < 0) {
        if (options.paramName && options.paramDictionary) {
            return options.paramDictionary[options.paramName] || '';
        }
        return '';
    }
    let cSharpName = options.type.service + '.' + options.type.name;
    if (options.isList) {
        return util.format('A list of long values representing the ids for the', cSharpName);
    }
    return util.format('A long value representing the id for the', cSharpName);
}

function buildParamDescriptionDictionary(documentation) {
    let parts = documentation.split('<param name=');
    if (parts.length === 1) {
        return '';
    }
    parts.splice(0, 1);
    let result = {};
    parts.forEach(function (part) {
        let subParts = part.split('">');
        if (subParts.length < 2) {
            throw new Error("Invalid", documentation);
        }
        let name = subParts[0].replace('"', '');
        var descriptionParts = subParts.slice(1, subParts.length);
        let description = descriptionParts.join().split('</param>')[0];
        result[name] = description;
    });
    return result;
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

function processTypeCode301or302(type, doNotAddBraces, param) {
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

function getDecodeFn(procedure, service) {
    if (!procedure.return_type) {
        return 'null';
    }
    switch (procedure.return_type.code) {
        case 0:
            return 'null';
        case 1:
            return decodersName + '.double';
        case 2:
            return decodersName + '.float';
        case 3:
            return decodersName + '.sInt32';
        case 4:
            return decodersName + '.sInt64';
        case 5:
            return decodersName + '.uInt32';
        case 6:
            return decodersName + '.uInt64';
        case 7:
            return decodersName + '.bool';
        case 8:
            return decodersName + '.string';
        case 9:
            return decodersName + '.bytes';
        case 100:
            return decodersName + '.uInt64';
        case 101:
            return getEnumFunction(decodersName, procedure.return_type);
        case 200:
            return 'proto.ProcedureCall';
        case 201:
            return 'proto.Stream';
        case 202:
            return 'proto.Status';
        case 203:
            return 'proto.Services';
        case 300:
            return 'proto.Tuple';
        case 301:
            return 'proto.List';
        case 302:
            return 'proto.Set';
        case 303:
            return 'proto.Dictionary';
        default:
            throw new Error(util.format("Unable to determine decoder type string for type for %j %j", procedure.return_type, service));
    }
}

function getEncodersArray(parameters, service) {
    if (parameters.length === 0) {
        return '[]';
    }
    let content = '[' + eol;
    let fnArray = parameters.map(async.apply(getEncodeFnForParam, service));
    content += fnArray.join(',' + eol);
    content += eol + '    ]';
    return content;
}

function getEncodeFnForParam(service, parameter) {
    if (!parameter.type) {
        throw new Error("Not implemented");
    }
    let content = '        ';
    switch (parameter.type.code) {
        case 0:
            throw new Error("Not implemented");
        case 1:
            content += encodersName + '.double';
            break;
        case 2:
            content += encodersName + '.float';
            break;
        case 3:
            content += encodersName + '.sInt32';
            break;
        case 4:
            content += encodersName + '.sInt64';
            break;
        case 5:
            content += encodersName + '.uInt32';
            break;
        case 6:
            content += encodersName + '.uInt64';
            break;
        case 7:
            content += encodersName + '.bool';
            break;
        case 8:
            content += encodersName + '.string';
            break;
        case 9:
            content += encodersName + '.bytes';
            break;
        case 100:
            content += encodersName + '.uInt64';
            break;
        case 101:
            content += getEnumFunction(encodersName, parameter.type);
            break;
        case 200:
            content += 'new proto.ProcedureCall';
            break;
        case 201:
            content += 'new proto.Stream';
            break;
        case 202:
            content += 'new proto.Status';
            break;
        case 203:
            content += 'new proto.Services';
            break;
        case 300:
            content += 'new proto.Tuple';
            break;
        case 301:
            content += 'new proto.List';
            break;
        case 302:
            content += 'new proto.Set';
            break;
        case 303:
            content += 'new proto.Dictionary';
            break;
        default:
            throw new Error(util.format("Unable to determine encoder type string for type for %j %j", parameter, service));
    }
    content += '(' + getParamName(parameter) + ')';
    return content;
}

function getEnumFunction(prefix, type) {
    let enumVal = _.find(enums[type.service], {name: type.name});
    if (!enumVal) {
        throw new Error("enum not found");
    }
    let content = prefix + '.enum({';
    let length = enumVal.values.length;
    enumVal.values.forEach(function (enumEntry, index) {
        content += enumEntry.value + ' : \'' + enumEntry.name + '\'';
        if (index < length - 1) {
            content += ', ';
        }
    });
    content += '})';
    return content;
}
