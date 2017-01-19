var mongoose = require('mongoose')

var Schema = mongoose.Schema

var TrainerSchema = new Schema({
  firstname: String,
  lastname: String,
  profilepic: String,
  bio: String,
  services: String,
  hourlyrate: Number,
  location: String,
  introduction: String
})

module.exports = mongoose.model('Trainer', TrainerSchema)

