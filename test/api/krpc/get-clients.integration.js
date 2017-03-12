'use strict';
require('../../init');
let createClient = require('../../../lib/client');
const async = require('async');

describe('Get-clients', function () {
    it('Should work', function (done) {
        async.waterfall([
            async.apply(createClient, null),
            clientCreated
        ], function (err) {
            if (err) {
                return done(err);
            }
        });

        function clientCreated(client, callback) {
            client.rpc.on('open', onOpen(client, done));
            client.rpc.on('error', onError(done));
            callback();
        }
    });
});


function onOpen(client, done) {
    return function () {
        client.send(client.services.krpc.getClients(), getClientsComplete);

        function getClientsComplete(err, response) {
            if (err) {
                return done(err);
            }
            expect(response.error).to.not.be.ok();
            expect(response.results.length).to.equal(1);
            let result = response.results[0];
            expect(result.error).to.not.be.ok();
            result.value.items.forEach(function (item) {
                expect(item).to.be.ok();
                //todo
            });
            return done();
        }
    };
}

function onError(done) {
    return function (err) {
        done(err);
    };
}