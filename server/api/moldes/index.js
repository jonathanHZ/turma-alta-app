'use strict';

var express = require('express');
var controller = require('./moldes.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/modelado', controller.modelado);

module.exports = router;
