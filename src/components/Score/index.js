import React from "react";
import "./style.css";


function Score(props){
    return (
        <div id="scoreSection">
        <div className="col-12">
            <h7>Top Score: {props.highScore}</h7>
        </div>
        <div className="col-12">
            <h7>Current Score: {props.score}</h7>
        </div>
        </div>
    )
}


export default Score;