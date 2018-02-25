'use strict';
require('../../init');
let createClient = require('../../../lib/client');

describe('Get-clients', function() {
    it('Should work with a promise', async function() {
        const client = await createClient();
        console.log(client);
        await client.close();
    });
});