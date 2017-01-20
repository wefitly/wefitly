import React from 'react';

class Login extends React.Component {
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
      console.log('signup data recieved');
    }).fail(function(response){
      console.log('signup data transmission failure');
    })
  }


}

export default Login;