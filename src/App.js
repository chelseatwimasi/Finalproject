import React, { Component } from "react";
import "./App.css";
import Search from "./Components/search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="h1">
        <h1>The New York Times</h1>
        <h2>Top Five Death Causing Diseases</h2>
      </div>
    );
  }
}

export default App;
