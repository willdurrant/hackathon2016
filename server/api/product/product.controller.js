/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products              ->  index
 */

'use strict';

var Product = require('./product.model');

// Gets a list of Products
exports.index = function(req, res) {
  Product.find(function (err, products) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(products);
  });
};

// Get a single thing
exports.getByLegName = function(req, res) {
  Product.find({"legName": req.params.legName}, function (err, products) {
    if(err) { return handleError(res, err); }
    if(!products || products.length == 0) { return res.status(404).send('Not Found'); }
    return res.json(products);
  });
};

// Get a single thing
exports.getByProductGroupName = function(req, res) {
  Product.find({"productGroupName": req.params.productGroupName}, function (err, products) {
    if(err) { return handleError(res, err); }
    if(!products || products.length == 0) { return res.status(404).send('Not Found'); }
    return res.json(products);
  });
};
