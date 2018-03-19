'use strict';
require('../../init');
const _ = require('lodash');
let { createClient, spaceCenter } = require('../../../lib/client');

describe('Bugfixes - part finder issue', function() {
    it('Should work', async function() {
        //Load up the stock kerbalX craft
        this.timeout(10000);
        const client = await createClient();
        client.rpc.on('error', err => {});
        try {
            let mainVessel = await client.send(spaceCenter.getActiveVessel());
            await logVesselData(mainVessel);
            const allVessels = await client.send(spaceCenter.getVessels());
            const otherVessels = _.differenceBy(allVessels, [mainVessel], byId);
            for (let vessel of otherVessels) {
                await logVesselData(vessel);
            }
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
    async function logVesselData(vessel) {
        try {
            const name = await vessel.name.get();
            const type = await vessel.type.get();
            console.log(name, type);
            const autoPilot = await vessel.autoPilot.get();
            let orbitalReference = await vessel.orbitalReferenceFrame.get();
            const flight = await vessel.flight(orbitalReference);
            const control = await vessel.control.get();
            const parts = await vessel.parts.get();
            const allParts = await parts.all.get();
            console.log(
                JSON.stringify(
                    {
                        vesselId: vessel.id,
                        name,
                        type,
                        autoPilotId: autoPilot.id,
                        controlId: control.id,
                        partsId: parts.id,
                        allPartsLength: allParts.length,
                        flightId: flight.id
                    },
                    null,
                    0
                )
            );
        } catch (err) {
            console.error(`Error getting data for ${vessel.id}`, err);
        }
    }
});

function byId(obj) {
    return obj.id;
}
