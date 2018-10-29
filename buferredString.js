var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  var buffer = "";
  response.on('data', function (chunk) {
   buffer += chunk;
  });


  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log(buffer); //because of asyncronous we have to console log at the end as we have to wait for all the chunk to accumulate in buffer
    console.log('Response stream complete.');
  });

});
}



getAndPrintHTML();