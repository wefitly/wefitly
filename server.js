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
var MemoryStore = session.MemoryStore;
app.use(session({
  secret: 'themitochondriaisthepowerhouseofthecell',
  resave: true,
  store:new MemoryStore(),
  saveUninitialized: true,
}));

// app.use(passport.initialize());
// app.use(passport.session());

//routes should be in their own file, refactor later
app.post('/api/userSignup', function(req, res) {
  const user = req.body;
  UserModel.signup(user, function() {
  });

  res.end('success');
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
      req.session.save();
      res.redirect('/api/userDash');
    } else {
      res.end('failed');
    }
  });
});

// routes should be in their own file, refactor later
app.post('/api/trainerSignup', (req, res) => {
  const user = req.body;
  TrainerModel.signup(user, (err) => {
    if (err){
      console.log('failed')
      res.end('fail')
    }else {
      req.session.isTrainer = true;
      req.session.email = user.email;
      req.session.save();
      res.end('success');
    }
  });

});


app.post('/api/trainerSignin', (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  TrainerModel.comparePassword(email, password, (err, isMatch) => {

    if (err) {
      res.end(err);
    }
    if (isMatch) {
      req.session.isTrainer = true;
      req.session.email = email;
      req.session.save();
      res.end('success');
    } else {
      res.sendStatus(504);
    }
  });
});

app.get('/api/filterTrainers', (req, res) => {
  const location = req.query.location;
  TrainerModel.filterTrainers(location, (results) => {
    res.json(results);
  })
});

app.get('/api/getAllTrainers', (req, res) => {
  TrainerModel.findAllTrainers((results) => {
    res.json(results);
  });
});

app.post('/api/updateTrainer',(req,res)=>{
  if (req.session){
    if (req.session.isTrainer){
      const updateObj = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        bio:req.body.bio,
        services:{
          '1on1':req.body.oneonone?true:false,
          'dietcons':req.body.dietcons?true:false,
          'group':req.body.group?true:false,
          'remote':req.body.remote?true:false,
        },
        rate:req.body.rate
      }
      TrainerModel.updateTrainer(req.session.email,updateObj,(err)=>{
        if (err){
          res.sendStatus(504);
        }else{
          res.end('success');
        }
      })
    }else{
      res.sendStatus(401);
    }
  }else{
    console.log('unauth on profile');
    res.sendStatus(401);
  }
})


// mongoose.connection('mongodb://localhost/')
// const db = mongoose.connection;

const port = process.env.PORT || 3100;

app.use(express.static(path.join(__dirname + '/client/public')));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
