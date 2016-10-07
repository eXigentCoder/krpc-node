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
            if (decodeType) {
                // let decodedResult = Client.decode(result.value, decodeType);
                // expect(decodedResult).to.be.ok();
                if (counter === 1) {
                    //vessel = decodedResult;
                    //let hardCodedVesselBuffer = Buffer.from([0x01]); //works, finds the instance.
                    let vesselId = decode(result.value, 'uint64'); // works, gets the value of 1
                    //let vesselBuffer = encode(vesselId, 'uint64');// Instance not found
                    let buffer = new ByteBuffer();
                    let vesselBuffer = buffer.writeUint8(Number(vesselId.toString()));
                    let arg = new proto.krpc.schema.Argument(0, vesselBuffer.buffer);
                    let call = new proto.krpc.schema.ProcedureCall('SpaceCenter', 'Vessel_get_Control', arg);
                    //let procedure = client.services.spaceCenter.vesselGetControl(vesselBuffer);
                    callStack.push(function () {
                        console.log(1);
                    });
                    client.send(call);
                }
                else if (counter === 2) {
                    //control = decodedResult;
                    let controlId = Buffer.from([0x06]);
                    let trueBuf = Buffer.from([0x01]);
                    let procedure = client.services.spaceCenter.controlSetAbort(controlId, trueBuf);
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

function decode(buffer, type) {
    let value, nBytes;
    switch (type) {
        // 32bit signed varint
        case "int32":
            return buffer.readVarint32() | 0;

        // 32bit unsigned varint
        case "uint32":
            return buffer.readVarint32() >>> 0;

        // 32bit signed varint zig-zag
        case "sint32":
            return buffer.readVarint32ZigZag() | 0;

        // Fixed 32bit unsigned
        case "fixed32":
            return buffer.readUint32() >>> 0;

        case "sfixed32":
            return buffer.readInt32() | 0;

        // 64bit signed varint
        case "int64":
            return buffer.readVarint64();

        // 64bit unsigned varint
        case "uint64":
            return buffer.readVarint64().toUnsigned();

        // 64bit signed varint zig-zag
        case "sint64":
            return buffer.readVarint64ZigZag();

        // Fixed 64bit unsigned
        case "fixed64":
            return buffer.readUint64();

        // Fixed 64bit signed
        case "sfixed64":
            return buffer.readInt64();

        // Bool varint
        case "bool":
            return !!buffer.readVarint32();

        // Constant enum value (varint)
        case "enum":
            // The following Builder.Message#set will already throw
            return buffer.readVarint32();

        // 32bit float
        case "float":
            return buffer.readFloat();

        // 64bit float
        case "double":
            return buffer.readDouble();

        // Length-delimited string
        case "string":
            return buffer.readVString();

        // Length-delimited bytes
        case "bytes": {
            nBytes = buffer.readVarint32();
            if (buffer.remaining() < nBytes) {
                throw Error("Illegal number of bytes for " + this.toString(true) + ": " + nBytes + " required but got only " + buffer.remaining());
            }
            value = buffer.clone(); // Offset already set
            value.limit = value.offset + nBytes;
            buffer.offset += nBytes;
            return value;
        }

        // Length-delimited embedded message
        case "message": {
            nBytes = buffer.readVarint32();
            return this.resolvedType.decode(buffer, nBytes);
        }
        default:
            // We should never end here
            throw Error("[INTERNAL] Illegal decode type");

    }
}