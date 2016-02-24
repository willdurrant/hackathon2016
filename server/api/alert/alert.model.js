'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlertSchema = new Schema({
  uniqueId: Number,
  level: String,
  msg: String
});

module.exports = mongoose.model('Alert', AlertSchema, 'alert');
