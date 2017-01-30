import React from 'react';
import $ from 'jquery';
import css from './home.css';


class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    const props = this.props;
    e.preventDefault();

    $.ajax({
      url         : this.props.endpoint,
      type        : 'POST',
      ContentType :'application/json',
      data        : {
        'firstname':this.refs.firstname.value,
        'lastname' :this.refs.lastname.value,
        'location' : this.refs.city.value,
        'email'    :this.refs.email.value,
        'password': this.refs.ps.value,
      }
    }).done(function(response){
      console.log('signup data recieved');
      props.callback();
    }).fail(function(response){
      console.log('signup data transmission failure');
    })
  }

  render() {
    return(
      <div id='signup'className="bodybody">
        <div  className="w-container">
          <div className="w-form">
            <form className="signinform" data-name="Email Form" id="email-form" name="email-form" onSubmit={this.onSubmit.bind(this)}>
              <label for="field-3">First Name</label>
              <input className="green-focus w-input" id="field-3"  name="field-3" placeholder="Enter your first name" required ref='firstname' type="text" />
              <label for="field">Last Name</label>
              <input className=" green-focus w-input" id="field" name="field" placeholder="Enter your last name" required ref='lastname' type="text" />
              <label for="field-2">Location</label>
              <select className="w-select" id="field-2" name="field-2" required ref="city">
                <option value="">Select one...</option>
                <option value="First">San Francisco</option>
                <option value="Second">San Mateo</option>
                <option value="Third">Pleasanton</option>
              </select>
              <label for="name">Email:</label>
              <input className="green-focus w-input" data-name="Name" id="name" name="name" placeholder="Enter your email" type="email" required ref="email" />
              <label for="email">Password:</label>
              <input className="green-focus w-input" data-name="Email" id="email" name="email" placeholder="Enter your password" required ref='ps' type="password" />
              <input className="green-focus signupbutton w-button" data-wait="Please wait..." type="submit" value="Workout" />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form</div>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

Signup.contextTypes = {
      router: React.PropTypes.object.isRequired
}

export default Signup;

