'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');
const decoders = require('../../../lib/decoders');
describe('Decoder type tests', function () {
    it.skip('Should be able to decode a `sint32`', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getWaypointManager, data),
                getWaypoints,
                waypointGetContractId
            ], done);
        }
    });
});

function getWaypointManager(data, callback) {
    data.client.send(data.client.services.spaceCenter.getWaypointManager(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.waypointManager = response.results[0].value;
        return callback(null, data);
    });
}

function getWaypoints(data, callback) {
    data.client.send(data.client.services.spaceCenter.waypointManagerGetWaypoints(data.waypointManager), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.waypoints = [];
        response.results[0].value.items.forEach(function (wp) {
            data.waypoints.push(decoders.uInt64(wp));
        });
        return callback(null, data);
    });
}

function waypointGetContractId(data, callback) {
    data.client.send(data.client.services.spaceCenter.waypointGetContractId(data.waypoints[0]), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.contractId = response.results[0].value;
        return callback(null, data);
    });
}