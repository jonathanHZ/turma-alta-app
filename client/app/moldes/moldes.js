'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('moldes', {
        url: '/moldes',
        templateUrl: 'app/moldes/moldes.html',
        controller: 'MoldesCtrl',
        controllerAs: 'moldesCtrl'
      })
      .state('moldes.serpente', {
        parent: 'moldes',
        url: '/moldes/serpente',
        templateUrl: 'app/moldes/moldesTemplate.html',
        controller: 'SerpenteCtrl',
        controllerAs: 'serpenteCtrl'
      })
      .state('moldes.spinne', {
        parent: 'moldes',
        url: '/moldes/spinne',
        templateUrl: 'app/moldes/moldesTemplate.html',
        controller: 'SpinneCtrl',
        controllerAs: 'spinneCtrl'
      });
  });
