'use strict';
require('../../init');
let util = require('util');
let Client = require('../../../lib/client');
let client;
let success = false;
let game = {};
let done;

describe('Streams', function () {
    it('Stream throttle', function (testDone) {
        done = testDone;
        client = Client();
        client.rpc.on('open', clientConnectionOpen);
        client.rpc.on('error', onError);
        client.rpc.on('close', onClose);
    });
});

// ----=================[ Start helper functions ]=================----
function onError(err) {
    done(err);
}

function onClose(event) {
    if (success) {
        done();
    }
    return done(new Error(util.format("Socket closed before done", event)));
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
// ----=================[ End helper functions ]=================----

function clientConnectionOpen() {
    let procedure = client.services.krpc.getClientId();
    client.rpc.send(procedure);
    client.rpc.on('message', getClientIdComplete);
}

function getClientIdComplete(response) {
    var id = getFirstResult(response).toString('base64');
    client.connectToStreamServer(id);
    client.stream.on('open', streamOpen);
    client.stream.on('error', onError);
    client.stream.on('close', onClose);
}

function streamOpen() {
    let procedure = client.services.spaceCenter.getActiveVessel();
    client.rpc.send(procedure);
    replaceMessageHandler(getActiveVesselComplete);
}

function getActiveVesselComplete(response) {
    game.vessel = {
        id: getFirstResult(response)
    };
    client.rpc.send(client.services.spaceCenter.vesselGetControl(game.vessel.id));
    replaceMessageHandler(getActiveVesselControlComplete);
}

function getActiveVesselControlComplete(response) {
    game.vessel.control = {
        id: getFirstResult(response)
    };
    let getThrottleCall = client.services.spaceCenter.controlGetThrottle(game.vessel.control.id).call;
    var addStreamCall = client.services.krpc.addStream(getThrottleCall);
    client.rpc.send(addStreamCall);
    replaceMessageHandler(streamAdded);
    client.stream.on('message', getThrottleComplete);
    //example of how to call without streams:
    // client.rpc.send(client.services.spaceCenter.controlGetThrottle(game.vessel.control.id));
    // replaceMessageHandler(getThrottleComplete);
}

function streamAdded(response) {
    var stream = getFirstResult(response);
    game.streams = game.streams || [];
    game.streams.push(stream.id);
}

function getThrottleComplete(response) {
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