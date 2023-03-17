import logo from './logo.svg';
import './App.css';
import UseRef1 from './component/UseRef1';
import UseRef2 from './component/UseRef2';
import UseRef3 from './component/UseRef3';
import RefTutorial from './component/RefTutorial';
import RefHook from './component/RefHook';
import RefImage from './component/RefImage';
import ClassTimer from './component/ClassTimer';
import HookTimer from './component/HookTimer';

function App() {
  return (
    <div className='App'>
      {/* <UseRef1 /> */}
      {/* <UseRef2 /> */}
      {/* <UseRef3 /> */}
      {/* <RefTutorial /> */}
      {/* <RefHook /> */}
      {/* <RefImage /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
