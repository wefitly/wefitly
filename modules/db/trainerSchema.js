const Q = require('q');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const SALT_WORK_FACTOR = 10;

const TrainerSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  firstname: String,
  lastname: String,
  profilepic: String,
  bio: String,
  services: Object,
  hourlyrate: Number,
  location: String,
  introduction: String,
});

const TrainerModel = mongoose.model('Trainer', TrainerSchema);

module.exports = {
  TrainerSchema: TrainerSchema,
  TrainerModel: TrainerModel,
};
