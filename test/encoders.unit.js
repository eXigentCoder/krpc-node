'use strict';
require('./init.js');
let encoders = require('../lib/encoders');
let decoders = require('../lib/decoders');
let ByteBuffer = require("bytebuffer");
let Long = require('long');

describe('Encoders', function () {
    describe('Double', function () {
        it('value should equal decode(encode(value))', function () {
            let value = 0.5;
            let buffer = encoders.double(value);
            buffer.offset = 0;
            let decoded = decoders.double(buffer);
            expect(decoded).to.equal(value);
        });
    });
    describe('Float', function () {
        it('value should equal decode(encode(value))', function () {
            let value = 0.5;
            let buffer = encoders.float(value);
            buffer.offset = 0;
            let decoded = decoders.float(buffer);
            expect(decoded).to.equal(value);
        });
        it('Should decode a known value', function () {
            let buffer = ByteBuffer.fromBinary([18, 6, 18, 4, 0, 0, 0, 63]);
            buffer.offset = 4;
            buffer.littleEndian = true;
            let decoded = decoders.float(buffer);
            expect(decoded).to.equal(0.5);
        });
        it('Should encode to a known value', function () {
            let expectedBuffer = ByteBuffer.fromBinary([18, 6, 18, 4, 0, 0, 0, 63]);
            expectedBuffer.littleEndian = true;
            expectedBuffer.offset = 4;
            let expected = decoders.float(expectedBuffer);
            let buffer = encoders.float(0.5);
            buffer.offset = 0;
            let actual = decoders.float(buffer);
            expect(actual).to.equal(expected);
        });
    });
    describe('sInt32', function () {
        it('value should equal decode(encode(value))', function () {
            let value = 12;
            let buffer = encoders.sInt32(value);
            buffer.offset = 0;
            let decoded = decoders.sInt32(buffer);
            expect(decoded).to.equal(value);
        });
    });
    describe('sInt64', function () {
        it('value should equal decode(encode(value))', function () {
            let value = new Long(12);
            let buffer = encoders.sInt64(Number(value.toString()));
            buffer.offset = 0;
            let decoded = decoders.sInt64(buffer);
            expect(decoded.toString()).to.equal(value.toString());
        });
    });
    describe('uInt32', function () {
        it('value should equal decode(encode(value))', function () {
            let value = 12;
            let buffer = encoders.uInt32(value);
            buffer.offset = 0;
            let decoded = decoders.uInt32(buffer);
            expect(decoded).to.equal(value);
        });
    });
    describe('uInt64', function () {
        it('value should equal decode(encode(value))', function () {
            let value = new Long(12);
            let buffer = encoders.uInt64(Number(value.toString()));
            buffer.offset = 0;
            let decoded = decoders.uInt64(buffer);
            expect(decoded.toString()).to.equal(value.toString());
        });
    });
    describe('bool', function () {
        it('value should equal decode(encode(value))', function () {
            let value = true;
            let buffer = encoders.bool(value);
            buffer.offset = 0;
            let decoded = decoders.bool(buffer);
            expect(decoded).to.equal(value);
        });
    });
    describe('string', function () {
        it('value should equal decode(encode(value))', function () {
            let value = "This value should get encoded and still be readable!";
            let buffer = encoders.string(value);
            buffer.offset = 0;
            let decoded = decoders.string(buffer);
            expect(decoded).to.equal(value);
        });
    });
    describe('enum', function () {
        it('value should equal decode(encode(value))', function () {
            let enumInstance = {1: 'Value1', 2: 'Value2', 3: 'Value3'};
            let value = 'Value2';
            let encodeFunction = encoders.enum(enumInstance);
            let buffer = encodeFunction(value);
            buffer.offset = 0;
            let decoderFunction = decoders.enum(enumInstance);
            let decoded = decoderFunction(buffer);
            expect(decoded).to.equal(value);
        });
    });
});