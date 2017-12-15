'use strict';
// Required Configurations: NodeJS, Google Trends API, Twilio
// BlockTrail API
// Past Datasets: https://www.coindesk.com/price/
var accountSid = ''; 
var authToken = ''; 
var twilioNumber = '';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var numbers = ['2173051574','0000001','00000002'] ;

var threshold1 = 5;
var threshold2 = 10;
var threshold3 = 15;

setInterval(function(){
  // Functions for checking prices of cryptocurrencies
  // Runs every 10 seconds
  checkBitcoin();
  checkEthereum();
  checkLitecoin();

}, 10000);


function checkBitcoin(){
  // COIN MARKET CAP API CALL 
  // Var change
  if(thresholdExceed(change1,change2,change3)){
  	// Send Text
  }
}

function checkEthereum(){
  // COIN MARKET CAP API CALL 
  // Var change
  if(thresholdExceed(change1,change2,change3)){
  	// Send Text
  }
}

function checkLitecoin(){
  // COIN MARKET CAP API CALL 
  // Var change
  if(thresholdExceed(change1,change2,change3)){
  	// Send Text
  }
}

function thresholdExceed(change1,change2,change3){
	if(change1>threshold1 || change2>threshold2 || change3 > threshold3){
		return true;
	}
	return false;
}
function percentageText(numbers,coin,value,change,time){
  // Twilio API 
  for (i = 0; i < numbers.length; i++) {
  	var currnumber = numbers[i];
  	var str = " had a ";
  	var space = " ";
  	var timemessage = " in the past ";
  	var finalmessage = coin.concat(str,value,space,change,timemessage,time);
    client.messages.create({
    body: finalmessage,
    to: currnumber,  
    from: twilioNumber // From a valid Twilio number
})
.then((message) => console.log(message.sid));
} 
  
}

function thresholdText(numbers,coin,value){
  // Twilio API 
  for (i = 0; i < numbers.length; i++) {
  	var currnumber = numbers[i];
  	var str = " just hit a threshold of ";
  	var finalmessage = coin.concat(str,value);
    client.messages.create({
    body: finalmessage,
    to: currnumber,  
    from: twilioNumber // From a valid Twilio number
})
.then((message) => console.log(message.sid));
} 
  
}
// Potential additional features:
// (1) Google Trends API for analytics
// (2) Saving datasets onto database