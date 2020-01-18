import React from "react";
import "./style.css";

function GotCards(friend) {
  return (
    //displaying the GOT characters to screen by feeding this function the props. made JSON file w/characters
        <div className="col-sm-3">
          <div className="card" onClick={() => friend.onClick(friend.id)}>
            <div className="img-container">
              <img alt={friend.name} src={friend.image} id={friend.id}/>
            </div>
          </div>
        </div>
        
  );
}

export default GotCards;