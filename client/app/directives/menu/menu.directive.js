'use strict';

function menu () {

  return {
    templateUrl: 'app/directives/menu/menu.html',
    restrict: 'EA',
    scope: {
      menuData: '=menuData' ,
      menucalular: '=menucalular' 
    },
    link: function (scope, element, attrs) {
    },
    controller: ['$scope', function($scope){
    }]
  };
};

angular.module('turmaAltaAppApp').directive('menu', menu);
