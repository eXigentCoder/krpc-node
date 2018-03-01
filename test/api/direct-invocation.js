'use strict';
require('../init');
let { createClient } = require('../../lib/client');

describe('Getting Started - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        const { spaceCenter } = client.services;
        try {
            let response = await client.send(spaceCenter.getActiveVessel());
            let vesselId = response.results[0].value;
            response = await spaceCenter._vesselGetControl(vesselId);
            let controlId = response.results[0].value;
            expect(controlId).to.be.ok();
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});
