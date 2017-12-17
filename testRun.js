'use strict';

var accountSid = 'ACf6e2c57a49f3a5266e44e4e292c94b5a';
var authToken = '069cf667c68c5e3624ba7f6a1ee68564';
var twilioNumber = '+12176567597';
var numbers = ['+12173051574','+18057249004'];
var targetNumber = '+12173051574';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var count = 0;
setInterval(function(){
  count++;
  console.log("Run #"+count);
  runtest();


}, 1000);

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
