'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('galeria', {
        url: '/galeria',
        templateUrl: 'app/galeria/galeria.html',
        controller: 'GaleriaCtrl',
        controllerAs: 'galeriaCtrl'
      });
  });
