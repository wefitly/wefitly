import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture : this.props.profilePicture
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
          <img src={this.state.profilePicture}/><br/>
          <input type='file' name='img'/><br/>
          <input type='text' name='firstname' required ref='firstname' placeholder='First Name'>{this.props.firstname}</input><br/>
          <input type='text' name='lastname' required ref='lastname' placeholder='Last Name'>{this.props.lastname}</input><br/>
          <input type='text' name='bio' required ref='bio' placeholder='Tell us about yourself'>{this.props.bio || ''}</input><br/>
          <p>Services Offered:</p>
          <div>
            <input type='radio' name='services1' value='1 on 1 personal training'> 1 on 1 personal training </br>
            <input type='radio' name='services2' value='Diet consulting'> Diet consulting </br>
            
          
          <input type='submit' value='Submit' /><br/>
        </form>
      </div>
    );
  }
}

export default Signup;

