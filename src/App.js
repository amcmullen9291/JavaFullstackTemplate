import './App.css';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={WelcomePage}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;