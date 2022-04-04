import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div className="cards-list">
      <Card image={props.images[0]} />
    </div>
  );
}

export default CardList;
