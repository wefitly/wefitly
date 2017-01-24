var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session')
var path = require('path');
var passport = require('./modules/auth.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var trainerModel = require('./modules/db/trainerSchema.js')

mongoose.connect('mongodb://localhost:27017/wefitlytest');

var db = mongoose.connection;

db.once('open', function() {
  console.log('database connected!')
});

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

// app.use(passport.initialize());
// app.use(passport.session());

//routes should be in their own file, refactor later
app.post('/api/trainerSignup',function(req,res){
  var user = req.body
  trainerModel.schema.methods.signup(user, function(){
    res.end()
  })
})

app.post('/api/trainerSignin', function(req, res){
  var password = req.body.password;
  var email = req.body.email;
  trainerModel.schema.methods.comparePassword(email, password, function(err, isMatch){
    if (err) {
      res.end(err)
    }
    if (isMatch){
      req.session.email = email;
      res.end("success")
    } else {
      res.end("failed")
    }
  })
})


//mongoose.connection('mongodb://localhost/')
// var db = mongoose.connection;

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/client/public')));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
