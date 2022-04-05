import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/CardList";
//import Search from "./Components/search";

let data = [
  "https://images.medicinenet.com/images/slideshow/heart-disease-visual-guide-s2-heart-attack.jpg"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <section>
          <div className="wrapper css">
            Writing Message on top of background-image
          </div>
        </section>

        <h1>The New York Times</h1>
        <h2>Top Five Death Causng Diseases</h2>
        <CardList images={data} />
      </div>
    );
  }
}

export default App;
