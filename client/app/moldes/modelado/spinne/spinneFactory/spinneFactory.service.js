'use strict';

angular.module('turmaAltaAppApp')
  .factory('spinneFactory', function () {
  var distanciaBase = new Array(0.0000,34.7844,27.5374,27.5374,30.4386,26.0867,27.5374,27.5374,28.9880,27.5374,28.9880,24.6361,27.5374,26.0867,27.5374,26.0867,26.0867,23.1855,23.1855,23.1855,21.7410,21.7410,15.9385,15.9385,15.9385,15.9385,14.4940,17.3953,20.2904,18.8397,21.7410,23.1855,13.0434,24.6361,30.4386,31.8831,28.9880,20.2904,15.9385,13.0434,14.4940,13.0434,11.5927,17.3953,15.9385,11.5927);
  var circunferenciaBase = new Array(236.4474,364.4489,464.0057,564.7477,673.7861,773.9355,874.6775,974.2342,1083.8652,1184.0146,1293.0530,1384.3134,1484.4628,1575.1306,1666.3909,1748.1697,1812.1705,1866.6897,1902.8383,1939.5795,1948.4685,1948.4685,1939.5795,1930.6905,1902.8383,1875.5787,1830.5411,1776.0219,1703.1321,1630.2423,1529.5004,1411.5730,1338.6832,1211.2742,1038.2350,855.7143,692.1567,573.6367,491.8579,427.8571,346.0783,273.1886,218.6694,136.8906,54.5192,0.0000);
  var altoinf = 758.250395;
  var superficie = 117.921147;
  var volumen = 115.611750;

  var largo;
  var largoAcum;
  var cantidadGajos;
  var distanciaAux;
  var anchoAux;
  var bainha;
  var GajoMax = getAnchoMax();
  var LargoBase = getLargoBase();

  function getNumPasos() {
    return distanciaBase.length;
  }

  function getLargoBase() {
    var acumulado = 0;
    for (var i = 0; i < distanciaBase.length; i++) {
      acumulado = acumulado + distanciaBase[i];
    }
    return acumulado;
  }

  function getAnchoMax() {
    var anchoMax = 0;
    for (var i = 0; i < circunferenciaBase.length; i++) {
      if (circunferenciaBase[i] > anchoMax) anchoMax = circunferenciaBase[i];
    }
    return anchoMax;
  }

   var calcular = function (largo, cantidadGajos, bainha) {
    // if (distanciaBase.length != circunferenciaBase.length) {
    //   alert("Erro no programa: Dados iniciais incorretos!");
    //   exit;
    // }
    var response = {
      tableData : [],
      puntos : distanciaBase.length
    };

    largoAcum = 0;

    response.altoinf = Math.round(altoinf * largo / LargoBase);
    response.anchoinf = Math.round((GajoMax / Math.PI) * largo / LargoBase);
    response.boca = Math.round((circunferenciaBase[0] * largo / LargoBase / Math.PI) * 10) / 10;
    response.gajomax = Math.round(((GajoMax * largo / LargoBase / cantidadGajos)+(bainha*1)) * 10) / 10;
    response.superficie = Math.round(superficie * Math.pow(largo / LargoBase, 2) * 10) / 10;
    response.volumen = Math.round(volumen * Math.pow(largo / LargoBase, 3) * 10) / 10;
  // if (largo <= 0)
  // {
  // alert("A largura do gomo deve ser maior que zero");
  // return;
  // }
  // if (cantidadGajos < 4)
  // {
  // alert("É necessário ao menos 4 gomos");
  // return;
  // }
  // if (cantidadGajos > 200)
  // {
  // alert("Com quantos gomos pretende fazer?");
  // return;
  // }
  // if (bainha < 0)
  // {
  // alert("a bainha não pode ter uma medida negativa");
  // return;
  // }


    largoAcum=0

    for (var i = 0; i < distanciaBase.length; i++){
      distanciaAux = distanciaBase[i] * largo / LargoBase;
      anchoAux = ((circunferenciaBase[i] * largo / LargoBase) / (2 * cantidadGajos)) + (bainha / 2);
      largoAcum = largoAcum + distanciaAux;

      var temp = {
        distancia : Math.round(distanciaAux * 10) / 10,
        ancho : Math.round(anchoAux * 10) / 10,
        largoacum : Math.round(largoAcum * 10) / 10
      }
      response.tableData[i] = temp;
    }

    return response;
  }

    // Public API here
    return {
      calcular : calcular
    };
  });
