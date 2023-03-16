import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseConteiner() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggel Display</button>
      {/* {display && <HookMouse />} */}
      {display ? <HookMouse /> : ''}
    </div>
  );
}

export default MouseConteiner;
