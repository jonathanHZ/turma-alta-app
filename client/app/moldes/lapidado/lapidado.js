'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lapidado', {
        url: '/lapidado',
        templateUrl: 'app/moldes/lapidado/lapidado.html',
        controller: 'LapidadoCtrl'
      });
  });
