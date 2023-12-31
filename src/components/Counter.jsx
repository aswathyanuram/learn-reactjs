import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter((old) => old + 1);
  }
  function sub() {
    setCounter((old) => old - 1);
  }

  return (
    <>
      <button onClick={add}>+</button>
      <div>{counter}</div>
      <button onClick={sub}>-</button>
    </>
  );
}

export default Counter;
