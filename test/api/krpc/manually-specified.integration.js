'use strict';
require('../../init');
let Client = require('../../../lib/client');
let client;
var success = false;
let util = require('util');
var proto = require('../../../lib/utilities/proto');
let ProtoBuf = require('protobufjs');
var abUtil = require('../../../lib/utilities/array-buffer');

describe('Get-status', function () {
    it('Should work', function (done) {
        client = Client();
        client.on('open', onOpen);
        client.on('error', onError(done));
        client.on('message', onMessage(done));
        client.on('close', onClose(done));
    });
});

let callStack = [];
function onOpen() {
    // let procedure = client.services.spaceCenter.clearTarget();
    // callStack.push(procedure.decode);
    // client.send(procedure.call);
    let procedure = client.services.spaceCenter.getActiveVessel();
    callStack.push(procedure.decode);
    client.send(procedure.call);
};

function onError(done) {
    return function (err) {
        done(err);
    };
}
function onClose(done) {
    return function (event) {
        if (success) {
            done();
        }
        return done(new Error(util.format("Socket closed before done", event)));
    };
}
var counter = 0;
var control = null;
var vessel = null;
function onMessage(done) {
    return function (response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            let decodeType = callStack.pop();
            if (decodeType) {
                //let decodedResult = Client.decode(result.value, decodeType);
                //expect(decodedResult).to.be.ok();
                if (counter === 1) {
                    //vessel = decodedResult;
                    // var arrayB = abUtil.arrayBufferToBuffer(result.value.buffer);
                    // var TStream = proto.builder.lookup("krpc.schema.Stream");
                    // var id = TStream.children[0];
                    // var t7 = id.decode(0, result.value);
                    // var test = proto.krpc.schema.List.decode(result.value);
                    // //var t3 = result.value.readUint64();
                    // var ab = result.value.readUInt8();
                    // let buffer = new Buffer(ab);
                    // let venumVal = buffer.readUInt8() / 2;
                    // let arg = new proto.krpc.schema.Argument(0, result.value.buffer);
                    // let call = new proto.krpc.schema.ProcedureCall('SpaceCenter', 'Vessel_get_Control', [arg]);
                    //let procedure = client.services.spaceCenter.vesselGetControl(result.value.buffer);
                    let payload = Buffer.from([0x01]);
                    let procedure = client.services.spaceCenter.vesselGetControl(payload);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                }
                else if (counter === 2) {
                    //control = decodedResult;
                    let payload = Buffer.from([0x06]);
                    let procedure = client.services.spaceCenter.controlSetAbort(payload, true);
                    callStack.push(procedure.decode);
                    client.send(procedure.call);
                } else {
                    success = true;
                    return done();
                }
            }
        });
    };
}