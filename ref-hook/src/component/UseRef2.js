import React, { useState, useEffect, useRef } from 'react';

function UseRef2() {
  const [email, setEmail] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    console.log({ email });
    inputRef.current.focus();
  });

  const inputChange = (e) => {
    setEmail(e.target.value);
  };

  const changeColor = () => {
    inputRef.current.style.backgroundColor = 'orange';
  };

  const focus = () => {
    inputRef.current.focus();
  };

  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <div>
      <h1>UseRef for element</h1>
      <input
        ref={inputRef}
        value={email}
        onChange={inputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
      <button onClick={changeColor}>Change bg color</button>
    </div>
  );
}

export default UseRef2;
