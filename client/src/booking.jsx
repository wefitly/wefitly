import React from 'react';
import BookingRow from './bookingRow.jsx';
const BookingTable = ({booking, rejectBooking}) => (
  <div>
    <ul className="trainers w-list-unstyled">
    {booking.map((book, i) =>
      <BookingRow key={i} service={book.service} duration={book.duration} userFirstname={book.userFirstname} userLastname={book.userLastname} />
    )}
    </ul>
  </div>
);

export default BookingTable;
//reject Booking implementation to be added later
// rejectBooking={rejectBooking.rejectBooking}