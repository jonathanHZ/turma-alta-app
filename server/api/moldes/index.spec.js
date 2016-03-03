'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var moldesCtrlStub = {
  index: 'moldesCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var moldesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './moldes.controller': moldesCtrlStub
});

describe('Moldes API Router:', function() {

  it('should return an express router instance', function() {
    moldesIndex.should.equal(routerStub);
  });

  describe('GET /api/moldess', function() {

    it('should route to moldes.controller.index', function() {
      routerStub.get
        .withArgs('/', 'moldesCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
