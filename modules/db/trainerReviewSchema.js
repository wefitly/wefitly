var mongooes = require('mongooes');

var Schema = mongoose.Schema;

var TrainerReviewSchema = new Schema({
  trainerid: Number,
  review: String,
  rating: String,
  reviewid: Number,
  userid: Number
});

module.exports = mongoose.model('TrainerReview', TrainerReviewSchema);