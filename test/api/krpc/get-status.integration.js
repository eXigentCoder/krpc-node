'use strict';
require('../../init');
let createClient = require('../../../lib/client');
const _ = require('lodash');

describe('Get-status', function() {
    it('Should work', function(done) {
        createClient({ legacy: true }, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return client.close(() => done(err));
            }
            client.rpc.on('open', onOpen(client));
            client.rpc.on('error', onError(done, client));
            client.rpc.on('message', onMessage(done, client));
        }
    });
});

function onOpen(client) {
    return function() {
        let getStatus = client.services.krpc.getStatus();
        client.send(getStatus);
    };
}

function onError(done, client) {
    return function(err) {
        client.close(() => done(err));
    };
}

function onMessage(done, client) {
    return function(response) {
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        let statusResult = response.results[0];
        expect(statusResult).to.be.ok();
        expect(statusResult.error).to.not.be.ok();
        let status = statusResult.value;
        expect(status).to.be.ok();
        expect(_.isObject(status)).to.be.ok();
        expect(_.isNil(status.adaptiveRateControl)).to.not.be.ok();
        return client.close(() => done());
    };
}
