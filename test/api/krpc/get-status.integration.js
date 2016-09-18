'use strict';
require('../../init');
let Client = require('../../../lib/client');

describe('Get-status', function () {
    it('Should work', function (done) {
        let client = Client();
        client.on('open', onOpen(client));
        client.on('error', onError(done));
        client.on('message', onMessage(done));
    });
});
let callStack = [];
function onOpen(client) {
    return function () {
        let getStatus = client.apis.krpc.getStatus();
        callStack.push(getStatus.decode);
        client.send(getStatus.call);
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
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            let decodeType = callStack.pop();
            let status = Client.decode(result.value, decodeType);
            expect(status).to.be.ok();
        });
        return done();
    };
}

