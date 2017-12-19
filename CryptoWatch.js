'use strict';
// Required Configurations: NodeJS, GDAX API, Twilio API
// BlockTrail API
// Past Datasets: https://www.coindesk.com/price/
// SET THRESHOLDS
var eth = 800;
var btc = 20000;
var ltc = 400;
var jobj;
var ethprice;
var btcprice;
var ltcprice;
var https = require('https');
var request = require("request");
var accountSid = 'ACf6e2c57a49f3a5266e44e4e292c94b5a';
var authToken = '069cf667c68c5e3624ba7f6a1ee68564';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var numbers = ['+12173051574','+18057249004'];
var twilioNumber = '+12176567597';

//var coinCap = require('./coinMarketCap');

setInterval(function(){
  //percentChange('Bitcoin','increase','40',24);
  //thresholdText('Ethereum',900);
  checkCoins();


}, 3000);

function checkPercentage(percentage){
  if(percentage>10){
    return true;
  }
  else{
    return false;
  }
}

function checkETHThreshold(price){
  if(eth<price){
    eth = eth + 100;
    return true;
  }
  else{
    return false;
  }
}

function checkBTCThreshold(price){
  if(btc<price){
    btc = btc + 1000;
    return true;
  }
  else{
    return false;
  }
}

function checkLTCThreshold(price){
  if(ltc<price){
    ltc = ltc + 100;
    return true;
  }
  else{
    return false;
  }
}

function thresholdText(coin,value){
  for(let i = 0; i<numbers.length; i++){
    var str1 = " has reached the price of "
    var message = coin.concat(str1,value);
    client.messages.create({
        body: message,
        to: numbers[i],  // Text this number
        from: twilioNumber // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }
}

function percentChange(coin,change,percent,time){
  for(let i = 0; i<numbers.length; i++){
    var str1 = " has "
    var space = " by ";
    var str2 = "%";
    var str3 = " in the last "
    var str4 = " hours."
    var message = coin.concat(str1,change,space,percent,str2,str3,time,str4);
    client.messages.create({
        body: message,
        to: numbers[i],  // Text this number
        from: twilioNumber // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }
}

function runtest(){
  for(let i = 0; i<numbers.length; i++){
    client.messages.create({
        body: 'Hello from Node',
        to: numbers[i],  // Text this number
        from: twilioNumber // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }
}

function checkCoins(){
var linketh = {
  url: 'https://api.gdax.com/products/ETH-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
var linkbtc = {
  url: 'https://api.gdax.com/products/BTC-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
var linkltc = {
  url: 'https://api.gdax.com/products/LTC-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
request(linketh, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   ethprice = jobj.price
});
request(linkbtc, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   btcprice = jobj.price
});
request(linkltc, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   ltcprice = jobj.price
});
setTimeout(function(){
//console.log(ltcprice);
//console.log(btcprice);
//console.log(ethprice);
if(checkETHThreshold(ethprice)){
  thresholdText('Ethereum',ethprice);
}
if(checkBTCThreshold(btcprice)){
  thresholdText('Bitcoin',ethprice);
}
if(checkLTCThreshold(ltcprice)){
  thresholdText('Litecoin',ethprice);
}
}, 1000);

}
/*
var https = require('https');
var request = require("request");
var jobj;
var ethprice;
var btcprice;
var ltcprice;
var linketh = {
  url: 'https://api.gdax.com/products/ETH-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
var linkbtc = {
  url: 'https://api.gdax.com/products/BTC-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
var linkltc = {
  url: 'https://api.gdax.com/products/LTC-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
request(linketh, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   ethprice = jobj.price
});
request(linkbtc, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   btcprice = jobj.price
});
request(linkltc, function (error, response, body) {
     jobj = JSON.parse(body);
   //console.log(jobj.price);
   ltcprice = jobj.price
});
setTimeout(function(){
console.log(ltcprice);
console.log(btcprice);
console.log(ethprice);
}, 1000);
*/
// Potential additional features:
// (1) Google Trends API for analytics
// (2) Saving datasets onto database
