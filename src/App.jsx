import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HolaMundo  from './components/Hola.jsx'
import Home       from './components/Home.jsx'
import NotFound   from './components/NotFound.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/hola" component={HolaMundo}/>
          <Route exact path="/404" component={NotFound}/>
          <Route>
            <Redirect to="/404"/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
