import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from './home.jsx'

class App extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
      </Router>
    );
  }

}

render(<App/>, document.getElementById('app'));
//this is a comment
