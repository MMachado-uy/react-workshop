import React, { Component } from "react";
import ReactDOM from "react-dom";

import HolaMundo from './components/Hola.jsx'

class App extends Component {
  render() {
    return (
      <HolaMundo/>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));