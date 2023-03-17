import React, { useRef, useState, useEffect } from 'react';

function UseRef3() {
  const [email, setEmail] = useState('');
  // const prevEmail = useRef();
  const inputRef = useRef();

  // useEffect(() => {
  //   prevEmail.current = email;
  // }, [email]);

  const OnInputChange = (e) => {
    setEmail(e.target.value);
  };

  const removeValue = () => {
    inputRef.current.value = '';
  };

  const setValue = () => {
    inputRef.current.value = 'miftahulhadi@gmail.com';
  };

  const checkEmailStateValue = () => {
    console.log({ email, ref: inputRef.current.value });
  };
  return (
    <div>
      <h1>UseRef for prev value</h1>
      <input
        ref={inputRef}
        value={email}
        onChange={OnInputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      {/* <p>Previous Email : {prevEmail.current}</p> */}
      <button onClick={removeValue}>Remove value</button>
      <button onClick={setValue}> Set Email</button>
      <button onClick={checkEmailStateValue}>Check Email Value</button>
    </div>
  );
}

export default UseRef3;
