'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('moldes', {
        url: '/moldes',
        templateUrl: 'app/moldes/moldes.html',
        controller: 'MoldesCtrl',
        controllerAs: 'moldesCtrl'
      });
  });
