var Q = require('q')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')
var SALT_WORK_FACTOR = 10;

var TrainerSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  firstname: String,
  lastname: String,
  profilepic: String,
  bio: String,
  services: String,
  hourlyrate: Number,
  location: String,
  introduction: String
})

var Trainer = mongoose.model('Trainer', TrainerSchema)

module.exports = mongoose.model('Trainer', TrainerSchema)


//Need to refactor these as promises
TrainerSchema.pre('save', function(next){
  var newTrainer = this;
  bcrypt.genSalt(10, function(err, salt){
    if(err){
      return console.error(err)
    }
    bcrypt.hash(newTrainer.password, salt, null, function(err, hash){
      if(err){
        return console.error(err)
      }
      newTrainer.password = hash;
      newTrainer.salt = salt;
      next()
    })
  })
})

TrainerSchema.methods.signup = function(user, next){
 var newTrainer = new Trainer({
    username: user.email,
    password: user.password
  })
 newTrainer.save()
}


TrainerSchema.methods.comparePassword = function(candidatePassword, next){
  console.log('user.password', user.password)
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    var err = new Error("Something has gone horribly, horribly wrong")
    if(err){
      return console.error(err)
    }
    next(null, isMatch)
  })
}

module.exports = mongoose.model('Trainer', TrainerSchema)

