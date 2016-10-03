'use strict';
require('../../init');
let Client = require('../../../lib/client');
let client;
var success = false;
let util = require('util');

describe('Get-status', function () {
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
    // let procedure = client.services.spaceCenter.clearTarget();
    // callStack.push(procedure.decode);
    // client.send(procedure.call);
    let procedure = client.services.spaceCenter.getActiveVessel();
    callStack.push(procedure.decode);
    client.send(procedure.call);
};

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
var counter = 0;
var control = null;
var vessel = null;
function onMessage(done) {
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
                    let procedure = client.services.spaceCenter.vesselGetControl(result.value);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                }
                else if (counter === 2) {
                    control = decodedResult;
                    let procedure = client.services.spaceCenter.controlSetAbort(control.id, true);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                } else {
                    success = true;
                    return done();
                }
            }
        });
    };
}

