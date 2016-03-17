'use strict';

(function() {

class MainController {

  constructor($http) {
    var self = this;
    self.$http = $http;
    self.awesomeThings = [];

    $http.get('/api/things').then(response => {
      self.awesomeThings = response.data;
    });
  }
}

angular.module('turmaAltaAppApp')
  .controller('MainController', MainController);

})();


angular.module('turmaAltaAppApp').directive('mmenu', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
            $(element).mmenu({});
		}
	};
});
