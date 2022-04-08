import React, { useReducer } from "react";
import ComplexCounter from "./ComplexCounter";
import CounterThree from "./CounterThree";
import ComponentA from "./ComponentA";

const initialState = 0;
export const counterContext = React.createContext();
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count {count}</div>
     
      <ComplexCounter />
      <CounterThree />
      <counterContext.Provider value={{counterDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;
