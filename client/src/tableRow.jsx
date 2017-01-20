import React from 'react';

const TableRow = (props)=>{
  return(
    <div>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
    </div>
  );
}

export default TableRow;