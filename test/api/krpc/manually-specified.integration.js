'use strict';
require('../../init');
let createClient = require('../../../lib/client');
let success = false;

describe('Manual test workflow', function() {
    it('Should work', function(done) {
        createClient({ legacy: true }, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return client.close(() => done(err));
            }
            client.rpc.on('open', onOpen(client));
            client.rpc.on('error', onError(done, client));
            client.rpc.on('message', onMessage(done, client));
            client.rpc.on('close', onClose(done));
        }
    });
});

function onOpen(client) {
    return function() {
        let procedure = client.services.spaceCenter.getActiveVessel();
        client.send(procedure);
    };
}

function onError(done, client) {
    return function(err) {
        client.close(() => done(err));
    };
}
function onClose(done) {
    return function(event) {
        if (success) {
            return done();
        }
        return done(new Error(`Socket closed before done: ${event.reason} (${event.code})`));
    };
}

let counter = 0;
function onMessage(done, client) {
    return function(response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function(result) {
            expect(result.error).to.not.be.ok();
            if (counter === 1) {
                let vesselId = result.value;
                let procedure = client.services.spaceCenter.vesselGetControl(vesselId);
                client.send(procedure);
            } else if (counter === 2) {
                let controlId = result.value;
                let procedure = client.services.spaceCenter.controlSetAbort(controlId, true);
                client.send(procedure);
            } else {
                success = true;
                return client.close();
            }
        });
    };
}
