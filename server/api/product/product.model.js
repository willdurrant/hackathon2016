'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productGroupName: String,
  productName: String,
  image: String
});

module.exports = mongoose.model('Product', ProductSchema, 'product');
