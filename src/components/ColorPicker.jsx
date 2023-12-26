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

  const setRedColor = () => {
    setColor("red");
  };

  const setGreenColor = () => setColor("green");

  return (
    <div>
      <div style={topContainer}>
        <div
          onClick={setRedColor}
          style={{
            width: "30px",
            height: "30px",
            background: "red",
            cursor: "pointer",
          }}
        ></div>
        <div
          onClick={setGreenColor}
          style={{
            width: "30px",
            height: "30px",
            background: "green",
            cursor: "pointer",
          }}
        ></div>
        <div
          onClick={() => {
            setColor("blue");
          }}
          style={{
            width: "30px",
            height: "30px",
            background: "blue",
            cursor: "pointer",
          }}
        ></div>
      </div>
      <div style={{ width: "200px", height: "50px", background: color }}></div>
    </div>
  );
}
