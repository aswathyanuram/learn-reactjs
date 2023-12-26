import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((old) => old + 1);
  };

  const minus = () => {
    setCounter((old) => {
      return old - 1;
    });
  };

  return (
    <>
      <button onClick={add}>+</button>
      <div>{counter}</div>
      <button onClick={minus}>-</button>
    </>
  );
}

export default Counter;
