'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  tripName: String,
  tripStartDate: Date,
  tripEndDate: Date,
  legName: String,
  legStartDate: Date,
  legEndDate: Date,
  stageName: String,
  productGroupName: String,
  productName: String,
  image: String
});

module.exports = mongoose.model('Product', ProductSchema, 'product');
