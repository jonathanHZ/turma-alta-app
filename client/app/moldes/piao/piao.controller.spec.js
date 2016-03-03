'use strict';

describe('Controller: PiaoCtrl', function () {

  // load the controller's module
  beforeEach(module('turmaAltaAppApp'));

  var PiaoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PiaoCtrl = $controller('PiaoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
