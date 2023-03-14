import './App.css';
import { createContext } from 'react';
import TopBar from './component/TopBar';
import Footer from './component/Footer';
import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import { AppContext } from './component/context/app-context';
import ComponentC from './component/ComponentC';

// export const UserContext = createContext({
//   email: 'user@example.com',
//   name: 'John',
//   id: '123dadadq2dw',
// });
export const ThemeContext = createContext({
  dark: 'dark',
  light: 'light',
});
export const UserContext = React.createContext();
export const ChanelContext = React.createContext();
function App() {
  return (
    <div className='App'>
      <UserContext.Provider value={'Miftahul Hadi'}>
        <ChanelContext.Provider value={'learnCode'}>
          <ComponentC />
        </ChanelContext.Provider>
      </UserContext.Provider>
      {/* <AppContext.Provider value={contextValue}>
        <Navbar />
      </AppContext.Provider> */}

      {/* <TopBar />
      <Footer /> */}
    </div>
  );
}

export default App;
