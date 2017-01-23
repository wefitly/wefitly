import React from 'react';
import $ from 'jquery';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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
     .fail( () => {console.log)('Houston, we have a problem')})
  }

  render () {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <span>Sign In</span>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="text" name="password" placeholder="password" />
        </form>
      </div>
      )
  }
}