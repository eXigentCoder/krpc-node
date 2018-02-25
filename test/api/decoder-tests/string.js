'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoding - string', function() {
    it('Should be able to decode a `string` successfully', function(done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = { client: client };
            async.waterfall([async.apply(getVessel, data), getBiome, getVesselName], function(
                innerErr
            ) {
                client.close().then(done(innerErr));
            });
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

function getBiome(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetBiome(data.vesselId), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.biome = response.results[0].value;
        return callback(null, data);
    });
}

function getVesselName(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetName(data.vesselId), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.vesselName = response.results[0].value;
        return callback(null, data);
    });
}
