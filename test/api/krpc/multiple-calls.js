'use strict';
require('../../init');
let Client = require('../../../lib/client');

describe('Multiple Calls', function () {
    it('Should work with an array of calls and callbacks', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let calls = [
                client.services.krpc.getClientId(),
                client.services.spaceCenter.getActiveVessel()
            ];
            client.send(calls, callComplete);
        }

        function callComplete(err, response) {
            if (err) {
                return done(err);
            }
            let clientId = getResultN(response, 0).toString('base64');
            expect(clientId).to.be.ok();
            let vesselId = getResultN(response, 1);
            expect(vesselId).to.be.ok();
            return done();
        }
    });
});


function getResultN(response, n) {
    expect(response.error).to.not.be.ok();
    let result = response.results[n];
    expect(result.error).to.not.be.ok();
    return result.value;
}