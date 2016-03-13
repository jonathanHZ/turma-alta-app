'use strict';

describe('Controller: SpinneCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var SpinneCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinneCtrl = $controller('SpinneCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
