var mongoose = require('mongoose')
var Trainer = require('db/trainerSchema.js')

var createTrainer = Trainer.create;
var findTrainer = Trainer.findOne;

module.exports = {

  signup: function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    findTrainer({username: username})
      .then(function(match){
        if(match){
          //needs to do something else that directly warns user
          console.log('User already exists. Pick a new name')
        } else {
          return createTrainer({
            username: username,
            username: password
          })
        }
      })
      //.then(some kind of token or cookie)
      .catch(function(error){
        console.error(error)
      })
  }
}