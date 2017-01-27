import React from 'react';
import BookingRow from './bookingRow.jsx';
const BookingTable = ({booking}) => (
  <div>
    {booking.map((book, i) =>

        <BookingRow key={i} activity={book.activity} duration={book.duration} />

    )}
  </div>
);

export default BookingTable;