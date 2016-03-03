'use strict';

describe('Controller: GolfierCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var GolfierCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GolfierCtrl = $controller('GolfierCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
