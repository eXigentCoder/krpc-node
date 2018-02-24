'use strict';
require('../../init');
let createClient = require('../../../lib/client');
let util = require('util');

describe('Decoding - bool', function() {
    it('Should be able to decode a `bool` successfully', async function() {
        const client = await createClient();
        try {
            const send = util.promisify(client.send);
            let response = await send(client.services.spaceCenter.getActiveVessel());
            const vesselId = response.results[0].value;
            response = await send(client.services.spaceCenter.vesselGetControl(vesselId));
            const controlId = response.results[0].value;
            response = await send(client.services.spaceCenter.controlGetBrakes(controlId));
            const brakesOn = response.results[0].value;
            console.log(`brakesOn : ${brakesOn}`);
        } finally {
            client.close();
        }
    });
});
