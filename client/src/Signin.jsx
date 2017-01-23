import React from 'react';
import $ from 'jquery';


class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    console.log('handle submit triggered')
    e.preventDefault();
    $.ajax({
      url         : this.props.endpoint,
      type        : 'POST',
      ContentType : 'application/json',
      data        : {
        'email'    : this.refs.email.value,
        'password' : this.refs.password.value
      }
    })
     .done( (response) => {console.log('Signed In')})
     .fail( () => {console.log('Houston, we have a problem')})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>Sign In</h1>
          <div>
            <input type="text" name="email" required ref="email" placeholder="E-mail" />
          </div>
          <div>
            <input type="text" name="password" required ref="password" placeholder="password" />
          </div>
          <div>
            <input type="submit" value="Workout" />
          </div>
        </form>
      </div>
      )
  }
}

export default Signin;