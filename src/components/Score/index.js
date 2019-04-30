import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div className="custom-nav">
            <h3>Score: <span>{props.userScore}</span> || 
            High Score: <span>{props.highScore}</span></h3>
        </div>
    );
}

export default Score;