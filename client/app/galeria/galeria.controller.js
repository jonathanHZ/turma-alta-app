'use strict';

(function() {

class GaleriaCtrl {

  constructor($http) {
    var self = this;
    self.$http = $http;
    self.images = [];

    $http.get('/api/images').then(response => {
      self.images = response.data;
    });

  }
}

angular.module('turmaAltaAppApp')
  .controller('GaleriaCtrl', GaleriaCtrl);

})();
