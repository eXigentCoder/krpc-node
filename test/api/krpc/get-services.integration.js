'use strict';
require('../../init');
let Client = require('../../../lib/client');

describe('Get-services', function () {
    it('Should work', function (done) {
        let client = Client();
        client.on('open', onOpen(client));
        client.on('error', onError(done));
        client.on('message', onMessage(done));
    });
});

function onOpen(client) {
    return function () {
        client.send(client.services.krpc.getServices());
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
        let serviceResponse = response.results[0];
        expect(serviceResponse.error).to.not.be.ok();
        expect(serviceResponse.value.services).to.be.ok();
        expect(serviceResponse.value.services.length).to.equal(7);
        return done();
    };
}

