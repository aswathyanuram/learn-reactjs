import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Circle from "./components/Circle";
import Traffic from "./components/Traffic";

function App() {
  const [colors, setColors] = useState(["red", "blue", "orange", "yellow"]);

  useEffect(() => {
    console.log("STATE NOW", colors);
    setTimeout(() => {
      setColors((old) => [old[0], old[1], "pink", old[3]]);
    }, 5000);
  }, []);

  return (
    <>
      <Circle color={colors[0]} />
      <Circle color={colors[1]} />
      <Circle color={colors[2]} />
      <Circle color={colors[3]} />
    </>
  );
}

export default App;
