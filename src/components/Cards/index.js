import React from "react";
import "./style.css";
// import { url } from "inspector";

function Card(props) {
  console.log(props.image);
    // const styles = {
    //     backgroundImage: `url(${props.image})`
    // };

  return (
    <div className="card">
      {/* <div className="img-container"> */}
        {/* <div role="img" aria-label="click item" className="click-item" 
        src={props.image}> */}
        {/* src={styles.backgroundImage}> */}
        <img src={props.image} aria-label="click-item" className="click-item"/>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Card;
