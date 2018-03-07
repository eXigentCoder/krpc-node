'use strict';
require('../../init');
let createClient = require('../../../lib/client');

describe('Decoding - bool - async/await', function() {
    it('Should be able to decode a `bool` successfully', async function() {
        const client = await createClient({ legacy: true });
        try {
            let response = await client.send(client.services.spaceCenter.getActiveVessel());
            const vesselId = response.results[0].value;
            response = await client.send(client.services.spaceCenter.vesselGetControl(vesselId));
            const controlId = response.results[0].value;
            response = await client.send(client.services.spaceCenter.controlGetBrakes(controlId));
            const brakesOn = response.results[0].value;
            console.log(`brakesOn : ${brakesOn}`);
            client.close();
        } catch (err) {
            await client.close();
            throw err;
        }
    });
});
