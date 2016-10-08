'use strict';
require('../../init');
let Client = require('../../../lib/client');
let client;
var success = false;
let util = require('util');
var proto = require('../../../lib/utilities/proto');
let ProtoBuf = require('protobufjs');
var abUtil = require('../../../lib/utilities/array-buffer');
let ByteBuffer = require("bytebuffer");

describe('Manual test workflow', function () {
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
}

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
function onMessage(done) {
    return function (response) {
        counter++;
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        response.results.forEach(function (result) {
            expect(result.error).to.not.be.ok();
            let decodeType = callStack.pop();
            let decodedResult;
            if (decodeType) {
                decodedResult = Client.decode(result.value, decodeType);
                expect(decodedResult).to.be.ok();
            }
            if (counter === 1) {
                let vesselId = decodedResult;
                console.log("Vessel id : " + vesselId.toString());
                let vesselBuffer = encode(vesselId, 'uint64');// Instance not found
                let procedure = client.services.spaceCenter.vesselGetControl(vesselBuffer.buffer);
                callStack.push(procedure.decode);
                client.send(procedure.call);
            }
            else if (counter === 2) {
                let controlId = decodedResult;
                var contolBuffer = encode(controlId, 'uint64').buffer;
                var trueBuffer = encode(true, 'bool').buffer;
                let procedure = client.services.spaceCenter.controlSetAbort(contolBuffer, trueBuffer);
                callStack.push(procedure.decode);
                client.send(procedure.call);
                //callStack.push(false);
                //client.send(call);
            } else {
                success = true;
                return done();
            }
        });
    };
}

function encode(value, type) {
    let buffer = new ByteBuffer();
    if (value === null) {
        // Nothing to encode
        return buffer;
    }

    switch (type) {
        // 32bit signed varint
        case "int32":
            // "If you use int32 or int64 as the type for a negative number, the resulting varint is always ten bytes
            // long – it is, effectively, treated like a very large unsigned integer." (see #122)
            if (value < 0) {
                buffer.writeVarint64(value);
            }
            else {
                buffer.writeVarint32(value);
            }
            break;

        // 32bit unsigned varint
        case "uint32":
            buffer.writeVarint32(value);
            break;

        // 32bit varint zig-zag
        case "sint32":
            buffer.writeVarint32ZigZag(value);
            break;

        // Fixed unsigned 32bit
        case "fixed32":
            buffer.writeUint32(value);
            break;

        // Fixed signed 32bit
        case "sfixed32":
            buffer.writeInt32(value);
            break;

        // 64bit varint as-is
        case "int64":
        case "uint64":
            buffer.writeVarint64(value); // throws
            break;

        // 64bit varint zig-zag
        case "sint64":
            buffer.writeVarint64ZigZag(value); // throws
            break;

        // Fixed unsigned 64bit
        case "fixed64":
            buffer.writeUint64(value); // throws
            break;

        // Fixed signed 64bit
        case "sfixed64":
            buffer.writeInt64(value); // throws
            break;

        // Bool
        case "bool":
            if (typeof value === 'string') {
                buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : !!value);
            }
            else {
                buffer.writeVarint32(value ? 1 : 0);
            }
            break;

        // Constant enum value
        case "enum":
            buffer.writeVarint32(value);
            break;

        // 32bit float
        case "float":
            buffer.writeFloat32(value);
            break;

        // 64bit float
        case "double":
            buffer.writeFloat64(value);
            break;

        // Length-delimited string
        case "string":
            buffer.writeVString(value);
            break;

        // Length-delimited bytes
        case "bytes":
            if (value.remaining() < 0) {
                throw Error("Illegal value for " + this.toString(true) + ": " + value.remaining() + " bytes remaining");
            }
            var prevOffset = value.offset;
            buffer.writeVarint32(value.remaining());
            buffer.append(value);
            value.offset = prevOffset;
            break;

        // Embedded message
        case "message":
            var bb = new ByteBuffer().LE();
            this.resolvedType.encode(value, bb);
            buffer.writeVarint32(bb.offset);
            buffer.append(bb.flip());
            break;

        default:
            // We should never end here
            throw Error(util.format("[INTERNAL] Illegal value to encode in " + type + ": " + value + " (unknown type)"));
    }
    return buffer;
}