// npm install react-router-dom@5.3.1
import './App.css';
import Feed from "./components/Feed"
import Login from "./components/Login"
import PageNotFound from "./components/PageNotFound"
import Profile from "./components/Profile"
import Signup from "./components/Signup"
import {Switch,Route} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <AuthContextProvider>
    <Switch>
      <Route path="/feed">
       <Feed></Feed>
      </Route>
      <Route path="/login">
       <Login></Login>
      </Route>
      <Route path="/signup">
       <Signup></Signup>
      </Route>
      <Route path="/profile">
       <Profile></Profile>
      </Route>
      <Route>
       <PageNotFound></PageNotFound>
      </Route>
    </Switch>
    </AuthContextProvider>
  );
}

export default App;
