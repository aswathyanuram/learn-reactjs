import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterByX from "./components/CounterbyX";

function App() {
  return (
    <>
      <CounterByX x={1} />
      <CounterByX x={5} />
      <CounterByX x={100} />
    </>
  );
}

export default App;
