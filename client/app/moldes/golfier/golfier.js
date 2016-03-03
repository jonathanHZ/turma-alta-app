'use strict';

angular.module('turmaAltaAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('golfier', {
        url: '/golfier',
        templateUrl: 'app/moldes/golfier/golfier.html',
        controller: 'GolfierCtrl'
      });
  });
