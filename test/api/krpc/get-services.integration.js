'use strict';
require('../../init');
let createClient = require('../../../lib/client');

describe('Get-services', function() {
    it('Should work', function(done) {
        createClient({ legacy: true }, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            client.rpc.on('open', onOpen(client));
            client.rpc.on('error', onError(done));
            client.rpc.on('message', onMessage(done, client));
        }
    });
});

function onOpen(client) {
    return function() {
        client.send(client.services.krpc.getServices());
    };
}

function onError(done) {
    return function(err) {
        done(err);
    };
}

function onMessage(done, client) {
    return function(response) {
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        let serviceResponse = response.results[0];
        expect(serviceResponse.error).to.not.be.ok();
        expect(serviceResponse.value.services).to.be.ok();
        expect(serviceResponse.value.services.length).to.equal(7);
        client.close().then(done);
    };
}
