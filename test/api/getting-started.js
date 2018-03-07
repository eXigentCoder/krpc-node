'use strict';
require('../init');
let { createClient, spaceCenter } = require('../../lib/client');

describe('Getting Started - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        try {
            let vessel = await client.send(spaceCenter.getActiveVessel());
            let control = await vessel.control.get();
            let orbitalReference = await vessel.orbitalReferenceFrame.get();
            let flight = await vessel.flight(orbitalReference);
            let throttle = await control.throttle.get();
            let heading = await flight.heading.get();
            console.log({
                callType: 'Manual',
                throttle,
                heading
            });
            //Or send them in a batch (Method 1)
            let getThrottleCall = spaceCenter.controlGetThrottle(control.id);
            let getHeadingCall = spaceCenter.flightGetHeading(flight.id);
            let response = await client.send([getThrottleCall, getHeadingCall]);
            console.log({
                callType: 'Method 1',
                throttle: response.results[0].value,
                heading: response.results[1].value
            });
            //Or send them in a batch (Method 2)
            const returnFunctionOptions = { _fn: true };
            let getThrottleCall2 = await control.throttle.get(returnFunctionOptions);
            let getHeadingCall2 = await flight.heading.get(returnFunctionOptions);
            let response2 = await client.send([getThrottleCall2, getHeadingCall2]);
            console.log({
                callType: 'Method 2',
                throttle: response2.results[0].value,
                heading: response2.results[1].value
            });
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});
