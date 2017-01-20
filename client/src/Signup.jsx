import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //true or false
      login: this.props.login
    }
  }

  onSubmit(e) {
    e.preventDefault();

    $.ajax({
      url         : this.props.endpoint,
      type        : 'POST',
      ContentType :'application/json',
      data        : {
        'firstname':this.refs.firstname.value,
        'lastname' :this.refs.lastname.value,
        'email'    :this.refs.email.value,
        'password' : this.refs.password.value
      }
    }).done(function(response){
      console.log('signup data recieved');
    }).fail(function(response){
      console.log('signup data transmission failure');
    })
  }

  render() {
    if (this.state.login === false){
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
              <input type='email' name='email' required ref='email' placeholder='e-mail'/>
            </p>
            <input type='submit' value='Workout'/>
          </form>
        </div>
      );
  }
  }
}

export default Signup;

