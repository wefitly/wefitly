var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//mongoose.connection('mongodb://localhost/')
// var db = mongoose.connection;




var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/client/public')));

app.listen(port, () => {
  console.log('listening on port: ', port);
});