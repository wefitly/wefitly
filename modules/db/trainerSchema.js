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

var findUser = Q.nbind(Trainer.findOne, Trainer)


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
 newTrainer.save()}


TrainerSchema.methods.comparePassword = function(email, candidatePassword, next){
  findUser({username: email})
  .then( (match) => {
    if(match){
      bcrypt.compare(candidatePassword, match.password, function(err, isMatch){
        if(err){
          next(err, null)

        }
        console.log('isMatch', isMatch)
        next(null, isMatch)
      })
    } else {
      next("email not found")
    }
  })
}

module.exports = mongoose.model('Trainer', TrainerSchema)

