import React, { Component } from "react";
import Debug from "./Debug";
import Example from "./Example";

class App extends Component {
  render() {
    return (
      <div>
        <div>APP</div>
        <Debug data={{ test: true }} />
        <Example />
        <Debug src="data" />
      </div>
    );
  }
}

export default App;
