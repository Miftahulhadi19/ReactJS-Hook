import React, { useReducer } from 'react';

const initialState = {
  counter: 0,
  userInput: '',
  color: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'userInput':
      return { ...state, userInput: action.payload };
    case 'tgColor':
      return { ...state, color: !state.color };
    default:
      break;
  }
};
function InputReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{ color: state.color ? '#333' : '#fff952' }}
      type='text'
      placeholder='Please input...'
      value={state.userInput}
      onChange={(e) => dispatch({ type: 'userInput', payload: e.target.value })}
    >
      <input />
      <p>{state.counter}</p>
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'tgColor' })}>Color</button>
      <p>{state.userInput}</p>
    </div>
  );
}

export default InputReducer;
