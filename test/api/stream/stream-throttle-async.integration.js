'use strict';
require('../../init');
let { createClient, krpc, spaceCenter } = require('../../../lib/client');
let _ = require('lodash');

describe('Stream throttle - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        let response = await client.send([krpc.getClientId(), spaceCenter.getActiveVessel()]);
        let clientId = getResultN(response, 0).toString('base64');
        let vesselId = getResultN(response, 1);
        await client.connectToStreamServer(clientId);
        let controlId = await client.send(spaceCenter.vesselGetControl(vesselId));
        controlId = getFirstResult(controlId);
        let orbitalReference = await client.send(
            spaceCenter.vesselGetOrbitalReferenceFrame(vesselId)
        );
        orbitalReference = getFirstResult(orbitalReference);
        let flightId = await client.send(spaceCenter.vesselFlight(vesselId, orbitalReference));
        flightId = getFirstResult(flightId);
        let getThrottleCall = spaceCenter.controlGetThrottle(controlId);
        let getHeadingCall = spaceCenter.flightGetHeading(flightId);

        await client.addStream(getThrottleCall, 'Throttle');
        await client.addStream(getHeadingCall, 'Heading');
        try {
            await new Promise((resolve, reject) => {
                client.stream.on('message', streamUpdate(resolve, reject));
            });
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});

function getResultN(response, n) {
    expect(response.error).to.not.be.ok();
    let result = response.results[n];
    expect(result.error).to.not.be.ok();
    return result.value;
}

function getFirstResult(response) {
    return getResultN(response, 0);
}

function streamUpdate(resolve, reject) {
    let counter = 0;
    let done = false;
    return function _streamUpdate(streamState) {
        if (done) {
            return;
        }
        console.log(streamState);
        counter++;
        if (counter === 20) {
            if (_.isNil(streamState.Throttle)) {
                //Note throttle
                done = true;
                return reject(
                    new Error(
                        "streamState.Throttle was falsy. Note that throttle updates sometimes won't happen if the value doesn't change in game"
                    )
                );
            }
            if (_.isNil(streamState.Heading)) {
                done = true;
                return reject(new Error('streamState.Throttle was falsy'));
            }
            done = true;
            resolve();
        }
    };
}
