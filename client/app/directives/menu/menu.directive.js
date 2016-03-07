'use strict';

function menu () {

  return {
    templateUrl: 'app/directives/menu/menu.html',
    restrict: 'EA',
    scope: {
      menuData: '=menuData'
    },
    link: function (scope, element, attrs) {
      console.log(scope.menuData);
    }
  };
};

angular.module('turmaAltaAppApp').directive('menu', menu);
