var https = require("https");


function getAndPrintHTML (options) {

  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

// var requestOptions2 = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };

// getAndPrintHTML(requestOptions2);
