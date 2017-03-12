'use strict';
require('../../init');
let Client = require('../../../lib/client');
let success = false;
let util = require('util');

describe('Manual test workflow', function () {
    it('Should work', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            client.rpc.on('open', onOpen(client));
            client.rpc.on('error', onError(done));
            client.rpc.on('message', onMessage(done, client));
            client.rpc.on('close', onClose(done));
        }
    });
});

function onOpen(client) {
    return function () {
        let procedure = client.services.spaceCenter.getActiveVessel();
        client.rpc.send(procedure);
    };
}

function onError(done) {
    return function (err) {
        done(err);
    };
}
function onClose(done) {
    return function (event) {
        if (success) {
            done();
        }
        return done(new Error(util.format("Socket closed before done: %s (%s)", event.reason, event.code)));
    };
}

let counter = 0;
function onMessage(done, client) {
    return function (response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            if (counter === 1) {
                let vesselId = result.value;
                let procedure = client.services.spaceCenter.vesselGetControl(vesselId);
                client.rpc.send(procedure);
            }
            else if (counter === 2) {
                let controlId = result.value;
                let procedure = client.services.spaceCenter.controlSetAbort(controlId, true);
                client.rpc.send(procedure);
            } else {
                success = true;
                return done();
            }
        });
    };
}