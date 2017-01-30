import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx';
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import TrainerProfile from './trainerProfile.jsx';
import UserDash from './UserDash.jsx';
import TrainerDash from './TrainerDash.jsx'

// const sampleBookings = [
//   {
//     activity: 'Weight Training',
//     duration: '2 hours'
//   },
//   {
//     activity: 'Endurance Running',
//     duration: '40 min'
//   },
//   {
//     activity: 'Nutritional Consulting',
//     duration: '1 hour'
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: []
    }
  }

  onUserSignUp(postRequestData) {
    window.location.href = '#/dash';
  }

  onTrainerSignUp(postRequestData) {
    window.location.href = '#/trainerprofile';
  }

  onTrainerSignin(postRequestData) {
    window.location.href = '#/trainerdash';
  }

  //Uncomment following code to implement get request for trainer bookings.
  componentDidMount() {
    const currentBookings = this.state.bookings;
    console.log('mounted')
    $.get('/api/bookings').done((data) => {
      console.log("booking data", data);
      data.forEach(function(booking) {

        currentBookings.push(booking);
      });

      this.setState({
        bookings: currentBookings
      })
    })
  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/usersignup" component={()=>(
          <Signup endpoint="/api/userSignup" callback={this.onUserSignUp.bind(this)} />
        )} />
        <Route path="/trainersignup" component={()=>(
          <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp.bind(this)} />
        )} />
        <Route path="/trainersignin" component={()=>(
          <Signin endpoint="/api/trainerSignin" callback={this.onTrainerSignin} />
        )} />
        <Route path="/usersignin" component={()=>(
         <Signin endpoint="/api/userSignin" callback={this.onUserSignUp} />
        )} />
        <Route path="/trainerprofile" component={TrainerProfile} />
        <Route path="/trainerdash" component={() => (
          <TrainerDash bookings={this.state.bookings} />
        )} />
        <Route path='/dash' component={UserDash} />
        <Route path="/" component={Home} />
      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
