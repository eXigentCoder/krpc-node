'use strict';
require('../../init');
let createClient = require('../../../lib/client');
const _ = require('lodash');

describe('Decoding - enum', function() {
    it('Should be able to decode a `enum` successfully', function(done) {
        createClient({ legacy: true }, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            client.send(client.services.krpc.getCurrentGameScene(), onMessage(done, client));
        }
    });
});

function onMessage(done, client) {
    return async function(err, response) {
        if (err) {
            return done(err);
        }
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        let gameSceneResult = response.results[0];
        expect(gameSceneResult.error).to.not.be.ok();
        expect(gameSceneResult.value).to.be.ok();
        expect(_.isString(gameSceneResult.value)).to.be.ok();
        console.log('Game Scene: ' + gameSceneResult.value);
        await client.close();
        return done();
    };
}
