import React, { Component } from 'react';
import './App.css';
import ClassCounterOne from './component/ClassCounterOne';
import HookCounter from './component/HookCounter';
import ClassMouse from './component/ClassMouse';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalClassCounter from './component/IntervalClassCounter';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import HookCounterTwo from './component/HookCounterTwo';
import Input from './component/Input';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <ClassCounterOne /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <ClassMouse></ClassMouse> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter></IntervalClassCounter> */}
        {/* <IntervalHookCounter></IntervalHookCounter> */}
        {/* <DataFetching /> */}
        <Input />
      </div>
    );
  }
}

export default App;
