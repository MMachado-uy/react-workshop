import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hola Mundo!</p>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));