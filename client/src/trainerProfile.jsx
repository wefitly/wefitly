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
    const $ele = $(e.target)
    if ($ele.attr('type')==='checkbox'){
      this.setState({[$ele.attr('name')]:$ele.is(':checked')});
    } else if ($ele.attr('type') === 'text'){
      this.setState({[$ele.attr('name')]:$ele.val()});
    }

  }

  onSubmit(e) {
    e.preventDefault();
    console.log('transmitting data');
    $.ajax({
      url         : '/api/updateTrainer',
      type        : 'POST',
      ContentType :'application/json',
      data        : this.state 
    }).done(function(response){
      console.log('profile data recieved');
      window.location.href = '#/trainerdash'
      console.log('after dash');
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
          <input onChange={this.handleFormChange} type='text' name='firstname'  placeholder='First Name' value={this.state.firstname || ''}></input><br/>
          <input onChange={this.handleFormChange} type='text' name='lastname' placeholder='Last Name' value={this.state.lastname || ''}></input><br/>
          <input onChange={this.handleFormChange} type='text' name='bio'  placeholder='Tell us about yourself' value={this.state.bio || ''}></input><br/>
          <p>Services Offered:</p><br/>
          <input onChange={this.handleFormChange} type='checkbox' name='oneonone' /> 1 on 1 personal training <br/>
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

