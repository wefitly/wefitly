var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  salt: String
})

module.exports = mongoose.model('User', UserSchema);
