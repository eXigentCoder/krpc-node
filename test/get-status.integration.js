'use strict';
require('./init');
var Client = require('../lib/client');
var krpc = require('../lib/krpc');

describe('Get-status', function () {
    it('Should work', function (done) {
        var client = Client();
        client.on('open', onOpen(client));
        client.on('error', onError(done));
        client.on('message', onMessage(done));
    });
});

function onOpen(client) {
    return function () {
        client.send(krpc.getStatus());
    };
}


function onError(done) {
    return function (err) {
        done(err);
    };
}

function onMessage(done) {
    return function (response) {
        console.log(response);
        return done();
    };
}

