import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter 3(Complex Counter Simplier) </h3>
      <div>Counter 1 : {count}</div>
      <button onClick={() => dispatch("increment")}>Increase</button>
      <button onClick={() => dispatch("decrement")}>Decrease</button>
      <div>Counter 2 : {count2}</div>
      <button onClick={() => dispatch2("increment")}>Increase</button>
      <button onClick={() => dispatch2("decrement")}>Decrease</button>
    </div>
  );
}

export default CounterThree;
