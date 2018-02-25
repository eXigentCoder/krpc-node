'use strict';
require('../init');
let { createClient, spaceCenter } = require('../../lib/client');

describe('Getting Started - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        try {
            let response = await client.send(spaceCenter.getActiveVessel());
            let vesselId = response.results[0].value;
            response = await client.send(spaceCenter.vesselGetControl(vesselId));
            let controlId = response.results[0].value;
            response = await client.send(spaceCenter.vesselGetOrbitalReferenceFrame(vesselId));
            let orbitalReference = response.results[0].value;
            response = await client.send(spaceCenter.vesselFlight(vesselId, orbitalReference));
            let flightId = response.results[0].value;
            let getThrottleCall = spaceCenter.controlGetThrottle(controlId);
            let getHeadingCall = spaceCenter.flightGetHeading(flightId);
            response = await client.send([getThrottleCall, getHeadingCall]);
            console.log({
                throttle: response.results[0].value,
                heading: response.results[1].value
            });
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});
