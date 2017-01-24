const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TrainerSchema = new Schema({
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
  introduction: String,
});

const TrainerModel = mongoose.model('Trainer', TrainerSchema);

module.exports = {
  TrainerSchema: TrainerSchema,
  TrainerModel: TrainerModel,
};