import React from "react";
import "../App.css";
import WikiButton from "./WikiButton.js";

function CardInfo(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.disease.name}</div>
      <p className="card-text description">{props.disease.description}</p>
      <p className="card-text lat-lon"></p>
      <WikiButton link={props.disease.wiki} />
    </div>
  );
}

export default CardInfo;
