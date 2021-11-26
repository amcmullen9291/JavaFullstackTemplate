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
import About from './Components/About';
import functionalComponents from './Components/FunctionalComponents'; 
import Components from './Components/Components'; 
import Redux from './Components/Redux';
import ActionsReducers from './Components/ActionsReducers';
import ComponentsState from './Components/ComponentState';


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={WelcomePage}/>
          <Route path={"/react/at-a-glance"} exact component={About}/>
          <Route path={"/react/reuseable-code"} exact component={functionalComponents}/>
          <Route path={"/react/components"} exact component={Components}/>

          <Route path={"/react/component-state"} exact component={ComponentsState}/>
          <Route path={"/react/reducers"} exact component={ActionsReducers}/>
          <Route path={"/react/storing-state"} exact component={Redux}/>

          <Route path={"/NotFound"} exact component={NotFound}/>
          <Redirect to={"/NotFound"} />
        </Switch>
    </Router>
    </>
  );

}

export default App;