
import React from 'react';

const TableRow = (props)=>{
  return(
    <div className="row">
      <img src={props.trainerImg} width="300px" height="250px"/>
      <p>{props.firstname} {props.lastname} / Location:{props.location}</p>
      <p>{props.bio}</p>
      <p>Services: {props.services}</p>
    </div>
  );
}

export default TableRow;