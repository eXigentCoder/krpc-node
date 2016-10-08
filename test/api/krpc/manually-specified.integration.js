'use strict';
require('../../init');
let Client = require('../../../lib/client');
let client;
let success = false;
let util = require('util');

describe('Manual test workflow', function () {
    it('Should work', function (done) {
        client = Client();
        client.on('open', onOpen);
        client.on('error', onError(done));
        client.on('message', onMessage(done));
        client.on('close', onClose(done));
    });
});

let callStack = [];
function onOpen() {
    let procedure = client.services.spaceCenter.getActiveVessel();
    callStack.push(procedure.decode);
    client.send(procedure.call);
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
        return done(new Error(util.format("Socket closed before done", event)));
    };
}
let counter = 0;
function onMessage(done) {
    return function (response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            let decodeType = callStack.pop();
            let decodedResult;
            if (decodeType) {
                decodedResult = Client.decode(result.value, decodeType);
                expect(decodedResult).to.be.ok();
            }
            if (counter === 1) {
                let vesselId = decodedResult;
                let procedure = client.services.spaceCenter.vesselGetControl(vesselId);
                callStack.push(procedure.decode);
                client.send(procedure.call);
            }
            else if (counter === 2) {
                let controlId = decodedResult;
                let procedure = client.services.spaceCenter.controlSetAbort(controlId, true);
                callStack.push(procedure.decode);
                client.send(procedure.call);
            } else {
                success = true;
                return done();
            }
        });
    };
}