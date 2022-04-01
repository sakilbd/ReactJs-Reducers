import React, { useReducer } from 'react'

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

    </div>
  )
}

export default App