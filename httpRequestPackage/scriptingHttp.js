
var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })

       .on('response', function (response) {
         console.log('1 Response Status Code: ', response.statusCode);
       })

       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('2 Download complete.');

