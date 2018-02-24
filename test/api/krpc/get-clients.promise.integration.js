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

// function getConnectedClients(client, callback) {
//     client.send(client.services.krpc.getClients(), function(err, response) {
//         if (err) {
//             return callback(err);
//         }
//         expect(response.error).to.not.be.ok();
//         expect(response.results.length).to.equal(1);
//         let result = response.results[0];
//         expect(result.error).to.not.be.ok();
//         result.value.items.forEach(function(item) {
//             expect(item).to.be.ok();
//         });
//         return callback();
//     });
// }
