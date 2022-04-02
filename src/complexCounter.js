import React, { useReducer } from "react";
const initialState = {
  counter: 0,
  counter2:5
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state,counter: state.counter + action.value };
    case "decrement":
      return { ...state,counter: state.counter - action.value };
      case "increment2":
      return { ...state,counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state,counter2: state.counter2 - action.value };
    default:
      return state;
  }
};
function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Complex Counter </h1>
      <div>Count {count.counter}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 2,
            })
          }
        >
          Increment by 2
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement by 1
        </button>
      </div>
      <div>Count {count.counter2}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 2,
            })
          }
        >
          Increment2 by 2
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 1,
            })
          }
        >
          Decrement2 by 1
        </button>
      </div>
    </div>
  );
}

export default ComplexCounter;
