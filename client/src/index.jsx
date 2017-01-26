import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import TrainerProfile from './trainerProfile.jsx'

class App extends React.Component {

  onUserSignUp(postRequestData){
    console.log('user signed up') 
  }

  onTrainerSignUp(postRequestData){
    console.log('trainer signed up');
    window.location.href= '#/trainerprofile';

  }

  onTrainerSignin(postRequestData){
    console.log('trainer signed in')
  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/usersignup" component={()=>(
          <Signup endpoint="/api/userSignup" callback={this.onUserSignUp} />
        )}/>
      <Route path="/trainersignup" component={()=>(
        <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp.bind(this)}/>
      )}/>
    <Route path="/trainersignin" component={()=>(
      <Signin endpoint="/api/trainerSignin" callback={this.onTrainerSignin}/>
    )}/>
  <Route path="/trainerprofile" component={TrainerProfile}/>
  <Route path="/" component={Home}/>
      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
