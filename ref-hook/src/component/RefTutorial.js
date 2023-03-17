import React, { useRef, useEffect } from 'react';

function RefTutorial() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const focus = () => {
  //   inputRef.current.focus();
  //   console.log(inputRef.current.value);
  //   inputRef.current.value = '';
  // };
  return (
    <div>
      <h1>Miftah</h1>
      <input ref={inputRef} type='text' placeholder='Ex...' />
      {/* <button onClick={focus}>Change name</button> */}
    </div>
  );
}

export default RefTutorial;
