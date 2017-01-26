import React from 'react';
import FilterBar from './filterBar.jsx';
import $ from 'jquery';
// import TrainerRow from './tableRow'
class TrainerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    this.handleFilterChange('San Francisco');
  }

  getTargetValue(e) {
    return $(e.target).val();
  }


  handleFilterChange(e, l){
    const props = this.props;
    const $ele = (l === undefined) ? this.getTargetValue(e) : l;
    $.ajax({
      url: this.props.endpoint,
      method: 'GET',
      ContentType :'application/json',
      data: {
        location: $ele,
      },
    })
    .done((response) => {
      props.callback(response);
    })
    .fail(() => {
      console.log('signup data transmission failure');
    });
  }
  render(){
    return <FilterBar handleChange={this.handleFilterChange.bind(this)}/>
  };
}

export default TrainerTable;