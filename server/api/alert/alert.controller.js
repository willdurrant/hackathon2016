/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/alerts              ->  index
 */

'use strict';

var Alert = require('./alert.model');

// Gets a list of Products
exports.index = function(req, res) {
  Alert.find(function (err, alerts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(alerts);
  });
};

exports.create = function(req, res) {
  Alert.create(req.body, function(err, alert) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(alert);
  });
};

exports.destroy = function(req, res) {
  Alert.find(req.params.id, function (err, alerts) {
    if(err) { return handleError(res, err); }
    for (var i = 0; i < alerts.length; i++) {
      alerts[i].remove();
    }
    return res.status(204).send('No Content');
  });
};
