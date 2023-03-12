import React, { Component } from 'react';

class ClassCounterTwo extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>counter {this.state.counter}</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
