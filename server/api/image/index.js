'use strict';

var express = require('express');
var controller = require('./image.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/year=:year', controller.year);

module.exports = router;
