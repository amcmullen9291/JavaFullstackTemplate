import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import WelcomePage from './Components/WelcomePage.js';
import NotFound from './Components/NotFound';
import Methods from './Components/Methods';
import OtherStuff from './Components/OtherStuff';


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={WelcomePage}/>
          <Route path={"/react/at-a-glance"} exact component={WelcomePage}/>
          <Route path={"/react/functions"} exact component={Methods}/>
          <Route path={"/react/etc"} exact component={OtherStuff}/>
          <Route path={"/NotFound"} exact component={NotFound}/>
          <Redirect to={"/NotFound"} />
        </Switch>
    </Router>
    </>
  );

}

export default App;