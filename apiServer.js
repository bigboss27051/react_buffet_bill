var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APIS

var mongoose = require('mongoose');
//Mongo LAB
mongoose.connect('mongodb://bigboss27051:bigboss27051@ds135514.mlab.com:35514/buffet_bill')


var db = mongoose.connection;
db.on('error',console.error.bind(console,'# MongoDB - connection error :'));

var Promotions = require('./models/promotions.js');
var buffetPrices = require('./models/buffetPrices.js');

// GET PROMOTIONS
app.get('/promotions',(req,res)=>{
  Promotions.find((err,promotions)=>{
    if (err) {
      throw err;
    }
    res.json(promotions);
  })
});

// GET BUFFET PRICES
app.get('/buffetprices',(req,res)=>{
  buffetPrices.find((err,buffetPrices)=>{
    if (err) {
      throw err;
    }
    console.log('buffetPrices',buffetPrices);
    res.json(buffetPrices);
  })
});


//END APIs


app.listen(3001, function(err){
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3001');
})
