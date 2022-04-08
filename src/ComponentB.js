import React from "react";
import { counterContext } from "./App";
import { useContext } from "react";

function ComponentB() {
  const countContext = useContext(counterContext);
  return (
    <div>
      
      <button onClick={() => countContext.counterDispatch("increment")}>Increase</button>
      <button onClick={() => countContext.counterDispatch("decrement")}>Decrease</button>
    </div>
  );
}

export default ComponentB;
