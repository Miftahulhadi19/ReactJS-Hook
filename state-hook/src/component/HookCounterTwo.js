import React, { useState } from 'react';

function HookCounterTwo() {
  const initial = 0;
  const [counter, setCounter] = useState(initial);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <div>
      counter : {counter}
      <button onClick={() => setCounter(initial)}>reset</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>decrement</button>
      <button onClick={incrementFive}>increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
