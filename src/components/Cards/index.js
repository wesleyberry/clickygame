import React from "react";
import "./style.css";
// import { url } from "inspector";

function FriendCard(props) {
    // const styles={
    //     backgroundImage: url(props.image)
    // };

  return (
    <div className="card">
      <div className="img-container">
        <img role="img" aria-label="click item" className="click-item" 
        src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
