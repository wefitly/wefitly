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
}


module.exports = mongoose.method('Trainer', TrainerSchema)

