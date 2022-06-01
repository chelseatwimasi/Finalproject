import React, { useState } from "react";
import Plot from "react-plotly.js";

function Graph() {
  const sample = [
    {
      category: "M",
      values: [87, 86, 86, 84, 81],
      types: [
        "MALIGNANT NEOPLASMS (CANCER)",
        "INFLUENZA (FLU) AND PNEUMONIA",
        "HEART DISEASE",
        "DIABETES",
        "CEREBROVASCULAR DISEASE"
      ]
    },
    {
      category: "B",
      values: [45, 121, 76, 12, 98],
      types: ["f", "g", "h", "i", "j"]
    },
    { category: "B2", values: [84, 23, 54, 51], types: ["k", "l", "m", "n"] }
  ];

  const [data, setData] = useState([]);

  function handleClick(e) {
    sample.forEach((each) => {
      if (each.category === e.target.id) {
        setData({ values: each.values, types: each.types });
      }
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} id="M">
          Highest Deaths Per Disease
        </button>
        <button onClick={handleClick} id="B">
          Bronx
        </button>
        <button onClick={handleClick} id="B2">
          Bronx2
        </button>
      </div>
      <Plot
        data={[
          {
            type: "bar",
            x: data.types,
            y: data.values
          }
        ]}
        layout={{ width: 800, height: 500, title: "Interactive Graph" }}
      />
    </div>
  );
}
export default Graph;
