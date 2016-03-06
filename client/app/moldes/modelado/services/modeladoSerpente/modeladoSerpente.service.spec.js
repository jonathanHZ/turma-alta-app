'use strict';

describe('Service: modeladoSerpente', function () {

  // load the service's module
  beforeEach(module('turmaAltaAppApp'));

  // instantiate service
  var modeladoSerpente;
  beforeEach(inject(function (_modeladoSerpente_) {
    modeladoSerpente = _modeladoSerpente_;
  }));

  it('should do something', function () {
    expect(!!modeladoSerpente).toBe(true);
  });

});
