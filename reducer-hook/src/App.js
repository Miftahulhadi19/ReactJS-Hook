import React, { useReducer } from 'react';
import './App.css';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import CounterThree from './component/CounterThree';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';
import InputReducer from './component/InputReducer';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className='App'>
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* {count} */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        <InputReducer />
      </div>
    </CountContext.Provider>
  );
}

export default App;
