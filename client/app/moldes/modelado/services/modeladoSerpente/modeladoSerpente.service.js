'use strict';

angular.module('turmaAltaAppApp')
  .factory('modeladoSerpente', function () {
    var distanciaBase = new Array(0.0000,12.2999,10.9034,11.9239,13.3204,14.3947,15.4689,16.3283,19.3898,21.2697,23.8479,25.0833,34.1068,33.7845,43.2914,29.1116,38.1351,11.9239,11.9239,23.9016,23.9016,23.9016,23.9016,24.4387,23.9016,23.9016,23.9016,23.9016,23.9016,23.9016,17.1340,17.1340,11.0646,26.8020,57.9010,45.2251,21.9680,21.8069,14.9318,14.8244,13.5353,13.4816,23.2571,20.6789,17.0802,13.2130);
    var circunferenciaBase = new Array(258.5128,294.6723,330.6967,366.7212,408.8173,456.9849,511.0891,571.2648,643.3138,727.5059,823.7061,907.8982,1070.3457,1220.6501,1406.9791,1533.2672,1701.6513,1749.6840,1797.8515,1882.0436,1942.0844,1990.2520,2020.3399,2032.3481,2020.3399,1990.2520,1948.1560,1882.0436,1803.7882,1701.6513,1629.4674,1545.2753,1485.0996,1346.8033,1040.2578,799.6898,685.4098,571.2648,499.0809,426.8970,366.7212,300.6089,204.4086,114.2799,48.1676,0.0000);
    var altoinf = 755.192605;
    var superficie = 117.682163;
    var volumen = 114.390123;

    var largo;
    var largoAcum;
    var cantidadGajos;
    var distanciaAux;
    var anchoAux;
    var bainha;
    var gajoMax = getAnchoMax();
    var largoBase = getLargoBase();

    function getNumPasos() {
       return distanciaBase.length;
    }

    function getLargoBase() {
       var acumulado = 0;
       for (var i = 0; i < distanciaBase.length; i++){
          acumulado = acumulado + distanciaBase[i];
       }
       return acumulado;
    }

    function getAnchoMax() {
       var anchoMax = 0;
       for (var i = 0; i < circunferenciaBase.length; i++){
          if (circunferenciaBase[i] > anchoMax) anchoMax = circunferenciaBase[i];
       }
       return anchoMax;
    }

    var calcular = function (largo, cantidadGajos, bainha) {
      var response = {
        tableData : [],
      	puntos : distanciaBase.length
      };
      largoAcum=0
      //  if (distanciaBase.length != circunferenciaBase.length) {
      //     alert("Erro no programa: Dados iniciais incorretos!");
      //     exit;
      //  }


      //  if (largo <= 0)
      //  {
      //     alert("A largura do gomo deve ser maior que zero");
      //     return;
      //  }
      //  if (cantidadGajos < 4)
      //  {
      //     alert("É necessário ao menos 4 gomos");
      //     return;
      //  }
      //  if (cantidadGajos > 200)
      //  {
      //     alert("Com quantos gomos pretende fazer?");
      //     return;
      //  }
      //  if (bainha < 0)
      //  {
      //     alert("a bainha não pode ter uma medida negativa");
      //     return;
      //  }

       response.altoinf = Math.round(altoinf * largo / largoBase);
       response.anchoinf = Math.round((gajoMax / Math.PI) * largo / largoBase);
       response.boca = Math.round((circunferenciaBase[0] * largo / largoBase / Math.PI) * 10) / 10;
       response.gajomax = Math.round(((gajoMax * largo / largoBase / cantidadGajos)+(bainha*1)) * 10) / 10;
       response.superficie = Math.round(superficie * Math.pow(largo / largoBase, 2) * 10) / 10;
       response.volumen = Math.round(volumen * Math.pow(largo / largoBase, 3) * 10) / 10;


       for (var i = 0; i < distanciaBase.length; i++){
          distanciaAux = distanciaBase[i] * largo / largoBase;
          anchoAux = ((circunferenciaBase[i] * largo / largoBase) / (2 * cantidadGajos)) + (bainha / 2);
          largoAcum = largoAcum + distanciaAux;

          var temp = {
            distancia : Math.round(distanciaAux * 10) / 10,
            ancho : Math.round(anchoAux * 10) / 10,
            largoacum : Math.round(largoAcum * 10) / 10
          }
          response.tableData[i] = temp;
          // response.distancia[i] = Math.round(distanciaAux * 10) / 10;
          // response.ancho[i] = Math.round(anchoAux * 10) / 10;
          // response.largoacum[i] = Math.round(largoAcum * 10) / 10;
       }
       return response;

     }

     return {
       calcular : calcular
     }
  });
