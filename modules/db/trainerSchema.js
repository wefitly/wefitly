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

const Trainer = mongoose.model('Trainer', TrainerSchema);

// Need to refactor these as promises
TrainerSchema.pre('save', function (next) {
  const newTrainer = this;
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return console.error(err);
    }
    bcrypt.hash(newTrainer.password, salt, null, function (err, hash) {
      if (err) {
        return console.error(err);
      }
      newTrainer.password = hash;
      newTrainer.salt = salt;
      next();
    });
  });
});

TrainerSchema.methods.signup = function (user, next) {
  const newTrainer = new Trainer({
    username: user.email,
    password: user.password,
  });
  newTrainer.save();
  res.end();
};


TrainerSchema.methods.comparePassword = function (candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return console.error(err);
    }
    next(null, isMatch);
  });
};

const TrainerModel = mongoose.model('Trainer', TrainerSchema);

module.exports = {
  TrainerSchema: TrainerSchema,
  TrainerModel: TrainerModel,
};
