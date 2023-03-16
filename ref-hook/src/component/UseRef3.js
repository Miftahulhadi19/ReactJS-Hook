import React, { useRef, useState, useEffect } from 'react';

function UseRef3() {
  const [email, setEmail] = useState('');
  const prevEmail = useRef();

  useEffect(() => {
    prevEmail.current = email;
  }, [email]);

  const OnInputChange = (e) => {
    setEmail(e.target.value);
  };

  const removeValue = () => {
    prevEmail.current.value = '';
  };

  const setValue = () => {
    prevEmail.current.value = 'miftahulhadi@gmail.com';
  };

  const checkEmailStateValue = () => {
    console.log({ email });
  };
  return (
    <div>
      <h1>UseRef for prev value</h1>
      <input
        ref={prevEmail}
        value={email}
        onChange={OnInputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      <p>Previous Email : {prevEmail.current}</p>
      <button onClick={removeValue}>Remove value</button>
      <button onClick={setValue}>Remove setEmail</button>
      <button onClick={checkEmailStateValue}>Remove Check Email Value</button>
    </div>
  );
}

export default UseRef3;
