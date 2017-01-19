import React from 'react';
import {render} from 'react-dom';
var trainerData = require('./trainers');

class App extends React.Component {

  render() {
    return(
      <tr>
        <td className="trainer-name">{this.props.firstname + ' ' + this.props.lastname}</td>
      </tr>
    )
  }
}

render(<App trainer={trainerData}/>, document.getElementById('app'));
//this is a comment