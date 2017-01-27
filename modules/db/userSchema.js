var Q = require('q')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  salt: String
})


UserSchema.pre('save', function(next){
  var newUser = this;
  bcrypt.genSalt(10, function(err, salt){
    if(err){
      return console.error(err)
    }
    bcrypt.hash(newUser.password, salt, null, function(err, hash){
      if(err){
        return console.error(err)
      }
      newUser.password = hash;
      newUser.salt = salt;
      next()
    })
  })
})

UserSchema.methods.signup = function(user, next){

 var newUser = new User({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  }).save(function(err) {
    if (err) throw err;
  })
}


UserSchema.methods.comparePassword = function(candidatePassword, next){
  console.log('user.password', user.password)
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    var err = new Error("Something has gone horribly, horribly wrong")
    if(err){
      return console.error(err)
    }
    next(null, isMatch)
  })
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema: UserSchema,
  UserModel: UserModel,
};
