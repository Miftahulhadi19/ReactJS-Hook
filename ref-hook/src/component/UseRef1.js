import React, { useState, useEffect, useRef } from 'react';

function UseRef1() {
  const [count, setCount] = useState(0);
  const reRender = useRef(1);

  useEffect(() => {
    console.log('rerender');
    console.log({ count, reRender: reRender.current });
  });

  const addCounter = () => {
    setCount(count + 1);
  };

  const addReRender = () => {
    reRender.current = reRender.current + 1;
  };

  const checkValue = () => {
    console.log({ count, reRender: reRender.current });
  };
  return (
    <div>
      <h1>useref Example</h1>
      <h2>Counter : {count}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <h2>Rerender : {reRender.current}</h2>
      <button onClick={addReRender}>Add Rerender</button>
      <button onClick={checkValue}>Check value</button>
    </div>
  );
}

export default UseRef1;
