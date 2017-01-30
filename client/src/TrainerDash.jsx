import React from 'react';
import BookingTable from './booking.jsx'
import _ from 'lodash';

class TrainerDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <button><a href="#/trainerprofile">Update your profile</a></button>
            </td>
          </tr>
          <tr>
            <th>
              <h1>Your Pending Bookings</h1>
            </th>
          </tr>
          <BookingTable booking={this.props.bookings} rejectBooking={this.props.rejectBooking}/>
        </tbody>
      </table>
    );
  }
}

export default TrainerDash;
