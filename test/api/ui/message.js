'use strict';
require('../../init');
let Client = require('../../../lib/client');
describe('Get-clients', function () {
    it('Should work', function (done) {
        let client = Client();
        client.rpc.on('open', onOpen(client));
        client.rpc.on('error', onError(done));
        client.rpc.on('message', onMessage(done));
    });
});

function onOpen(client) {
    return function () {
        client.rpc.send(client.services.ui.message('Hello World!', 5, 'TopCenter'));
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
        let clientsResponse = response.results[0];
        expect(clientsResponse.error).to.not.be.ok();
        return done();
    };
}