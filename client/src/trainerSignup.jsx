import React from 'react';

class TrainerSignup extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   firstname: '',
    //   lastname: '',
    //   email: ''
    // }
  }

  onSubmit(e) {
    console.log('submitted!');
    e.preventDefault();

    let userObj = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value
    };

    console.log(userObj);
    // $.post('/')
    //submit via ajax
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
          <input type='email' name='email' required ref='email' placeholder='e-mail'/>
          </p>
          <input type='submit' value='Workout'/>
        </form>
      </div>
    );
  }
}

export default TrainerSignup;

