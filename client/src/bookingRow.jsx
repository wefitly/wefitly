import React from 'react';

class BookingRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.activity}</td>
        <td>{this.props.duration}</td>
      </tr>
    );
  }
}


export default BookingRow;