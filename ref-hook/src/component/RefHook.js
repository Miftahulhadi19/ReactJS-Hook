import { useRef } from 'react';

function RefHook() {
  const target = useRef(null);
  return (
    <div>
      <button onClick={() => target.current.click()}>Button 1</button>
      <button ref={target} onClick={() => console.log('button 2 clicked')}>
        Button 2
      </button>
    </div>
  );
}

export default RefHook;
