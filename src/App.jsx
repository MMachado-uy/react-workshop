import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HolaMundo from './components/Hola.jsx'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hola" component={HolaMundo}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));