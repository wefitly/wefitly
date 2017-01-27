import React from 'react';

const TableRow = (props)=>{
  return(
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{'This is an example trainer row'}</td>
    </tr>
  );
}

export default TableRow;