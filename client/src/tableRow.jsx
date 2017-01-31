import React from 'react';
import $ from 'jquery';
import css from './home.css'

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
    <div>
      <li className="testimonial-row">
        <div className="row-container w-clearfix">
          <div className="row-column w-clearfix"><img className="test-image" src="http://1.bp.blogspot.com/_Zde-OxOYou4/TFb7R25xTbI/AAAAAAAAADc/uXByt3U718c/s1600/arnold_schwarzenegger.jpg" />
          </div>
          <div className="extended-row-column w-clearfix">
            <div className="services-container">
              <p className="dashboard-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className="services-container">
              <ul className="services-list w-list-unstyled">
                <li className="services-list-item">Name: {this.props.firstName} {this.props.lastName}</li>
                <li className="services-list-item">Location:{this.props.location}</li>
                <li className="services-list-item">Services</li>
                <li className="services-list-item">{this.props.services}</li>
              </ul>
                <form onSubmit={this.handleBooking.bind(this)}>
                  <input type='text' required ref='service' placeholder='Which service?'/>
                  <input type='text' required ref='duration' placeholder='For how long?'/>
                  <input type='submit' value='Book it!'/>
                </form>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
}

export default TableRow;