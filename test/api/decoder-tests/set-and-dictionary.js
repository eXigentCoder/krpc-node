'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoding - set and dictionary', function () {
    it('Should be able to decode a `float` successfully', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getBodies, data),
                celestialBodyGetBiomes
            ], done);
        }
    });
});
function getBodies(data, callback) {
    data.client.send(data.client.services.spaceCenter.getBodies(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.bodies = response.results[0].value;
        return callback(null, data);
    });
}

function celestialBodyGetBiomes(data, callback) {
    data.client.send(data.client.services.spaceCenter.celestialBodyGetBiomes(data.bodies.Kerbin), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.biomes = response.results[0].value;
        return callback(null, data);
    });
}
