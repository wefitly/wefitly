import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'

class App extends React.Component {

  onUserSignUp(postRequestData){
    console.log('user signed up')

  }

  onTrainerSignUp(postRequestData){
    console.log('trainer signed up');

  }

  onTrainerSignin(postRequestData){
    console.log('trainer signed in')
  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/signup" component={()=>(
          <Signup endpoint="/api/usersignup" callback={this.onUserSignUp} />
        )}/>
        <Route path="/trainersignup" component={()=>(
          <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp}/>
        )}/>
        <Route path="/trainersignin" component={()=>(
          <Signin endpoint="/api/trainerSignin" callback={this.onTrainerSignin}/>
        )}/>
        <Route path="/" component={Home}/>
      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
