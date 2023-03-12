import React, { useState, useEffect } from 'react';

function HookCounter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `you clicked ${counter} times`;
  }, [counter]);
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>You've Click {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default HookCounter;
