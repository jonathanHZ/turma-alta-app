'use strict';

describe('Service: serpenteFactory', function () {

  // load the service's module
  beforeEach(module('turmaAltaAppApp'));

  // instantiate service
  var serpenteFactory;
  beforeEach(inject(function (_serpenteFactory_) {
    serpenteFactory = _serpenteFactory_;
  }));

  it('should do something', function () {
    expect(!!serpenteFactory).toBe(true);
  });

});
