'use strict';

describe('Controller: GaleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var GaleriaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GaleriaCtrl = $controller('GaleriaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
