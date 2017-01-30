const BookingSchema = require('./bookingSchema.js');

module.exports = {

  addBooking: function(req, res) {
    console.log('booked!');

    new BookingSchema({
      userEmail: req.body.userEmail,
      isBooked: req.body.isBooked,
      trainerEmail: req.body.trainerEmail
    }).save((err) => {
      if (err) throw err;
    });
  }
}