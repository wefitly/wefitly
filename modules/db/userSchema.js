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


const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema: UserSchema,
  UserModel: UserModel,
};
