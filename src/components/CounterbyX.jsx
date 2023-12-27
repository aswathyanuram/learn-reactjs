import { useState } from "react";

function CounterByX(props) {
  const { x } = props;
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter((old) => old + x);
  };

  return (
    <>
      <br />
      <button onClick={add}>+</button>
      <div>{counter}</div>
      <button
        onClick={() => {
          if (counter != 0) {
            setCounter((old) => old - x);
          }
        }}
      >
        -
      </button>
    </>
  );
}

export default CounterByX;
