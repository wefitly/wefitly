const TrainerSchema = require('./TrainerSchema.js').TrainerSchema;
const TrainerModel = require('./TrainerSchema.js').TrainerModel;
const bcrypt = require('bcrypt-nodejs');
const Q = require('q');

const SALT_WORK_FACTOR = 10;
const findUser = Q.nbind(TrainerModel.findOne, TrainerModel);
const findAll = Q.nbind(TrainerModel.find, TrainerModel);


TrainerSchema.pre('save', function (next) {
  let newTrainer = this;
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
  console.log(user);
  let newTrainer = new TrainerModel({
    username: user.email,
    password: user.password,
    location: user.location,
  })
  .save();
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

// refactor to filter by location
TrainerModel.filterTrainers = (location, next) => {
  findAll({ location: location }, { username: 1, location: 1 } )
  .then((results) => {
    return next(results);
  })
  .catch((err) => {
    console.error(err);
  });
};

// methods to allow updating of trainer records
// updates is an object that corresponds to the key value pair
// of the schema
TrainerModel.updateTrainer = (trainerEmail, updates, next)=>{
  update({username:trainerEmail},{$set:updates},function(err){
    if (err){
      next(err);
    }else{
      next();
    }
  })
}

module.exports = TrainerModel;
