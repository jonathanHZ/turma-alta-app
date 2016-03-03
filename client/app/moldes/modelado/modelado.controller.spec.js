'use strict';

describe('Controller: ModeladoCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var ModeladoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModeladoCtrl = $controller('ModeladoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
