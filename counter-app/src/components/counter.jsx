import React, { Component } from "react";
// that "componenet" comes from the React module.
// it has a bunch of methods that we're going to inherit

class Counter extends Component {
  render() {
    // WHEN RETURNING THERE MUST ALWAYS BE ONE PARENT ELEMENT
    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
