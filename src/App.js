import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card.js";
import disease from "./diseases.js";
import Graph from "./Components/Graph.js";
import NavBar from "./Components/NavBar.js";
import ImportantPage from "./Components/ImportantPage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    data: [
      { name: "MR TAKA RAMEN", grade: "33" },
      { name: "SWAY LOUNGE", grade: "0" },
      { name: "CIRCLE LINE QUEENS", grade: "5" },
      { name: "SUBWAY", grade: "13" },
      { name: "EL MANANTIAL BAKERY", grade: "10" }
    ];
  }

  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <ImportantPage />
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
