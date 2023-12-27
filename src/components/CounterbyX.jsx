import { useState } from "react";

function CounterByX(props) {
  const { x } = props;
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter((old) => old + x);
  }
  function sub() {
    setCounter((old) => old - x);
  }

  return (
    <>
      <br />
      <button onClick={add}>+</button>
      <div>{counter}</div>
      <button onClick={sub}>-</button>
    </>
  );
}

export default CounterByX;
