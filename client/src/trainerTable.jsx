import React from 'react';
import FilterBar from './filterBar.jsx';
import $ from 'jquery';
import TableRow from './tableRow.jsx';

class TrainerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    console.log('mounted')
    this.handleFilterChange('San Francisco');
  }

  getTargetValue(e) {
    return $(e.target).val();
  }


  handleFilterChange(e, l) {
    const props = this.props;
    const $ele = (l === undefined) ? this.getTargetValue(e) : l;
    $.ajax({
      url: '/api/filterTrainers',
      method: 'GET',
      ContentType :'application/json',
      data: {
        location: $ele,
      },
    })
    .done((response) => {
      let temp = [];
      response.forEach( (item) => {
        temp.push(item);
      })
      this.setState({entries: temp})
    })
    .fail(() => {
      console.log('signup data transmission failure');
    });
  }
  render() {
    let elements = [];
    this.state.entries.forEach(( en , index )=> {
      console.log(en)
      elements.push(<TableRow key= {index} firstName={en.username} lastName={en.lastname} location={en.location}/>)
    });
    return (
      <div>
        <FilterBar handleChange={this.handleFilterChange.bind(this)}/>
        {elements}
      </div>
      );

  };
}

export default TrainerTable;