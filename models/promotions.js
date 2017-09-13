var mongoose = require('mongoose');
var promotionsSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  coupon: String,
  customers: Number,
  expense: Number,
  discountPercent: Number
 });
var Promotions = mongoose.model('Promotions', promotionsSchema);
module.exports = Promotions;
