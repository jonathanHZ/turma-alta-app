'use strict';

(function() {

class GaleriaCtrl {

  constructor($http) {
    var self = this;
    self.$http = $http;
    self.images2015 = [];
    self.images2013 = []
    // $http.get('/api/images').then(response => {
    //   self.images = response.data;
    // });

    $http.get('/api/images/year=2015').then(response => {
      self.images2015 = response.data;
    });
    $http.get('/api/images/year=2013').then(response => {
      self.images2013 = response.data;
    });

  }
}

angular.module('turmaAltaAppApp')
  .controller('GaleriaCtrl', GaleriaCtrl);

})();
