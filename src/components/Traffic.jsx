import React, { useState, useEffect } from "react";

export default function Traffic({ title }) {
  console.log("COMPONENT RENDERING");
  const RED = "RED";
  const YELLOW = "YELLOW";
  const GREEN = "GREEN";

  const [signal, setSignal] = useState(RED);

  useEffect(() => {
    console.log("RUNNING USEEFFECT");
    setTimeout(() => {
      setSignal(GREEN);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        background: "black",
        padding: ".5rem",
        borderRadius: "1rem 1rem 0 0",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          background: signal == RED ? RED : "#FEFEFE",
          borderRadius: "4rem",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: signal == YELLOW ? YELLOW : "#FEFEFE",
          borderRadius: "4rem",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: signal == GREEN ? GREEN : "#FEFEFE",
          borderRadius: "4rem",
          marginBottom: "0.5rem",
        }}
      ></div>
    </div>
  );
}
