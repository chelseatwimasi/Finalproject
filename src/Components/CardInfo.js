import React from "react";
import "../App.css";
import WikiButton from "./WikiButton.js";

function CardInfo(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.island.name}</div>
      <p className="card-text description">{props.island.description}</p>
      <p className="card-text lat-lon"></p>
      <WikiButton link={props.island.wiki} />
    </div>
  );
}

export default CardInfo;
