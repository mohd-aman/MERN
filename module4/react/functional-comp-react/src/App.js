import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Ue1 from './components/Ue1';
import Ue2 from './components/Ue2'
import Ue3 from './components/Ue3';
import Parent from './components/Context/Parent';
import Test from './components/Context/Test'
import ContextNormal from './components/Context/ContextNormalvsMemo/ContextNormal';
import ContextMemo from './components/Context/ContextNormalvsMemo/ContextMemo';


function App() {
  return (
    // <Counter/>
    // <Ue3/>
    // <Parent/>
    // <Test/>
    // <ContextNormal/>
    <ContextMemo/>
  );
}

export default App;
