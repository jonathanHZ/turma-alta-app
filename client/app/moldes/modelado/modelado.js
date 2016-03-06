'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modelado', {
        url: '/moldes/modelado',
        templateUrl: 'app/moldes/modelado/modelado.html',
        controller: 'ModeladoCtrl',
        controllerAs: 'modeladoCtrl'
      });
  });
