import React from "react";

export default function India(props) {
  return (
      <div className="india-flag">
        <h1> {props.currency } ,  { props.name } , { props.pin }</h1>
        
        <ul>
          <li></li>
          <li>
            <p className="In-flag-circle"></p>
          </li>
          <li></li>
        </ul>
      
    </div>
  );
}
