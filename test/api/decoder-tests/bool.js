'use strict';
require('../../init');
let createClient = require('../../../lib/client');
const async = require('async');

describe('Decoding - bool', function() {
    it('Should be able to decode a `bool` successfully', function(done) {
        createClient({ legacy: true }, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = { client: client };
            async.waterfall(
                [
                    async.apply(getVessel, data),
                    getControl,
                    controlGetBreaks //decoders.bool
                ],
                function(innerErr) {
                    client.close().then(done(innerErr));
                }
            );
        }
    });
});
function getVessel(data, callback) {
    data.client.send(data.client.services.spaceCenter.getActiveVessel(), function(err, response) {
        if (err) {
            return callback(err);
        }
        data.vesselId = response.results[0].value;
        return callback(null, data);
    });
}

function getControl(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetControl(data.vesselId), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.controlId = response.results[0].value;
        return callback(null, data);
    });
}

function controlGetBreaks(data, callback) {
    data.client.send(data.client.services.spaceCenter.controlGetBrakes(data.controlId), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.brakesOn = response.results[0].value;
        return callback(null, data);
    });
}
