'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoding - sInt32', function() {
    it('Should be able to decode a `sInt32` successfully', function(done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = { client: client };
            async.waterfall([async.apply(getMaximumRailsWarpFactor, data)], function(innerErr) {
                client.close().then(done(innerErr));
            });
        }
    });
});
function getMaximumRailsWarpFactor(data, callback) {
    data.client.send(data.client.services.spaceCenter.getMaximumRailsWarpFactor(), function(
        err,
        response
    ) {
        if (err) {
            return callback(err);
        }
        data.maximumRailsWarpFactor = response.results[0].value;
        return callback(null, data);
    });
}
