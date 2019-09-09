import React from "react";

export default function French(props) {
  return (
    
      <div className="french-flag">
         <h1> {props.currency } ,  { props.name } , { props.pin }</h1>
        <div className="fleg-inner">
            <div className="left"></div>
            <div className="mid"></div>
            <div className="right"></div>
        </div>
      </div>
   
  );
}
