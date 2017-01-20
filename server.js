var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session')
var path = require('path');
var passport = require('./modules/auth.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wefitlytest');


var app = express();
app.use(bodyParser.urlencoded({
      extended: true
}))
app.use(cookieParser());
app.use(bodyParser.json())

app.use(session({
  secret: 'the mitochondria is the powerhouse of the cell',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.post('/api/trainerSignup',function(req,res){
  console.log(req.body)
  var user = req.body
  trainerModel.schema.methods.signup(user, function(){
    console.log('server file callback on post to signupapi')
    res.end()
  })
})



//mongoose.connection('mongodb://localhost/')
// var db = mongoose.connection;

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/client/public')));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
