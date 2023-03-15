import './App.css';
import ParentComponent from './component/ParentComponent';
import React, { useState, useCallback } from 'react';
import List from './component/List';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };
  return (
    <div className='App'>
      <div style={theme}>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prev) => !prev)}>Chenge Theme</button>
        <List getItem={getItem} />
      </div>
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
