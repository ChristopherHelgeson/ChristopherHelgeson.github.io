// const express = require('express')
// const app = express()
//
// app.get('/', function (req, res) {
//   res.send('Hello, Big Beautiful World! Howdy Doody.')
// })
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

// from: http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express

var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join('C:/Users/chris/coLearning/intro-to-programming/dashboard/ChristopherHelgeson.github.io', 'public')));


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
