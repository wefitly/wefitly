import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import Signup from './Signup.jsx'

class App extends React.Component {

  onUserSignUp(postRequestData){
    console.log('user signed up')

  }

  onTrainerSignUp(postRequestData){
    console.log('trainer signed up');

  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/signup" component={()=>(
          <Signup endpoint="/api/usersignup" callback={this.onUserSignUp} />)}/>
        <Route path="/trainersignup" component={()=>(
          <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp}/>)}/>
        <Route path="/" component={Home}/>
        <Route path='/login' component={() => (
          <Login endpoint="/api/login"/>)}/>
      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
