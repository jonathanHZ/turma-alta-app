'use strict';

angular.module('turmaAltaAppApp')
  .directive('moldeDetail',['modeladoSerpente',  function (modeladoSerpente) {
    return {
      templateUrl: 'app/directives/moldeDetail/moldeDetail.html',
      restrict: 'EA',
      scope: {
        details: '='
      },
      link: function (scope, element, attrs) {
        scope.largoGlobo = '';
        scope.gajosGlobo = '';
        scope.dobladilloGlobo = '';
        scope.moldeDetailData = {
          name  : '',
          image : ''
        };

        var initMoldeDetail = function(){
          switch (scope.details) {
            case 'modelado-serpente':
                scope.moldeDetailData.name = scope.details;
                scope.moldeDetailData.image = 'assets/images/moldes/modelado/serpente.jpg';
              break;
            default:

          }
        }
        initMoldeDetail();

        scope.calculateData = function(largo, cantidadGajos, bainha){
          switch (scope.details) {
            case 'modelado-serpente':
                scope.detailMolde = modeladoSerpente.calcular(largo, cantidadGajos, bainha);
              break;
            default:

          }
        }
      }
    };
  }]);
