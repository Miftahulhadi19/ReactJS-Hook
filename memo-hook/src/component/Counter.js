import React, { useState, useMemo } from 'react';

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const even = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={incrementOne}>Count one {countOne}</button>
      <span>{even ? 'even' : 'odd'}</span>
      <br />
      <button onClick={incrementTwo}>Count one {countTwo}</button>
    </div>
  );
}

export default Counter;
