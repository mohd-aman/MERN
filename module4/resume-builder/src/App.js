import Header from "./components/header";
import About from "./components/about";
import LandingPage from "./components/landingPage";
import Register from "./components/register";
import Signin from "./components/signin";
import Template from "./components/template";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import Education from "./components/education";
import Finalize from "./components/finalize";
import { useSelector } from "react-redux";


function App() {
  let state = useSelector((state)=>state);
  let auth = state.authReducer;
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact>
        <LandingPage></LandingPage>
      </Route>
      <Route path="/template" exact component={auth.isAuth?Template:Signin}></Route>
     <Route path="/about" exact>
        <About></About>
      </Route>
      <Route path="/register" exact component={auth.isAuth? LandingPage:Register}></Route>
      <Route path="/signin" exact component={auth.isAuth? LandingPage:Signin}></Route>
      <Route path="/contact" exact component={auth.isAuth?Contact:Signin}></Route>
      <Route path="/education" exact component={auth.isAuth?Education:Signin}></Route>
      <Route path="/finalize" exact component={auth.isAuth?Finalize:Signin}></Route>
    </Switch>
    </>
  );
}

export default App;
