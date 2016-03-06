'use strict';

describe('Directive: moldeDetail', function () {

  // load the directive's module and view
  beforeEach(module('turmaAltaAppApp'));
  beforeEach(module('app/directives/moldeDetail/moldeDetail.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<molde-detail></molde-detail>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the moldeDetail directive');
  }));
});
