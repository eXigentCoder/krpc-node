'use strict';
require('../../init');
let Client = require('../../../lib/client');
const _ = require('lodash');

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
        client.send(client.services.krpc.getCurrentGameScene());
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
        let gameSceneResult = response.results[0];
        expect(gameSceneResult.error).to.not.be.ok();
        expect(gameSceneResult.value).to.be.ok();
        expect(_.isString(gameSceneResult.value)).to.be.ok();
        return done();
    };
}

