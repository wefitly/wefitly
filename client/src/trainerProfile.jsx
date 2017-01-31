import React from 'react';
import $ from 'jquery';
import ProfilePictureEditor from "./ProfilePictureEditor.jsx"

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      hasFailed:false
    }
    this.handleFormChange = this.handleFormChange.bind(this);

    //get existing profile, if there is one;
    this.getExisting();
  }

  handleFormChange(e){
    const $ele = $(e.target);
    if ($ele.attr('type')==='checkbox'){
      this.setState({[$ele.attr('name')]:$ele.is(':checked')});
    } else if ($ele.attr('type') === 'text'){
      this.setState({[$ele.attr('name')]:$ele.val()});
    }

  }

  getExisting(){
    $.get('/api/getProfile')
      .done((data)=>{
        console.log(data);
        this.setState(data);
      })
      .fail(()=>{
        this.setState({hasFailed:true});
      })
  }

  onSubmit(e) {
    e.preventDefault();
    $.ajax({
      url         : '/api/updateTrainer',
      type        : 'POST',
      ContentType :'application/json',
      data        : this.state
    }).done(function(response){
      window.location.href = '#/trainerdash'
    }).fail(function(response){
    })
  }

  render() {
    return(
    <div className="profiel-body">
      <div className="heading-div">
        <h1 className="profile-editor-heading">Edit Your Profile</h1>
      </div>
      <div className="w-container">
        <div className="profile-editor-wrapper w-form">
          <form className="signinform" onSubmit={this.onSubmit.bind(this)} >
            <label>First Name</label>
            <input onChange={this.handleFormChange} className="green-focus w-input"  type='text' name='firstname'  placeholder='First Name' value={this.state.firstname || ''}/>
            <label>Last Name</label>
            <input className="green-focus w-input" onChange={this.handleFormChange} type='text' name='lastname' placeholder='Last Name' value={this.state.lastname || ''}/><label>Profile Picture</label>
            <input onChange={this.handleFormChange} className="green-focus w-input" placeholder="Image url" name='pic' />
            <label>Bio</label>
            <input className="bio-input green-focus w-input" onChange={this.handleFormChange} type='text' name='bio'  placeholder='Tell us about yourself' value={this.state.bio || ''}></input>
            <label>Services</label>
            <div className="w-checkbox">
              <input className="w-checkbox-input" onChange={this.handleFormChange} type='checkbox' checked={this.state.oneonone} name='oneonone' />
              <label className="w-form-label">1-on-1 Personal Training</label>
            </div>
            <div className="w-checkbox">
            <input className="w-checkbox-input" onChange={this.handleFormChange} type='checkbox' checked={this.state.dietcons} name='dietcons' value='Diet consulting'/>
              <label className="w-form-label">Diet Consulting</label>
            </div>
            <div className="w-checkbox">
              <input className="w-checkbox-input" onChange={this.handleFormChange} type='checkbox' checked={this.state.group} name='group' value='Group Training'/>
              <label className="w-form-label">Group Training</label>
            </div>
            <div className="w-checkbox">
              <input className="w-checkbox-input" onChange={this.handleFormChange}  type='checkbox' checked={this.state.remote} name='remote' value='Remote Training'/>
              <label className="w-form-label">Remote Training</label>
            </div>
            <input className="signupbutton w-button" type="submit"/>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default Signup;

