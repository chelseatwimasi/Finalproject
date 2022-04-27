import React from "react";
import "../App.css";

function CardImage(props) {
  const background = props.disease.image;
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <img src={props.disease.image} alt="disease" />
    </div>
  );
}

export default CardImage;
