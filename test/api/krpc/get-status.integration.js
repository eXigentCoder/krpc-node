'use strict';
require('./../../init');
var Client = require('../../../lib/client');

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
        client.send(client.apis.krpc.status.get());
    };
}

function onError(done) {
    return function (err) {
        done(err);
    };
}

function onMessage(done) {
    return function (response) {
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        var statusResponse = response.results[0];
        expect(statusResponse.error).to.not.be.ok();
        var status = Client.apis.krpc.status.decode(statusResponse.value);
        expect(status).to.be.ok();
        return done();
    };
}

