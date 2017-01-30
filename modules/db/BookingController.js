const BookingSchema = require('./bookingSchema.js');

module.exports = {

  addBooking: function(req, res) {
    console.log('booked!');

    new BookingSchema({
      userEmail: req.body.userEmail,
      isBooked: req.body.isBooked,
      trainerEmail: req.body.trainerEmail,
      service: req.body.service,
      duration: req.body.duration
    }).save((err) => {
      if (err) throw err;
    });
  },

  displayBookings: function(req, res) {
    console.log('trying to display');
    BookingSchema.find({}).exec(function(err, booking) {
      if (err) throw err;
      else {
        res.send(booking);
      }
    });
  }
}