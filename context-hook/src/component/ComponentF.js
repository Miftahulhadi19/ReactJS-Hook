import React from 'react';
import { UserContext, ChanelContext } from '../App';

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChanelContext.Consumer>
              {(chanel) => {
                return (
                  <div>
                    This is user context : {user} From chanel context : {chanel}
                  </div>
                );
              }}
            </ChanelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
