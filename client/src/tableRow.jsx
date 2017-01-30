
import React from 'react';
import $ from 'jquery';
require('./css/tableRow.css');

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBooking(e) {

    e.preventDefault();
    $.post('/api/bookings', {
      userEmail: 'tootsie@pop.com',
      isBooked: true,
      trainerEmail: this.props.firstName,
      service: this.refs.service.value,
      duration: this.refs.duration.value
    }).done((results) => {
      console.log('success')
    })
    this.refs.service.value = '';
    this.refs.duration.value = '';
  }

  render() {
    return(
      <div className="row">
        <img src="http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDQyNzQ2Mzgw.jpg" width="300px" height="250px"/>
        <div className="profile">
          <p>Name:</p>
          <p>Email: {this.props.firstName} {this.props.lastName} / Location:{this.props.location}</p>
          <p>{this.props.bio}</p>
          <p>Services: {this.props.services}
          </p>
          <form onSubmit={this.handleBooking.bind(this)}>
            <input type='text' required ref='service' placeholder='Which service?'/>
            <input type='text' required ref='duration' placeholder='For how long?'/>
            <input type='submit' value='Book it!'/>
          </form>
        </div>
      </div>
    );
  }
}

export default TableRow;