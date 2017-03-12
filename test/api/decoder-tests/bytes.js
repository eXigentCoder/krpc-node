'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Decoding - bytes', function () {
    it('Should be able to decode a `bytes` successfully', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getVessel, data)
            ], done);
        }
    });
});
function getVessel(data, callback) {
    data.client.send(data.client.services.krpc.getClientId(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.vesselId = response.results[0].value.toString('base64');
        expect(data.vesselId.length).to.equal(24);
        return callback(null, data);
    });
}
