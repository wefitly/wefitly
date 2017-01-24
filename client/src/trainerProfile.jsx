import React from 'react';
import $ from 'jquery';
import ProfilePictureEditor from "./ProfilePictureEditor.jsx"

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleFormChange = this.handleFormChange.bind(this);

  }

  handleFormChange(e){
    this.setState({[$(e.target).attr('name')]:$(e.target).val()});
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = $(e.target).serializeArray().

    $.ajax({
      url         : '/api/trainerprofile',
      type        : 'POST',
      ContentType :'application/json',
      data        : this.state 
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
          <ProfilePictureEditor/>
          <input onChange={this.handleFormChange} type='text' name='firstname'  placeholder='First Name' value={this.props.fistname || ''}></input><br/>
          <input onChange={this.handleFormChange} type='text' name='lastname' placeholder='Last Name' value={this.props.lastname || ''}></input><br/>
          <input onChange={this.handleFormChange} type='text' name='bio'  placeholder='Tell us about yourself'value={this.props.bio || ''}></input><br/>
          <p>Services Offered:</p><br/>
          <input onChange={this.handleFormChange} type='checkbox' name='1on1' /> 1 on 1 personal training <br/>
          <input onChange={this.handleFormChange} type='checkbox' name='dietcons' value='Diet consulting'/> Diet consulting <br/>
          <input onChange={this.handleFormChange} type='checkbox' name='group' value='Group Training'/>Group training<br/>
          <input onChange={this.handleFormChange} type='checkbox' name='remote' value='Remote Training'/>Remote Training<br/>
          <input onChange={this.handleFormChange} type='text' name='rate' placeholder='hourly rate'></input><br/>
          <input type='submit' value='Submit' /><br/>
        </form>
      </div>
    );
  }
}

export default Signup;

