var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
  userEmail: String,
  isBooked: Boolean,
  trainerEmail: String
});

module.exports = mongoose.model('Booking', BookingSchema);

