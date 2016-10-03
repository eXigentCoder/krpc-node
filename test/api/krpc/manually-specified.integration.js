'use strict';
require('../../init');
let Client = require('../../../lib/client');

describe('Get-status', function () {
    it('Should work', function (done) {
        let client = Client();
        client.on('open', onOpen(client));
        client.on('error', onError(done));
        client.on('message', onMessage(client, done));
        client.on('close', onClose(done));
    });
});

let callStack = [];
function onOpen(client) {
    return function () {
        // let procedure = client.services.spaceCenter.clearTarget();
        // callStack.push(procedure.decode);
        // client.send(procedure.call);
        let procedure = client.services.spaceCenter.getActiveVessel();
        callStack.push(procedure.decode);
        client.send(procedure.call);
    };
}

function onError(done) {
    return function (err) {
        done(err);
    };
}
function onClose(done) {
    return function (err) {
        console.log('err', err);
        done(err);
    };
}
var counter = 0;
var control = null;
var vessel = null;
function onMessage(client, done) {
    return function (response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            let decodeType = callStack.pop();
            if (decodeType) {
                let decodedResult = Client.decode(result.value, decodeType);
                expect(decodedResult).to.be.ok();
                if (counter === 1) {
                    vessel = decodedResult;
                    let procedure = client.services.spaceCenter.vesselGetControl(vessel.id);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                }
                else if (counter === 2) {
                    control = decodedResult;
                    let procedure = client.services.spaceCenter.controlSetAbort(control.id, true);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                } else {
                    return done();
                }
            }
        });
    };
}

