import React from 'react';
import {render} from 'react-dom';
var trainerData = require('./trainers');

class App extends React.Component {
  render () {
    return (
      <TrainerTable trainers={trainerData}/>
    )
  }
}

var TrainerTable = ({trainers}) => (
  <table>
    <tbody>
    {trainers.map((trainer, i) =>
        <TrainerRow firstname={trainer.firstname} lastname={trainer.lastname} key={i}/>
    )}
    </tbody>
  </table>
);

class TrainerRow extends React.Component {
  constructor(props) {
    super(props);
  }

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
window.App = App;