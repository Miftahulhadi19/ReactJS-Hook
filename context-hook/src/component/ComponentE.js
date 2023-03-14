import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChanelContext } from '../App';

function ComponentE() {
  const user = useContext(UserContext);
  const chanel = useContext(ChanelContext);
  return (
    <div>
      <ComponentF />
      {user} - {chanel}
    </div>
  );
}

export default ComponentE;
