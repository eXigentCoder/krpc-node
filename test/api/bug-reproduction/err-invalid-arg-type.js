'use strict';
require('../../init');
let { createClient, spaceCenter } = require('../../../lib/client');

describe('Bugfixes - ERR_INVALID_ARG_TYPE', function() {
    it('should retrieve the active vessel', async () => {
        const client = await createClient();
        let vessel = await client.send(spaceCenter.getActiveVessel());
        expect(vessel).to.be.ok;
        await client.close();
    });
});
