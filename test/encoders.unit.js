'use strict';
require('./init.js');
let encoders = require('../lib/encoders');
let decoders = require('../lib/decoders');
let ByteBuffer = require("bytebuffer");

describe('example', function () {
    it('Decoded value that has been encoded should equal the original value for floats', function () {
        let value = 0.5;
        let buffer = encoders.float(value);
        buffer.offset = 0;
        let decoded = decoders.float(buffer);
        // let buffer = new ByteBuffer().writeFloat32(value);
        // let decoded = buffer.readFloat32(0);
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