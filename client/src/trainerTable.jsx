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
    this.getAll();
  }

  getTargetValue(e) {
    return $(e.target).val();
  }

  getAll() {
    $.ajax({
      url: '/api/getAllTrainers',
      method: 'GET',
      ContentType :'application/json',
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


  handleFilterChange(e, l) {
    const props = this.props;
    const $ele = (l === undefined) ? this.getTargetValue(e) : l;
    
    if($ele === 'All'){
      this.getAll();
    }else{
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
  }
  render() {

    let elements = [];
    let length;

    this.state.entries.forEach(( en , index )=> {
      let services = '';
      if(en.services){
        length = Object.entries(en.services).length-1;
        Object.entries(en.services).forEach((service, index)=>{
          if(service[1] === true){
            
            if(service[0] === '1on1') {
              service[0] = '1 on 1 personal training'; 
            }else if(service[0] === 'dietcons') {
              service[0] = 'Diet consulting';
            }else if(service[0] === 'group') {
              service[0] ='Group training';
            }else if(service[0] === 'remote') {
              service[0] ='Remote Training';
            }

            if(index === length){
              services+=service[0];
            }else{
              services+=service[0]+' / ';
            }

          }
        });
      }
      
      elements.push(<TableRow 
        key= {index} 
        firstName={en.firstname} 
        lastName={en.lastname} 
        location={en.location}
        bio={en.bio}
        services={services}/>)
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