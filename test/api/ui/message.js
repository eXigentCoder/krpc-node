'use strict';
require('../../init');
let Client = require('../../../lib/client');
describe('UI', function () {
    it('Display message', function (done) {
        Client(null, clientCreated);

        function clientCreated(clientErr, client) {
            if (clientErr) {
                return done(clientErr);
            }
            client.rpc.on('error', onError(done));
            client.send(client.services.ui.message('Hello World!', 5, 'TopCenter'), function (messegeErr, response) {
                if (messegeErr) {
                    return done(messegeErr);
                }
                expect(response.error).to.not.be.ok();
                expect(response.results.length).to.equal(1);
                let clientsResponse = response.results[0];
                expect(clientsResponse.error).to.not.be.ok();
                return done();
            });
        }
    });
});


function onError(done) {
    return function (err) {
        done(err);
    };
}
