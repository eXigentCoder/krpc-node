'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Multiple Calls', function () {
    it('should work with callbacks', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getClientIdAndActiveVessel, data)
            ], done);
        }
    });
});


function getResultN(response, n) {
    expect(response.error).to.not.be.ok();
    let result = response.results[n];
    expect(result.error).to.not.be.ok();
    return result.value;
}

function getClientIdAndActiveVessel(data, callback) {
    let calls = [
        data.client.services.krpc.getClientId(),
        data.client.services.spaceCenter.getActiveVessel()
    ];
    data.client.send(calls, function (err, response) {
        if (err) {
            return callback(err);
        }
        data.clientId = getResultN(response, 0).toString('base64');
        data.vesselId = getResultN(response, 1);
        return callback(null, data);
    });
}