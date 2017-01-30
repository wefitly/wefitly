var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
  clientFirstname: String,
  clientLastname: String,
  isBooked: Boolean,
  trainerEmail: String,
  service: String,
  duration: String
});

module.exports = mongoose.model('Booking', BookingSchema);

