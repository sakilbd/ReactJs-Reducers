import React, { useReducer } from 'react';

const initialState = {
    counter:0,
};
const reducer = (state,action) =>{
    switch(action.type){
      case 'increment':
        return {counter: state.counter+1};
        case 'decrement':
          return {counter: state.counter-1};
          default:
            return state;
    }
}


function complexCounter() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <div>Count {count.counter}</div>
      <button onClick={()=>dispatch({type:'increment'})}>Increase</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>Decrease</button>

    </div>
  )
}

export default complexCounter;