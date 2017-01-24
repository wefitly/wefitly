const UserSchema = require('./userSchema.js').UserSchema;
const UserModel = require('./userSchema.js').UserModel;
const bcrypt = require('bcrypt-nodejs');
const Q = require('q');

const SALT_WORK_FACTOR = 10;
const findUser = Q.nbind(UserModel.findOne, UserModel);
const findAll = Q.nbind(UserModel.find, UserModel);


UserSchema.pre('save', (next) => {
  const newUser = this;
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return console.error(err);
    }
    bcrypt.hash(newUser.password, salt, null, (error, hash) => {
      if (error) {
        return console.error(error);
      }
      newUser.password = hash;
      newUser.salt = salt;
      next();
    });
  });
});

UserModel.signup = function(user, next){
  console.log('user signup!');
 var newUser = new UserModel({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  }).save(function(err) {
    if (err) throw err;
  });
}


UserModel.comparePassword = (email, candidatePassword, next) => {
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


UserModel.findAllTrainers = (next) => {
  findAll({})
  .then((results) => {
    return next(results);
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = UserModel;
