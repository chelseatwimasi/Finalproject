import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card.js";
import disease from "./diseases.js";
import Graph from "./Components/Graph.js";
import NavBar from "./Components/NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <NavBar />

          <h1>The New York Times</h1>
          <h2>Top Five Death Causng Diseases</h2>
        </div>

        <div className="container">
          <ul className="cards">
            {disease.diseases.map((disease) => {
              return <Card disease={disease} />;
            })}
            <Graph />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
