'use strict';
require('../../init');
let { createClient, spaceCenter } = require('../../../lib/client');

describe('Bugfixes - ERR_INVALID_ARG_TYPE', function() {
    it('should not throw an error', async () => {
        const client = await createClient();
        let vessel = await client.send(spaceCenter.getActiveVessel());
        console.log(vessel);
        expect(vessel).to.be.ok;
    });
});
