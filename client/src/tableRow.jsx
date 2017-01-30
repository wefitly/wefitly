
import React from 'react';
import $ from 'jquery';
require('./css/tableRow.css');

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBooking(e) {
    console.log('here');
    e.preventDefault();
    $.post('/api/bookings', {
      userEmail: 'tootsie@pop.com',
      isBooked: true,
      trainerEmail: this.props.firstName,
      service: 'weight training',
      duration: 'Duration here'
    }).done((results) => {
      console.log('success')
    })
  }

  render() {
    return(
      <div className="row">
        <img src="http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDQyNzQ2Mzgw.jpg" width="300px" height="250px"/>
        <div className="profile">
          <p>Name: {this.props.firstName} {this.props.lastName}</p>
          <p>Location:{this.props.location}</p>
          <p>{this.props.bio}</p>
          Services
          <p>{this.props.services}</p>
          <form>
            <button onClick={this.handleBooking.bind(this)}>Book</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TableRow;