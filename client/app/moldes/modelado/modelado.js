'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/modelado');

    $stateProvider
      .state('modelado', {
        url: '/moldes/modelado',
        templateUrl: 'app/moldes/modelado/modelado.html',
        controller: 'ModeladoCtrl',
        controllerAs: 'modeladoCtrl'
      })
      .state('modelado.serpente', {
        parent: 'modelado',
        url: '/serpente',
        templateUrl: 'app/moldes/moldesTemplate.html',
        controller: 'SerpenteCtrl',
        controllerAs: 'serpenteCtrl'
      })
      .state('modelado.spinne', {
        parent: 'modelado',
        url: '/spinne',
        templateUrl: 'app/moldes/moldesTemplate.html',
        controller: 'SpinneCtrl',
        controllerAs: 'spinneCtrl'
      });
  });
