import React, { useContext, useEffect } from "react"; 
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import { AuthProvider, AuthContext } from '../dirs/contexts/AuthProvider';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import './App.css';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/Signup" component={Signup}></Route>
          <PrivateRoute path="/" exact component={Feed}></PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props}></Component> : <Redirect to="/login"></Redirect>
      }}
    ></Route>);
}
export default App;