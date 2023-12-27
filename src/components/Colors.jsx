import React, { useState } from "react";

export default function Colors() {
  const [colors, setColors] = useState([
    {
      color: "red",
    },
    {
      color: "pink",
    },
    {
      color: "blue",
    },
    {
      color: "magenta",
    },
    {
      color: "orange",
    },
    {
      color: "cyan",
    },
  ]);

  const allDivs = colors.map((color, index) => {
    let colorDiv = (
      <div
        key={index}
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: color.color,
        }}
      ></div>
    );
    return colorDiv;
  });

  return (
    <div>
      {allDivs.map((singleDiv) => {
        return singleDiv;
      })}
    </div>
  );
}
