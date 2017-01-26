import React from 'react';


//each <td></td> tag represents a column in each <tr></tr> row
const TableRow = (props)=>{
  return(
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{':this is an example trainer row'}</td>
    </tr>
  );
}

export default TableRow;