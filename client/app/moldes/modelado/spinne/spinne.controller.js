'use strict';

angular.module('turmaAltaAppApp')
  .controller('SpinneCtrl', function ($scope, spinneFactory) {
    var self = $scope;
    self.message = 'SerpenteCtrl';
    self.largoGlobo = '';
    self.gajosGlobo = '';
    self.dobladilloGlobo = '';

    self.moldeDetailData = {
      name  : 'Modelado Spinne',
      image : 'assets/images/moldes/modelado/spinne.jpg'
    };

    self.calculateData = function(largo, cantidadGajos, bainha){
      self.detailMolde = spinneFactory.calcular(largo, cantidadGajos, bainha);
    }

  });
