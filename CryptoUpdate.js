// Required Configurations: PhantomJS Library, Configured PhantomJS PATH variable, Windows CMD Batch

var page = require('webpage').create();
  //BITCOIN PRICES AND CHANGES
  page.open('https://coinmarketcap.com/currencies/bitcoin/#markets', function(status) {
    if (status === "success") {
      console.log("Success");

      var BTC = page.evaluate(function(){
    //  var price = document.getElementById("quote_price");
      var price1 = document.getElementById("quote_price").innerHTML;
      return price1;
    });
    var content = BTC;
    console.log(content);

    var BTC2 = page.evaluate(function(){
      try{
    // Try to see if the change is negative first
      var elementlist = document.getElementsByClassName("text-large  negative_change");
      var pricechange = elementlist[0].innerHTML;
      return pricechange;
    }
    catch(ex){
      var elementlist2 = document.getElementsByClassName("text-large  positive_change");
      var pricechange2 = elementlist2[0].innerHTML;
      return pricechange2;
    }
    });
    var content2 = BTC2;
    console.log(content2);

    }
  });

  page.open('https://coinmarketcap.com/currencies/ethereum/#markets', function(status) {
    if (status === "success") {
      console.log("Success");

      var ETH = page.evaluate(function(){
    //  var price = document.getElementById("quote_price");
      var price1 = document.getElementById("quote_price").innerHTML;
      return price1;
    });
    var content = ETH;
    console.log(content);

    var ETH2 = page.evaluate(function(){
      try{
    // Try to see if the change is negative first
      var elementlist = document.getElementsByClassName("text-large  negative_change");
      var pricechange = elementlist[0].innerHTML;
      return pricechange;
    }
    catch(ex){
      var elementlist2 = document.getElementsByClassName("text-large  positive_change");
      var pricechange2 = elementlist2[0].innerHTML;
      return pricechange2;
    }
    });
    var content2 = ETH2;
    console.log(content2);
    }
  });


  page.open('https://coinmarketcap.com/currencies/litecoin/#markets', function(status) {
    if (status === "success") {
      console.log("Success");

      var LTC = page.evaluate(function(){
    //  var price = document.getElementById("quote_price");
      var price1 = document.getElementById("quote_price").innerHTML;
      return price1;
    });
    var content = LTC;
    console.log(content);

    var LTC2 = page.evaluate(function(){
      try{
    // Try to see if the change is negative first
      var elementlist = document.getElementsByClassName("text-large  negative_change");
      var pricechange = elementlist[0].innerHTML;
      return pricechange;
    }
    catch(ex){
      var elementlist2 = document.getElementsByClassName("text-large  positive_change");
      var pricechange2 = elementlist2[0].innerHTML;
      return pricechange2;
    }
    });
    var content2 = LTC2;
    console.log(content2);
      phantom.exit();
    }
  });
