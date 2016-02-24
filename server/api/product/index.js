'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/legName/:legName', controller.getByLegName);
router.get('/productGroupName/:productGroupName', controller.getByProductGroupName);

module.exports = router;
