import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import USignUp from './user-signup.jsx'
import TrainerSignup from './trainerSignup.jsx'


class App extends React.Component {

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/signup" component={USignUp}/>
        <Route path="/trainersignup" component={TrainerSignup}/>
        <Route path="/" component={Home}/>
      </Router>
    );

  }
}

render(document.getElementById('app'));
//this is a comment
