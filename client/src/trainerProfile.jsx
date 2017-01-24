import React from 'react';
import $ from 'jquery';
import ProfilePictureEditor from "./ProfilePictureEditor.jsx"

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
        //we will use session ID to know which entry to apply the bio to. 
        //so we will use the value stored in the session to find the trainer,
        //and then apply the bio to the trainer
        'firstname':this.refs.firstname.value,
        'lastname' :this.refs.lastname.value,
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
          <input type='text' name='firstname'  placeholder='First Name'>{this.props.firstname}</input><br/>
          <input type='text' name='lastname' placeholder='Last Name'>{this.props.lastname}</input><br/>
          <input type='text' name='bio' required ref='bio' placeholder='Tell us about yourself'>{this.props.bio || ''}</input><br/>
          <p>Services Offered:</p><br/>
          <input type='radio' name='1on1' value='1 on 1 personal training'/> 1 on 1 personal training <br/>
          <input type='radio' name='dietcons' value='Diet consulting'/> Diet consulting <br/>
          <input type='radio' name='group' value='Group Training'/>Group training<br/>
          <input type='radio' name='remote' value='Remote Training'/>Remote Training<br/>
          <input type='text' name='rate' placeholder='hourly rate'></input><br/>
          <input type='submit' value='Submit' /><br/>
        </form>
      </div>
    );
  }
}

export default Signup;

