import React from 'react';
import BookingRow from './bookingRow.jsx';
const BookingTable = ({booking}) => (
  <div>
    {booking.map((book, i) =>

        <BookingRow key={i} service={book.service} duration={book.duration} userEmail={book.userEmail}/>

    )}
  </div>
);

export default BookingTable;