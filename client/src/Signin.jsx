import React from 'react';
import $ from 'jquery';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    }
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
     .done( (response) => {
      if (response == "success"){

        this.props.callback();

      } else {
        this.setState({error: 'username or password can\'t be found'})
        console.log(this.state.error)
      }
    })
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
            <input type="password" name="password" required ref="password" placeholder="password" />
          </div>
          <div>
            <input type="submit" value="Workout" />
            <p>{this.state.error}</p>
          </div>
        </form>
      </div>
      )
  }
}

export default Signin;