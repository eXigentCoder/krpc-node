'use strict';
require('../../init');
let Client = require('../../../lib/client');
const async = require('async');

describe('Streams', function () {
    it('Stream throttle - callbacks', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            let data = {client: client};
            async.waterfall([
                async.apply(getClientId, data),
                connectToStreamServer
            ], done);
        }
    });
});

function getFirstResult(response) {
    expect(response.error).to.not.be.ok();
    expect(response.results.length).to.equal(1);
    let result = response.results[0];
    expect(result.error).to.not.be.ok();
    return result.value;
}

function getClientId(data, callback) {
    data.client.send(data.client.services.krpc.getClientId(), function (err, response) {
        if (err) {
            return callback(err);
        }
        data.clientId = getFirstResult(response).toString('base64');
        return callback(null, data);
    });
}

function connectToStreamServer(data, callback) {
    data.client.connectToStreamServer(data.clientId, function (err) {
        return callback(err, data);
    });
}

// function streamOpen() {
//     let procedure = client.services.spaceCenter.getActiveVessel();
//     client.send(procedure);
//     replaceMessageHandler(getActiveVesselComplete);
// }
//
// function getActiveVesselComplete(response) {
//     game.vessel = {
//         id: getFirstResult(response)
//     };
//     client.send(client.services.spaceCenter.vesselGetControl(game.vessel.id));
//     replaceMessageHandler(getActiveVesselControlComplete);
// }
//
// function getActiveVesselControlComplete(response) {
//     game.vessel.control = {
//         id: getFirstResult(response)
//     };
//     client.send(client.services.spaceCenter.vesselGetOrbitalReferenceFrame(game.vessel.id));
//     replaceMessageHandler(getOrbitalReferenceFrame);
// }
// function getOrbitalReferenceFrame(response) {
//     game.vessel.orbitalReference = getFirstResult(response);
//     client.send(client.services.spaceCenter.vesselFlight(game.vessel.id, game.vessel.orbitalReference));
//     replaceMessageHandler(getVesselFlightComplete);
// }
//
// function getVesselFlightComplete(getVesselResponse) {
//     game.vessel.flight = {
//         id: getFirstResult(getVesselResponse)
//     };
//     let getThrottle = client.services.spaceCenter.controlGetThrottle(game.vessel.control.id);
//     let addStreamCall = client.services.krpc.addStream(getThrottle.call);
//     client.send(addStreamCall);
//     replaceMessageHandler(throttleStreamAdded);
//     client.stream.on('message', streamUpdate);
//     function throttleStreamAdded(throttleResponse) {
//         let stream = getFirstResult(throttleResponse);
//         game.streams = game.streams || [];
//         game.streams[stream.id.toString()] = {
//             name: "Throttle",
//             decode: getThrottle.decode
//         };
//         let getHeading = client.services.spaceCenter.flightGetHeading(game.vessel.flight.id);
//         addStreamCall = client.services.krpc.addStream(getHeading.call);
//         client.send(addStreamCall);
//         replaceMessageHandler(headingStreamAdded);
//
//         function headingStreamAdded(headingResponse) {
//             stream = getFirstResult(headingResponse);
//             game.streams[stream.id.toString()] = {
//                 name: "Heading",
//                 decode: getHeading.decode
//             };
//         }
//     }
// }
//
// let counter = 0;
// function streamUpdate(streamUpdateResponse) {
//     streamUpdateResponse.results.forEach(function (update) {
//         if (update.result.error) {
//             console.error(update.result.error);
//             return;
//         }
//         let stream = game.streams[update.id.toString()];
//         let parsedValue = stream.decode(update.result.value);
//         console.log(stream.name, ' : ', parsedValue);
//         counter++;
//         if (counter > 50) {
//             done();
//         }
//     });
// }