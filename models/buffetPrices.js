var mongoose = require('mongoose');
var buffetpricesSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number
 });
var BuffetPrices = mongoose.model('BuffetPrices', buffetpricesSchema , 'buffetPrices');
module.exports = BuffetPrices;
