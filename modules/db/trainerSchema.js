var mongoose = require('mongoose')

var Schema = mongoose.Schema

var TrainerSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  profilepic: String,
  bio: String,
  services: String,
  hourlyrate: Number,
  location: String,
  introduction: String
})

module.exports = TrainerSchema;

