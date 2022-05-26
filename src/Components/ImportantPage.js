import React, { Component } from "react";
import App from "../App";
import "./Title.css";
import data from "./data";
import image from "./FoodForSoul.jpeg";
import smoothscroll from "smoothscroll-polyfill";
import "./Nav.css";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import Product from "./Graph";

//let brooklyn = [];
//data.map((item) => {
//if (item.boro === "Brooklyn") {
//brooklyn.push(item);
//}
//});
const test = data.filter((item) => item.boro === "Brooklyn");

export default class Hunter extends Component {
  render() {
    return (
      <>
        
       
       
        <div id="RestaurantReviews1" style={{ height: 80 }}>
          <h1>Restaurant Reviews</h1>
        </div>
        <div id="RestaurantReviews" style={{ height: 500 }}>
          <h3>Maisons pickle 4.5 out of 5</h3>
          <h3>TGI Friday 3.0 out of 5</h3>
          <h3>Hard Rock Cafe 1 out of 5</h3>
          <h3> The Kunjip Korean BBQ 5 out of 5</h3>
        </div>
      </>
    );
  }
}
