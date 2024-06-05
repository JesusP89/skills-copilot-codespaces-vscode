// Create web server
// Create a new Express.js project
// Create a new route in Express.js that, when requested, reads a file and returns the number of new line characters it contains to the user.
// The server should listen on the port provided by the first argument to your program.
// HINTS
// To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:
// var fs = require('fs')
// Now you have the full fs module available in a variable named fs.
// All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.
// Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().
// Documentation on the fs module can be found by pointing your browser here:
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
// Check to see if your program is correct by running this command:
// $ learnyounode verify comments.js
// By executing this command, you should see the output of your http server in your terminal

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/comments', function(req, res) {
  var file = fs.readFileSync(process.argv[3]);
  var str = file.toString();
  var count = str.split('\n').length;
  res.send(count.toString());
});

app.listen(process.argv[2]);