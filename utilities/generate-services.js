'use strict';
const Client = require('../lib/client');
const fs = require('fs');
const async = require('async');
const _ = require('lodash');
const os = require('os');

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
    let content = '/*' + os.EOL + service.documentation + os.EOL + '*/';
    return content;
}