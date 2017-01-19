var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy({
  usernameField:"email"
}, function(username,password,done){

}))

module.exports = passport;
