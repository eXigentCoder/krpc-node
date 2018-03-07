# krpc-node

A node.js client library for krpc. Allows you to send commands to Kerbal Space Program from node. Browser support coming soon!

> JavaScript to space via krpc!

![NPM](https://nodei.co/npm/krpc-node.png)

![Build status](https://travis-ci.org/eXigentCoder/krpc-node.svg?branch=master)

![KSP](http://i.imgur.com/2ZqcbIF.jpg)

> Image by Rareden, for more, visit [this forum link](https://forum.kerbalspaceprogram.com/index.php?/topic/23233-raredens-projects/)

# Table of Contents

* [Client](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/client.md)
    * [Legacy Mode](#Legacy) - Backwards Compatibility
* Services:
    * [KRPC](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/krpc.md) - Api for interacting with the kRPC server.
    * [SpaceCenter](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/space-center.md) - Main api for controlling KSP.
    * [Drawing](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/drawing.md) - Api for for drawing objects in the flight scene.
    * [UI](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/ui.md) - Api for interacting with user interface elements.
    * [InfernalRobotics](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/infernal-robotics.md) - Api for interacting with the Infernal Robotics mod.
    * [KerbalAlarmClock](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/kerbal-alarm-clock.md) - Api for interacting with the Kerbal Alarm Clock mod.
    * [RemoteTech](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/remote-tech.md) - Api for interacting with the Remote Tech mod.

# Example code

For more details on how to use the client, please see the above link, a quick getting started example is below:

```javascript
'use strict';
let { createClient, spaceCenter } = require('krpc-node');

describe('Getting Started - async', function() {
    it('Should work when using object hierarchy', async function() {
        this.timeout(10000);
        const client = await createClient();
        try {
            let vessel = await client.send(spaceCenter.getActiveVessel());
            //Alternative syntax:
            //let vessel = await client.services.spaceCenter._getActiveVessel();
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

    //Warning! This way of calling the client will be deprecated in the next version:
    it('Should work using old school calls', async function() {
        this.timeout(10000);
        const client = await createClient({ legacy: true });
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
```

You can also setup a stream that will update values on a ticker:

```javascript
let { createClient, spaceCenter } = require('krp-node');
let _ = require('lodash');

describe('Stream throttle - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        let vessel = await client.send(spaceCenter.getActiveVessel());
        let control = await vessel.control.get();
        let orbitalReference = await vessel.orbitalReferenceFrame.get();
        let flight = await vessel.flight(orbitalReference);
        await client.connectToStreamServer();
        const returnFunctionOptions = { _fn: true };
        let getThrottleCall = await control.throttle.get(returnFunctionOptions);
        let getHeadingCall = await flight.heading.get(returnFunctionOptions);
        await client.addStream(getThrottleCall, 'Throttle');
        await client.addStream(getHeadingCall, 'Heading');
        try {
            await new Promise((resolve, reject) => {
                let counter = 0;
                let done = false;
                client.stream.on('message', streamState => {
                    if (done) {
                        return;
                    }
                    console.log(streamState);
                    counter++;
                    if (counter === 20) {
                        done = true;
                        resolve();
                    }
                });
            });
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});
```

# Legacy

To make sure your old code works with version 4.x of the library, simply create the client as follows:

```javascript
createClient({ legacy: true }, clientCreated);
function clientCreated(err, client) {
    // Z0mg Code!
}
```

> Please note, this will be deprecated in version 5+

# Practical Examples

Checkout [the examples repository](https://github.com/eXigentCoder/krpc-node-examples) for some practical examples. Alternatively the tests in this code base can also be a good source of information.

[![JSinSA](http://www.jsinsa.com/img/logo-small.png)](http://www.jsinsa.com/)

To learn the history of the library and see me and it in action you can also check out the video below from the JSinSA 2017 conference. For more info on the JSinSA conference, check out [this link](http://www.jsinsa.com/)

[![JSinSA](https://raw.githubusercontent.com/eXigentCoder/krpc-node/master/images/wires.jpg)](https://www.youtube.com/watch?v=q-uYOhIYWo0&t=205s)
