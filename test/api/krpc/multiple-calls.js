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
            expect(clientId.length).to.be.greaterThan(5);
            let vesselId = getResultN(response, 1);
            expect(vesselId).to.be.ok();
            return done();
        }
    });
    it('Should work with multiple single calls and callbacks', function (done) {
        Client(null, clientCreated);
        let complete = 0;
        let total = 0;

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let getClientId = client.services.krpc.getClientId();
            let getActiveVessel = client.services.spaceCenter.getActiveVessel();
            send(client, getClientId, getClientIdComplete);
            send(client, getActiveVessel, getActiveVesselComplete);
        }

        function getClientIdComplete(err, response) {
            if (err) {
                return done(err);
            }
            let clientId = getResultN(response, 0).toString('base64');
            expect(clientId).to.be.ok();
            expect(clientId.length).to.be.greaterThan(5);
            return singleCallComplete();
        }

        function getActiveVesselComplete(err, response) {
            if (err) {
                return done(err);
            }
            let vesselId = getResultN(response, 0);
            expect(vesselId).to.be.ok();
            return singleCallComplete();
        }

        function send(client, call, callback) {
            total++;
            client.send(call, callback);
        }

        function singleCallComplete() {
            complete++;
            if (complete === total) {
                done();
            }
        }
    });
});


function getResultN(response, n) {
    expect(response.error).to.not.be.ok();
    let result = response.results[n];
    expect(result.error).to.not.be.ok();
    return result.value;
}