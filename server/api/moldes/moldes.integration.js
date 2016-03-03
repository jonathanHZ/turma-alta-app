'use strict';

var app = require('../..');
import request from 'supertest';

describe('Moldes API:', function() {

  describe('GET /api/moldess', function() {
    var moldess;

    beforeEach(function(done) {
      request(app)
        .get('/api/moldess')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          moldess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      moldess.should.be.instanceOf(Array);
    });

  });

});
