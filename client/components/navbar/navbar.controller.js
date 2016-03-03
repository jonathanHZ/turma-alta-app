'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'state': 'main',
      'tooltipClass': 'icons-header-home',
      'aClass': 'icons-header-a-home',
      'icono': 'fa fa-home fa-2x'
    },
    {
      'title': 'Moldes',
      'state': 'moldes',
      'tooltipClass': 'icons-header-moldes',
      'aClass': 'icons-header-a-moldes',
      'icono': 'fa fa-calculator fa-2x'
    },
    {
      'title': 'Galería',
      'state': 'galeria',
      'tooltipClass': 'icons-header-galeria',
      'aClass': 'icons-header-a-galeria',
      'icono': 'fa fa-picture-o fa-2x'
    }
];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('turmaAltaAppApp')
  .controller('NavbarController', NavbarController);
