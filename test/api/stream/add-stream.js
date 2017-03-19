'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('addStream', function () {
    it('Should throw an error if the same name is used for the stream', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {
                client,
                done
            };
            async.waterfall([
                async.apply(getClientIdAndActiveVessel, data),
                connectToStreamServer,
                getVesselControl,
                addThrottleToStream,
                addThrottleToStreamAgain
            ], function (waterfallErr) {
                if (waterfallErr) {
                    return done(waterfallErr);
                }
            });
        }
    });
});


function getFirstResult(response) {
    return getResultN(response, 0);
}

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
        data.vessel = {
            id: getResultN(response, 1)
        };
        return callback(null, data);
    });
}

function connectToStreamServer(data, callback) {
    data.client.connectToStreamServer(data.clientId, function (err) {
        return callback(err, data);
    });
}

function getVesselControl(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetControl(data.vessel.id), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.vessel.controlId = getFirstResult(response);
        return callback(null, data);
    });
}

function addThrottleToStream(data, callback) {
    let getThrottle = data.client.services.spaceCenter.controlGetThrottle(data.vessel.controlId);
    data.client.addStream(getThrottle, "Throttle", throttleStreamAdded);
    function throttleStreamAdded(err) {
        return callback(err, data);
    }
}

function addThrottleToStreamAgain(data, callback) {
    let getThrottle = data.client.services.spaceCenter.controlGetThrottle(data.vessel.controlId);
    data.client.addStream(getThrottle, "Throttle", throttleStreamAdded);
    function throttleStreamAdded(err) {
        if (!err) {
            return callback(new Error("The second addStream call with the same name should have thrown an error"));
        }
        expect(err).to.be.ok();
        return data.done();
    }
}