import Navbar from './components/navbar';
import Cart from "./components/cart"
import Home from './components/home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Preview from './components/preview';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/cart'>
          <Cart/>
        </Route>
        <Route path ='/preview'>
          <Preview/>
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
