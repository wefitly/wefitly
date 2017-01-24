const TrainerSchema = require('./TrainerSchema.js').TrainerSchema;
const TrainerModel = require('./TrainerSchema.js').TrainerModel;
const bcrypt = require('bcrypt-nodejs');
const Q = require('q');

const SALT_WORK_FACTOR = 10;
const findUser = Q.nbind(TrainerModel.findOne, TrainerModel);
const findAll = Q.nbind(TrainerModel.find, TrainerModel);


TrainerSchema.pre('save', (next) => {
  const newTrainer = this;
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return console.error(err);
    }
    bcrypt.hash(newTrainer.password, salt, null, (error, hash) => {
      if (error) {
        return console.error(error);
      }
      newTrainer.password = hash;
      newTrainer.salt = salt;
      next();
    });
  });
});

TrainerModel.signup = (user, next) => {
  const newTrainer = new TrainerModel({
    username: user.email,
    password: user.password,
  });
  newTrainer.save();
};


TrainerModel.comparePassword = (email, candidatePassword, next) => {
  findUser({ username: email })
  .then((match) => {
    if (match) {
      bcrypt.compare(candidatePassword, match.password, (err, isMatch) => {
        if (err) {
          next(err, null);
        }
        next(null, isMatch);
      });
    } else {
      next('email not found');
    }
  });
};


TrainerModel.findAllTrainers = (next) => {
  findAll({})
  .then((results) => {
    return next(results);
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = TrainerModel;












