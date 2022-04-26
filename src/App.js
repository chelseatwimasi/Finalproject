import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card.js";
import data from "./diseases.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>The New York Times</h1>
          <h2>Top Five Death Causng Diseases</h2>
        </div>

        <div className="container">
          <ul className="cards">
            {data.diseases.map((disease) => {
              return <Card disease={disease} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
//function App() {
// console.log(data.islands[0].name);

// render() {

//     <div className="App">
//      <h1>The New York Times</h1>
//      <h2>Top Five Death Causng Diseases</h2>
//   <div className="container">
//     <h2 className="section-title">Islands</h2>
//    <ul className="cards">
//      {data.islands.map((island) => {
//       return <Card island={island} />;
//     })}
//   </ul>
//  </div>
//     </div>
//   );
// }
//}

export default App;
