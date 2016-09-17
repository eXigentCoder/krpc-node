'use strict';
require('./init');
var Client = require('../lib/client');
var krpc = require('../lib/krpc');

describe('Get-status', function () {
    it('Should work', function (done) {
        Client(null, function (err, client) {
            if (err) {
                return done(err);
            }
            client.on('error', onError);
            client.on('message', onMessage);
            client.send(krpc.getStatus());
            function onError(err) {
                done(err);
            }

            function onMessage(response) {
                console.log(response);
                return done();
            }
        });
    });
});


