import React, { useState } from "react";
import Plot from "react-plotly.js";

function Graph() {
  const sample = [
    {
      category: "M",
      values: [92, 85, 95, 83, 88],
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
      values: [40, 34, 43, 32, 37],
      types: [
        "MALIGNANT NEOPLASMS (CANCER)",
        "INFLUENZA (FLU) AND PNEUMONIA",
        "HEART DISEASE",
        "DIABETES",
        "CEREBROVASCULAR DISEASE"
      ]
    },
    { category: "B2", values: [84, 23, 54, 51], types: ["k", "l", "m", "n"] },
    {
      category: "F",
      values: [92, 85, 95, 83, 88],
      types: [
        "MALIGNANT NEOPLASMS (CANCER)",
        "INFLUENZA (FLU) AND PNEUMONIA",
        "HEART DISEASE",
        "DIABETES",
        "CEREBROVASCULAR DISEASE"
      ]
    }
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
          African American Deaths Per Disease
        </button>
        <button onClick={handleClick} id="B2">
          Male African American Deaths Per Disease
        </button>
        <button onClick={handleClick} id="F">
          Female African American Deaths Per Disease
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
