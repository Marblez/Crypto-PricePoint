'use strict';
//This is the module that houses the function calls
// from coinmarketcap
let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=15'
function retrieveJSON(){
	//has something to do with an XMLhttprequest????
}
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
}