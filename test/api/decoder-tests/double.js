'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');
const util = require("util");

describe('Decoding - double', function () {
    it('Should be able to decode a `double` successfully', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getVessel, data),
                getAutoPilot,
                setAutoPilotRollThreshold,
                getAutoPilotRollThreshold
            ], done);
        }
    });
});
function getVessel(data, callback) {
    data.client.send(data.client.services.spaceCenter.getActiveVessel(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.vesselId = response.results[0].value;
        return callback(null, data);
    });
}

function getAutoPilot(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetAutoPilot(data.vesselId), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.autoPilotId = response.results[0].value;
        return callback(null, data);
    });
}
function setAutoPilotRollThreshold(data, callback) {
    data.autoPilotRollThreshold = 3;
    data.client.send(data.client.services.spaceCenter.autoPilotSetRollThreshold(data.autoPilotId, data.autoPilotRollThreshold), function (err) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });
}

function getAutoPilotRollThreshold(data, callback) {
    data.client.send(data.client.services.spaceCenter.autoPilotGetRollThreshold(data.autoPilotId), function (err, response) {
        if (err) {
            return callback(err);
        }
        let actualValue = response.results[0].value;
        if (data.autoPilotRollThreshold !== actualValue) {
            return callback(new Error(util.format("actual autoPilotRollThreshold (%s) did not match the set autoPilotRollThreshold (%s)", actualValue, data.autoPilotRollThreshold)));
        }
        return callback(null, data);
    });
}