'use strict';

describe('Service: modeladoService', function () {

  // load the service's module
  beforeEach(module('turmaAltaAppApp'));

  // instantiate service
  var modeladoService;
  beforeEach(inject(function (_modeladoService_) {
    modeladoService = _modeladoService_;
  }));

  it('should do something', function () {
    expect(!!modeladoService).toBe(true);
  });

});
