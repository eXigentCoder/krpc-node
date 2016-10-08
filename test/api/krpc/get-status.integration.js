'use strict';
require('../../init');
let Client = require('../../../lib/client');
var _ = require('lodash');

describe('Get-status', function () {
    it('Should work', function (done) {
        let client = Client();
        client.on('open', onOpen(client));
        client.on('error', onError(done));
        client.on('message', onMessage(done));
    });
});

function onOpen(client) {
    return function () {
        let getStatus = client.services.krpc.getStatus();
        client.send(getStatus);
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
        let statusResult = response.results[0];
        expect(statusResult).to.be.ok();
        expect(statusResult.error).to.not.be.ok();
        let status = statusResult.value;
        expect(status).to.be.ok();
        expect(_.isObject(status)).to.be.ok();
        expect(_.isNil(status.adaptive_rate_control)).to.not.be.ok();
        return done();
    };
}

