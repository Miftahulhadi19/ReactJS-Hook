import './App.css';
import { createContext } from 'react';
import TopBar from './component2/TopBar';
import Footer from './component2/Footer';
import React, { useState, useEffect } from 'react';
import Navbar from './component2/Navbar';
import { AppContext } from './component2/context/app-context';

export const UserContext = createContext({
  email: 'user@example.com',
  name: 'John',
  id: '123dadadq2dw',
});
export const ThemeContext = createContext({
  dark: 'dark',
  light: 'light',
});
// export const UserContext = React.createContext();
// export const ChanelContext = React.createContext();
function App() {
  return (
    <div className='App'>
      {/* <UserContext.Provider value={'Miftahul Hadi'}>
        <ChanelContext.Provider value={'learnCode'}>
          <ComponentC />
        </ChanelContext.Provider>
      </UserContext.Provider> */}
      <AppContext.Provider value={contextValue}>
        <Navbar />
      </AppContext.Provider>

      {/* <TopBar /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
