'use strict';

(function() {

class MoldesCtrl {

  constructor($http) {
    var self = this;
    self.$http = $http;
    self.moldes = [];
    self.modelados = [];

    $http.get('/api/moldess').then(response => {
      self.moldes = response.data;
    });

    $http.get('/api/moldess/modelado').then(response => {
      console.log('********* ', response.data);
      self.modelados = response.data;
    });
    
  }
}

angular.module('turmaAltaAppApp')
  .controller('MoldesCtrl', MoldesCtrl);

})();
