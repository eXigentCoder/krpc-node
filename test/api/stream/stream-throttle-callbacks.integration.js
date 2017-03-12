'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Stream throttle - callbacks', function () {
    it('Should work', function (done) {
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
                getVesselGetOrbitalReferenceFrame,
                getVesselFlight,
                addThrottleToStream,
                addHeadingToStream
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

function getVesselGetOrbitalReferenceFrame(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselGetOrbitalReferenceFrame(data.vessel.id), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.vessel.orbitalReference = getFirstResult(response);
        return callback(null, data);
    });
}

function getVesselFlight(data, callback) {
    data.client.send(data.client.services.spaceCenter.vesselFlight(data.vessel.id, data.vessel.orbitalReference), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.vessel.flightId = getFirstResult(response);
        return callback(null, data);
    });
}

function addThrottleToStream(data, callback) {
    let getThrottle = data.client.services.spaceCenter.controlGetThrottle(data.vessel.controlId);
    let addStreamCall = data.client.services.krpc.addStream(getThrottle.call);
    data.client.addStreamCall(addStreamCall, throttleStreamAdded);
    data.client.stream.on('message', streamUpdate(data));
    function throttleStreamAdded(err, response) {
        if (err) {
            return callback(err);
        }
        let stream = getFirstResult(response);
        data.streams = data.streams || [];
        data.streams[stream.id.toString()] = {
            name: "Throttle",
            decode: getThrottle.decode
        };
        return callback(null, data);
    }
}

function addHeadingToStream(data, callback) {
    let getHeading = data.client.services.spaceCenter.flightGetHeading(data.vessel.flightId);
    let addStreamCall = data.client.services.krpc.addStream(getHeading.call);
    data.client.send(addStreamCall, headingStreamAdded);

    function headingStreamAdded(err, response) {
        if (err) {
            return callback(err);
        }
        let stream = getFirstResult(response);
        data.streams[stream.id.toString()] = {
            name: "Heading",
            decode: getHeading.decode
        };
        return callback(null, data);
    }
}

function streamUpdate(data) {
    let counter = 0;
    return function _streamUpdate(streamUpdateResponse) {
        streamUpdateResponse.results.forEach(function (update) {
            if (update.result.error) {
                console.error(update.result.error);
                return;
            }
            let stream = data.streams[update.id.toString()];
            let parsedValue = stream.decode(update.result.value);
            console.log(stream.name, ' : ', parsedValue);
            counter++;
            if (counter > 50) {
                data.done();
            }
        });
    };
}
