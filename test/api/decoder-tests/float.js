'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoding - float', function() {
    it('Should be able to decode a `float` successfully', function(done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = { client: client };
            async.waterfall(
                [async.apply(getVessel, data), getControl, controlGetThrottle],
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

function controlGetThrottle(data, callback) {
    data.client.send(data.client.services.spaceCenter.controlGetThrottle(data.controlId), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.throttle = response.results[0].value;
        return callback(null, data);
    });
}
