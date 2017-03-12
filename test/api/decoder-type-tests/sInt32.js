'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoder type tests', function () {
    it('Should be able to decode a `sint32`', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getMaximumRailsWarpFactor, data)
            ], done);
        }
    });
});
function getMaximumRailsWarpFactor(data, callback) {
    data.client.send(data.client.services.spaceCenter.getMaximumRailsWarpFactor(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.maximumRailsWarpFactor = response.results[0].value;
        return callback(null, data);
    });
}