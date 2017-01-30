import React from 'react';
import BookingTable from './booking.jsx'
import TrainerProfileEditor from './trainerProfile.jsx'
class TrainerDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <table>
        <tbody>
          <tr>
            <td>
              <button><a href="#/trainerprofile">Update your profile</a></button>
            </td>
          </tr>
          <tr>
            <th>
              <h1>Your Current Bookings</h1>
            </th>
          </tr>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
            </tr>
          </thead>
          <BookingTable booking={this.props.bookings}/>
        </tbody>
      </table>
      </div>
    );
  }
}

export default TrainerDash;
