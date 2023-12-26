import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("");

  const topContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "200px",
    marginBottom: "1rem",
  };

  const redStyle = {
    width: "30px",
    height: "30px",
    background: "red",
    cursor: "pointer",
  };

  const greenStyle = {
    width: "30px",
    height: "30px",
    background: "green",
    cursor: "pointer",
  };

  const blueStyle = {
    width: "30px",
    height: "30px",
    background: "blue",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={topContainer}>
        <div
          onClick={() => {
            setColor("red");
          }}
          style={redStyle}
        ></div>
        <div
          onClick={() => {
            setColor("green");
          }}
          style={greenStyle}
        ></div>
        <div
          onClick={() => {
            setColor("blue");
          }}
          style={blueStyle}
        ></div>
      </div>
      <div style={{ width: "200px", height: "50px", background: color }}></div>
    </div>
  );
}
