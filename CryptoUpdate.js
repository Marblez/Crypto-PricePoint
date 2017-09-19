// Required Configurations: PhantomJS Library, Configured PhantomJS PATH variable, Windows CMD Batch


var page = require('webpage').create();

page.open('https://coinmarketcap.com/', function(status) {
  if (status === "success") {
    page.render('renderfirst.pdf', {
      format: 'pdf',
      quality: '100'
    });
    
    phantom.exit();

  }
});
