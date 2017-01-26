import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import TrainerProfile from './trainerProfile.jsx'
import UserDash from './UserDash.jsx'


import FilterBar from './filterBar.jsx'
import TrainerTable from './trainerTable.jsx'


class App extends React.Component {

  onUserSignUp(postRequestData){
    window.location.href = '#/userDash';
    console.log('user signed up')
  }

  onTrainerSignUp(postRequestData){
    console.log('trainer signed up');
    window.location.href= '#/trainerprofile';

  }

  onTrainerSignin(postRequestData){
    console.log('trainer signed in')
  }


  onFilterTrainers(){
    console.log('trainers filtered')
  }

  onCityFilterChange(response) {
    console.log(response);
  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/usersignup" component={()=>(
          <Signup endpoint="/api/userSignup" callback={this.onUserSignUp} />
        )}/>

        <Route path="/userSignin" component={() => (
          <Signin endpoint="/api/userSignin" callback={this.onUserSignin} />
        )}/>
        <Route path='/userDash' component={() => (
          <TrainerTable endpoint="/api/userDash" callback={this.onCityFilterChange}/>
          )}/>
        <Route path="/trainersignup" component={()=>(
          <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp}/>
        )}/>
        <Route path="/trainersignin" component={()=>(
          <Signin endpoint="/api/trainerSignin" callback={this.onTrainerSignIn}/>
        )}/>
        <Route path="/trainers" component={()=>(
          <TrainerTable endpoint="/api/filterTrainers" callback={this.onFilterTrainers}/>
        )}/>
        <Route path="/trainerprofile" component={TrainerProfile}/>
        <Route path="/" component={Home}/>

      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
