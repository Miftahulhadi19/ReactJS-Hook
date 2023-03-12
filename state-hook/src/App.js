import './App.css';
import React from 'react';
// import React, { useState, useEffect } from 'react';
import ClassCounter from './component/ClassCounter';
import ClassCounterTwo from './component/ClassCounterTwo';
import ClassMouse from './component/ClassMouse';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookMouse from './component/HookMouse';
import HookObject from './component/HookObject';
import IntervalClassCounter from './component/IntervalClassCounter';
import IntervalHookCounter from './component/IntervalHookCounter';
import MouseConteiner from './component/MouseConteiner';
import ComponentC from './component/ComponentC';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';

export const UserContext = React.createContext();
export const ChanelContext = React.createContext();

function App() {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert('you have changed the counter' + counter);
  // }, [counter]);
  return (
    <div className='App'>
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounterTwo /> */}
      {/* <ClassCounter /> */}
      {/* <div class='class-counter'>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((nextCount) => nextCount + 1)}>
          {' '}
          +{' '}
        </button>
      </div> */}
    </div>
  );
}

export default App;
