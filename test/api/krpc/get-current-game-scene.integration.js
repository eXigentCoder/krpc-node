'use strict';
require('../../init');
let Client = require('../../../lib/client');
const _ = require('lodash');

describe('Get-current-game-scene', function () {
    it('Should work', function (done) {
        Client(null, clientCreated);

        function clientCreated(err, client) {
            if (err) {
                return done(err);
            }
            client.send(client.services.krpc.getCurrentGameScene(), onMessage(done));
        }
    });
});


function onMessage(done) {
    return function (err, response) {
        if (err) {
            return done(err);
        }
        expect(response.error).to.not.be.ok();
        expect(response.results.length).to.equal(1);
        let gameSceneResult = response.results[0];
        expect(gameSceneResult.error).to.not.be.ok();
        expect(gameSceneResult.value).to.be.ok();
        expect(_.isString(gameSceneResult.value)).to.be.ok();
        //{0: 'SpaceCenter', 1: 'Flight', 2: 'TrackingStation', 3: 'EditorVAB', 4: 'EditorSPH'}
        console.log("Game Scene: " + gameSceneResult.value);
        return done();
    };
}

