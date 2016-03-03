'use strict';

describe('Controller: LapidadoCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var LapidadoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LapidadoCtrl = $controller('LapidadoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
