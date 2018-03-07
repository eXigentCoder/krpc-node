'use strict';
require('../init');
let { createClient } = require('../../lib/client');

describe('Getting Started - async', function() {
    it('Should work', async function() {
        this.timeout(10000);
        const client = await createClient();
        const { spaceCenter } = client.services;
        try {
            let vessel = await client.send(spaceCenter.getActiveVessel());
            let control = await spaceCenter._vesselGetControl(vessel.id);
            expect(control).to.be.ok();
            let control2 = await vessel.control.get();
            expect(control2).to.be.ok();
        } catch (err) {
            await client.close();
            throw err;
        }
        await client.close();
    });
});
