import { useState } from "react";

function CounterByFive() {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter((old) => old + 5);
  }
  function sub() {
    setCounter((old) => old - 5);
  }

  return (
    <>
      <button onClick={add}>+</button>
      <div>{counter}</div>
      <button onClick={sub}>-</button>
    </>
  );
}

export default CounterByFive;
