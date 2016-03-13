'use strict';

describe('Service: spinneFactory', function () {

  // load the service's module
  beforeEach(module('turmaAltaAppApp'));

  // instantiate service
  var spinneFactory;
  beforeEach(inject(function (_spinneFactory_) {
    spinneFactory = _spinneFactory_;
  }));

  it('should do something', function () {
    expect(!!spinneFactory).toBe(true);
  });

});
