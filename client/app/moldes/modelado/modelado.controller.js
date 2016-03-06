'use strict';
(function() {

class ModeladoCtrl {

  constructor($http, modeladoSerpente) {
    var self = this;
    self.$http = $http;
    self.modelados = [];
    self.modeladoSerpente = modeladoSerpente;
    self.detail = 'modelado-serpente';

    $http.get('/api/moldess/modelado').then(response => {
      console.log('********* ', response.data);
      self.modelados = response.data;
    });

    var response = self.modeladoSerpente.calcular(1000,35,0.5);
    console.log(response);
  }
}

angular.module('turmaAltaAppApp')
  .controller('ModeladoCtrl', ModeladoCtrl);

})();
