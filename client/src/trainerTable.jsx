import React from 'react';
import FilterBar from './filterBar.jsx'
import $ from 'jquery'
// import TrainerRow from './tableRow'
class TrainerTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      entries: [],
    }
  }

  getAllTrainers() {

  }

  handleFilterChange(e){
    const $ele = $(e.target).val();
    console.log(typeof $ele)
    $.ajax({
      url: this.props.endpoint,
      method: 'GET',
      ContentType :'application/json',
      data: {
        location: $ele,
      },
    })
    .done( (response) => {
      console.log('handleFilterChange-----');
    })
    .fail(function(response){
      console.log('signup data transmission failure');
    });
  }
  render(){
    return <FilterBar handleChange={this.handleFilterChange.bind(this)}/>
  };
}

export default TrainerTable;