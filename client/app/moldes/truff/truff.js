'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('truff', {
        url: '/truff',
        templateUrl: '../cclient/app/moldes/truff/truff.html',
        controller: 'TruffCtrl'
      });
  });
