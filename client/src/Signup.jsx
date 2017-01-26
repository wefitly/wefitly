import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    console.log('hello from on submit signup')
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
      <div id='signup'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <span>Sign-up</span>
          <p>
            <input type='text' name='firstname' required ref='firstname' placeholder='First Name'/>
          </p>

          <p>
            <input type='text' name='lastname' required ref='lastname' placeholder='Last Name'/>
          </p>

          <p>
            <input type='text' name='city' required ref='city' placeholder='city'/>
          </p>

          <p>
            <input type='email' name='email' required ref='email' placeholder='e-mail'/>
          </p>

          <p>
            <input type='password' name='password' required ref='ps' placeholder='Password'/>
          </p>
          <input type='submit' value='Workout'/>
        </form>
      </div>
    );
  }
}

Signup.contextTypes = {
      router: React.PropTypes.object.isRequired
}

export default Signup;

