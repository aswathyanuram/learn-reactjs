import React, { useState } from "react";

export default function Numbers() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div>
      {numbers.map((number, index) => {
        return <div key={index}>{number} </div>;
      })}
    </div>
  );
}
