import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    
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
        'email'    :this.refs.email.value
      }
    }).done(function(response){
      console.log('profile data recieved');
    }).fail(function(response){
      console.log('profile transmission failure');
    })
  }

  render() {
    return(
      <div id='signup'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <span>Profile</span>
          <input type='text' name='firstname' required ref='firstname' placeholder='First Name'>{this.props.firstname}</input><br/>
          <input type='text' name='lastname' required ref='lastname' placeholder='Last Name'>{this.props.lastname}</input><br/>
          
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default Signup;

