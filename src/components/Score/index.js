import React from "react";


function Score(props){
    return (
        <div className="col-4 align-text-bottom">
        <div>
            <h5>High Score: {props.highScore}</h5>
        </div>
        <div>
            <h5>Current Score: {props.score}</h5>
        </div>
    </div>
    )
}

export default Score;