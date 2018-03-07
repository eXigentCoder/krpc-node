'use strict';
require('../../init');
let createClient = require('../../../lib/client');
const async = require('async');

describe('Get-clients', function() {
    it('Should work', function(done) {
        async.waterfall(
            [async.apply(_createClient, { legacy: true }), getConnectedClients],
            function(err) {
                if (err) {
                    return done(err);
                }
                done();
            }
        );
    });
});

function _createClient(options, callback) {
    createClient(options, clientCreated);
    function clientCreated(err, client) {
        return callback(err, client);
    }
}

function getConnectedClients(client, callback) {
    client.send(client.services.krpc.getClients(), function(err, response) {
        if (err) {
            return callback(err);
        }
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        let result = response.results[0];
        expect(result.error).to.not.be.ok();
        result.value.items.forEach(function(item) {
            expect(item).to.be.ok();
        });
        client.close(callback);
    });
}
