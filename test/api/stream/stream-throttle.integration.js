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
    let id = getFirstResult(response).toString('base64');
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
    client.rpc.send(client.services.spaceCenter.vesselGetOrbitalReferenceFrame(game.vessel.id));
    replaceMessageHandler(getOrbitalReferenceFrame);
}
function getOrbitalReferenceFrame(response) {
    game.vessel.orbitalReference = getFirstResult(response);
    client.rpc.send(client.services.spaceCenter.vesselFlight(game.vessel.id, game.vessel.orbitalReference));
    replaceMessageHandler(getVesselFlightComplete);
}

function getVesselFlightComplete(getVesselResponse) {
    game.vessel.flight = {
        id: getFirstResult(getVesselResponse)
    };
    let getThrottle = client.services.spaceCenter.controlGetThrottle(game.vessel.control.id);
    let addStreamCall = client.services.krpc.addStream(getThrottle.call);
    client.rpc.send(addStreamCall);
    replaceMessageHandler(throttleStreamAdded);
    client.stream.on('message', streamUpdate);
    function throttleStreamAdded(throttleResponse) {
        let stream = getFirstResult(throttleResponse);
        game.streams = game.streams || [];
        game.streams[stream.id.toString()] = {
            name: "Throttle",
            decode: getThrottle.decode
        };
        let getHeading = client.services.spaceCenter.flightGetHeading(game.vessel.flight.id);
        addStreamCall = client.services.krpc.addStream(getHeading.call);
        client.rpc.send(addStreamCall);
        replaceMessageHandler(headingStreamAdded);

        function headingStreamAdded(headingResponse) {
            stream = getFirstResult(headingResponse);
            game.streams[stream.id.toString()] = {
                name: "Heading",
                decode: getHeading.decode
            };
        }
    }
}

function streamUpdate(streamUpdateResponse) {
    streamUpdateResponse.results.forEach(function (update) {
        if (update.result.error) {
            console.error(update.result.error);
            return;
        }
        let stream = game.streams[update.id.toString()];
        let parsedValue = stream.decode(update.result.value);
        console.log(stream.name, ' : ', parsedValue);
    });
    // game.vessel.control.throttle = getFirstResult(response);
    // console.log(util.format("Updating throttle value from %s to 1", game.vessel.control.throttle));
    // replaceMessageHandler(setThrottleToFullComplete);
    // let call = client.services.spaceCenter.controlSetThrottle(game.vessel.control.id, 1);
    // client.rpc.send(call);
}

// function setThrottleToFullComplete(response) {
//     replaceMessageHandler(launched);
//     client.rpc.send(client.services.spaceCenter.controlActivateNextStage(game.vessel.control.id));
// }

// function launched(response) {
//     let vesselId = getFirstResult(response);
//     expect(vesselId).to.be.ok();
//     process.exit(0);
// }