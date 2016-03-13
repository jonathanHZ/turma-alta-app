'use strict';

angular.module('turmaAltaAppApp')
  .controller('SerpenteCtrl', function ($scope, serpenteFactory) {
    var self = $scope;
    self.message = 'SerpenteCtrl';
    self.largoGlobo = '';
    self.gajosGlobo = '';
    self.dobladilloGlobo = '';

    self.moldeDetailData = {
      name  : 'Modelado Serpente',
      image : 'assets/images/moldes/modelado/serpente.jpg'
    };

    self.calculateData = function(largo, cantidadGajos, bainha){
      self.detailMolde = serpenteFactory.calcular(largo, cantidadGajos, bainha);
    }

  });
