import React from "react";
import "./style.css";

function GotCards (props){
    return (
        //displaying the GOT characters to screen by feeding this function the props. made JSON file w/characters
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
        </div>
      );
    }

    export default GotCards;