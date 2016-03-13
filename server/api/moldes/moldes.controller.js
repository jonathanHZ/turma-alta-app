/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/moldess              ->  index
 */

'use strict';

// Gets a list of Moldess
export function index(req, res) {
  res.json([
    {
      'id': 0,
      'name': 'modelado',
      'icon': 'fa fa-picture-o fa-2x',
      'path': 'app/moldes/modelado/modelado.html',
      'ctrl': 'ModeladoCtrl'
    },
    {
      'id': 1,
      'name': 'truff',
      'icon': 'fa fa-picture-o fa-2x'
    },
    {
      'id': 2,
      'name': 'piao',
      'icon': 'fa fa-picture-o fa-2x'
    },
    {
      'id': 3,
      'name': 'golfier',
      'icon': 'fa fa-picture-o fa-2x'
    },
    {
      'id': 4,
      'name': 'lapidado',
      'icon': 'fa fa-picture-o fa-2x'
    }
  ]);
};

export function modelado(req, res) {
  res.json([
    {
      'id': 0,
      'name': 'modelado-serpente',
      'state': 'modelado.serpente'
    },
    {
      'id': 1,
      'name': 'modelado-spinne',
      'state': 'modelado.spinne'
    }
  ]);
};
