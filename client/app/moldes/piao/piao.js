'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('piao', {
        url: '/piao',
        templateUrl: 'app/moldes/piao/piao.html',
        controller: 'PiaoCtrl'
      });
  });
