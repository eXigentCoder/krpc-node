'use strict';
require('../../init');
let util = require('util');
let Client = require('../../../lib/client');
let client;
let success = false;
let game = {};
let done;
var openCounter = 0;
describe('Streams', function () {
    it('Stream throttle', function (testDone) {
        done = testDone;
        client = Client();
        client.rpc.on('open', onOpen);
        client.rpc.on('error', onError);
        client.rpc.on('message', getActiveVesselComplete);
        client.rpc.on('close', onClose);

        // client.stream.on('open', onOpen);
    });
});

function onOpen() {
    openCounter++;
    if (openCounter < 2) {
        client.connectToStreamServer();
        return;
    }
    let procedure = client.services.spaceCenter.getActiveVessel();
    client.rpc.send(procedure);
}

function onError(err) {
    done(err);
}

function onClose(event) {
    if (success) {
        done();
    }
    return done(new Error(util.format("Socket closed before done", event)));
}

function getActiveVesselComplete(response) {
    game.vessel = {
        id: getFirstResult(response)
    };
    replaceMessageHandler(getActiveVesselControlComplete);
    client.rpc.send(client.services.spaceCenter.vesselGetControl(game.vessel.id));
}

function getActiveVesselControlComplete(response) {
    game.vessel.control = {
        id: getFirstResult(response)
    };
    let getThrottleCall = client.services.spaceCenter.controlGetThrottle(game.vessel.control.id).call;
    replaceMessageHandler(addStreamResponse);
    client.rpc.send(client.services.krpc.addStream(getThrottleCall));
}

function addStreamResponse(response) {
    game.vessel.control.throttle = getFirstResult(response);
    console.log(util.format("Updating throttle value from %s to 1", game.vessel.control.throttle));
    replaceMessageHandler(setThrottleToFullComplete);
    let call = client.services.spaceCenter.controlSetThrottle(game.vessel.control.id, 1);
    client.rpc.send(call);
}

function setThrottleToFullComplete(response) {
    replaceMessageHandler(launched);
    client.rpc.send(client.services.spaceCenter.controlActivateNextStage(game.vessel.control.id));
}

function launched(response) {
    let vesselId = getFirstResult(response);
    expect(vesselId).to.be.ok();
    process.exit(0);
}

function getFirstResult(response) {
    expect(response.error).to.not.be.ok();
    expect(response.results.length).to.equal(1);
    let result = response.results[0];
    expect(result.error).to.not.be.ok();
    return result.value;
}

function replaceMessageHandler(fn) {
    client.rpc.emitter.removeAllListeners('message');
    client.rpc.on('message', fn);
}