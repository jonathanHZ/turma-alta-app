'use strict';
(function() {

class ModeladoCtrl {

  constructor($http, modeladoService) {
    var self = this;
    self.$http = $http;
    self.modelados = [];
    self.calcular = modeladoService.calcular;

    $http.get('/api/moldess/modelado').then(response => {
      console.log('********* ', response.data);
      self.modelados = response.data;
    });
  }
}

angular.module('turmaAltaAppApp')
  .controller('ModeladoCtrl', ModeladoCtrl);

})();
