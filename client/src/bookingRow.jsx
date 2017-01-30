import React from 'react';

class BookingRow extends React.Component {
  constructor(props) {
    super(props);
  }
  //implement reject booking and accept booking later
  // renderActions() {
  //   return(
  //      <td>
  //       <button onClick={this.props.rejectBooking.bind(this, this.props.service)}>Reject</button>
  //     </td>
  //   );
  // }

  render() {
    return(
      <thead>
      <tr>
        <h3>{this.props.userFirstname + ' ' + this.props.userLastname}</h3>
      </tr>
      <tr>
        <th>Service</th>
        <th>Duration</th>
      </tr>
      <tr>
        <td>{this.props.service}</td>
        <td>{this.props.duration}</td>
      </tr>
      </thead>
    );
  }
}


export default BookingRow;