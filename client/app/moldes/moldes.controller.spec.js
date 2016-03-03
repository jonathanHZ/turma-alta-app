'use strict';

describe('Controller: MoldesCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var MoldesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoldesCtrl = $controller('MoldesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
