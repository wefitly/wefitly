import React from 'react';
import BookingRow from './bookingRow.jsx';
class BookingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.booking.map((book, i) =>
          <BookingRow key={i} service={book.service} duration={book.duration} userFirstname={book.userFirstname} userLastname={book.userLastname} rejectBooking={this.props.rejectBooking}/>
        )}
      </div>
    );
  }
}

export default BookingTable;
//reject Booking implementation to be added later
// rejectBooking={rejectBooking}