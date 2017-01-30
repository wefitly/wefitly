
import React from 'react';
require('./css/tableRow.css');

const TableRow = (props)=>{
  return(
    <div className="row">
      <img src="http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDQyNzQ2Mzgw.jpg" width="300px" height="250px"/>
      <div className="profile">
        <p>Name:</p>
        <p>Email: {props.firstName} {props.lastName} / Location:{props.location}</p>
        <p>{props.bio}</p>
        <p>Services: {props.services}
        </p>
        <form>
        <button>Book</button>
        </form>
      </div>

    </div>
  );
}

export default TableRow;