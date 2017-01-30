import React from 'react';

class BookingRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.userEmail}</td>
        <td>{this.props.duration}</td>
        <td>{this.props.service}</td>
      </tr>
    );
  }
}


export default BookingRow;