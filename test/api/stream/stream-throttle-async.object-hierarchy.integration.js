'use strict';
require('../../init');
let { createClient, krpc, spaceCenter } = require('../../../lib/client');
let _ = require('lodash');

describe('Stream throttle - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        let clientId = (await client.send(krpc.getClientId())).toString('base64');
        let vessel = await client.send(spaceCenter.getActiveVessel());
        let control = await vessel.control.get();
        let orbitalReference = await vessel.orbitalReferenceFrame.get();
        let flight = await vessel.flight(orbitalReference);
        await client.connectToStreamServer(clientId);
        const returnFunctionOptions = { _fn: true };
        let getThrottleCall = await control.throttle.get(returnFunctionOptions);
        let getHeadingCall = await flight.heading.get(returnFunctionOptions);
        const throttleStreamRef = await client.addStream(getThrottleCall, 'Throttle');
        const headingStreamRef = await client.addStream(getHeadingCall, 'Heading');
        try {
            await new Promise((resolve, reject) => {
                client.stream.on('message', streamUpdate(resolve, reject));
            });
            await client.removeStream(throttleStreamRef.propertyPath);
            await client.removeStream(headingStreamRef.propertyPath);
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});

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
