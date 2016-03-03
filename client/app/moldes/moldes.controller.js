'use strict';

(function() {

class MoldesCtrl {

  constructor($http) {
    var self = this;
    self.$http = $http;
    self.moldes = [];

    $http.get('/api/moldess').then(response => {
      self.moldes = response.data;
    });

  }
}

angular.module('turmaAltaAppApp')
  .controller('MoldesCtrl', MoldesCtrl);

})();
