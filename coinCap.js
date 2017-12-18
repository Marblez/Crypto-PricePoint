'use strict';
//This is the module that houses the function calls
// from coinmarketcap

var https = require('https');

//var url = 'https://api.gdax.com/products/ETH-USD/ticker';
//var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
var request = require("request");
var jsonObject;
var link = {
  url: 'https://api.gdax.com/products/ETH-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
request(link, function (error, response, body) {
  	 jsonObject = JSON.parse(body);
     console.log(jsonObject);
});
/*
module.exports = {
	function bitcoin(){
		retrieveJSON(); // should do something to parse the JSON
		//bitcoin is in first posiion of the JSON array/file
 } 


 	function ethereum(){
 		retrieveJSON();
 		//same thing as above
 		//is in 2nd position
 	}

 	function litecoin(){
 		retrieveJSON();
 		//same thing as above
 		//is in 4th position, 3rd position is ripple i believe
 	}
}*/