'use strict';
require('../../init');
let createClient = require('../../../lib/client');

describe('Get-clients', function() {
    it('Should work with a promise', async function() {
        const client = await createClient();
        expect(client).to.be.ok;
        await client.close();
    });
});
