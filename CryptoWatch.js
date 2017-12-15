'use strict';
// Required Configurations: NodeJS, Google Trends API, Twilio
// BlockTrail API
// Past Datasets: https://www.coindesk.com/price/
var accountSid = ''; 
var authToken = ''; 
var twilioNumber = '';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var numbers = ['000000','0000001','00000002'] ;

setInterval(function(){
  // Functions for checking prices of cryptocurrencies
  // Runs every 5 seconds
  checkBitcoin();
  checkEthereum();
  checkLitecoin();

}, 5000);


function checkBitcoin(){
  // API CALL
}

function checkEthereum(){
  // API CALL
}

function checkLitecoin(){
  // API CALL 

}

function sendText(numbers,coin,message,value){
  // Twilio API 
  for (i = 0; i < numbers.length; i++) {
  	var currnumber = numbers[i];
    client.messages.create({
    body: 'Values hit threshhold',
    to: currnumber,  
    from: twilioNumber // From a valid Twilio number
})
.then((message) => console.log(message.sid));
} 
  
}

// Potential additional features:
// (1) Google Trends API for analytics
// (2) Saving datasets onto database