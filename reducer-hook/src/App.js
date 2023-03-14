import React, { useReducer } from 'react';
import './App.css';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import CounterThree from './component/CounterThree';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';

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
        {/* <ComponentA /> */}
        {/* <ComponentB /> */}
        {/* <ComponentC /> */}
        {/* <DataFetchingOne /> */}
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
}

export default App;
