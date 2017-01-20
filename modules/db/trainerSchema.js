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

<<<<<<< HEAD
//Need to refactor these as promises
TrainerSchema.pre('save', function(next){
  var user = this;
  if(!user.isModified('password')){
    return next()
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err){
      return next(err)
    }
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err){
        return next(err)
      }
      user.password = hash;
      user.salt = salt;
      next();
    })
  })
})


TrainerSchema.methods.comparePassword = function(candidatePassword, next){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return next(err)
    }
    next(null, isMatch)
  })
=======
TrainerSchema.methods.hashPassword = function(){
  var trainer = this;
  return new Promise(function(resolve, reject){
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      if(err){
        console.error(error)
      }
      bcrypt.hash(trainer.password, salt, null, function(err, hash){
        if(err){
          console.error(error)
        }
        trainer.password = hash;
        trainer.salt = salt;
      })
    })
  })
>>>>>>> 4aab3bacb473db6060553f5ef70b131f186a6ea2
}


module.exports = mongoose.method('Trainer', TrainerSchema)

