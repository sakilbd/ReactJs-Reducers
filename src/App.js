import React, { useReducer } from 'react';
import ComplexCounter from './ComplexCounter';

const initialState = 0;
const reducer = (state,action) =>{
    switch(action){
      case 'increment':
        return state+1;
        case 'decrement':
          return state-1;  
          default:
            return state;
    }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <div>Count {count}</div>
      <button onClick={()=>dispatch('increment')}>Increase</button>
      <button onClick={()=>dispatch('decrement')}>Decrease</button>
      <ComplexCounter/>
    </div>
  )
}

export default App