const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const passport = require('./modules/auth.js');
const cookieParser = require('cookie-parser');
const TrainerModel = require('./modules/db/trainerMethods.js');
const UserModel = require('./modules/db/userMethods.js');

mongoose.connect('mongodb://localhost:27017/wefitlytest');

const db = mongoose.connection;

db.once('open', () => {
  console.log('database connected!');
});

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
  secret: 'the mitochondria is the powerhouse of the cell',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

// app.use(passport.initialize());
// app.use(passport.session());


//routes should be in their own file, refactor later
app.post('/api/userSignup', function(req, res) {
  // new UserModel({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   email: req.body.email,
  //   password: req.body.ps
  // }).save(function(err) {
  //   if (err) throw err;
  // })
  console.log(req.body);
  const user = req.body;
  UserModel.signup(user, function() {
    res.end();
  });
});

app.post('/api/userSignin', function(req, res) {
  const password = req.body.password;
  const email = req.body.email;
  UserModel.comparePassword(email, password, (err, isMatch) => {
    if (err) {
      res.end(err);
    }
    if (isMatch) {
      req.session.email = email;
      res.end('succss');
    } else {
      res.end('failed');
    }
  });
});

// routes should be in their own file, refactor later
app.post('/api/trainerSignup', (req, res) => {
  const user = req.body;
  TrainerModel.signup(user, () => {
    res.end();
  });
});


app.post('/api/trainerSignin', (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  TrainerModel.comparePassword(email, password, location, (err, isMatch) => {
    if (err) {
      res.end(err);
    }
    if (isMatch) {
      req.session.email = email;
      res.end('success');
    } else {
      res.end('failed');
    }
  });
});

app.get('/api/filterTrainers', (req, res) => {
  //const location = req.body.location;
  const location = 'San Francisco';
  TrainerModel.filterTrainers(location, (results) => {
    res.json(results);
  })
});

app.get('/api/getAllTrainers', (req, res) => {
  TrainerModel.findAllTrainers((results) => {
    res.json(results);
  });
});


// mongoose.connection('mongodb://localhost/')
// const db = mongoose.connection;

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/client/public')));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
