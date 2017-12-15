'use strict';
// Required Configurations: NodeJS, Google Trends API
// BlockTrail API
// Past Datasets: https://www.coindesk.com/price/

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

function sendText(number,coin,message,value){
  // Twilio API POST
}

// Potential additional features:
// (1) Google Trends API for analytics
// (2) Saving datasets onto database