import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  // increment = () => {
  //   const { counter } = this.state;
  //   const nextCounter = counter + 1;
  //   this.setState({ counter: nextCounter });
  // };

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        {/* <button onClick={this.increment.bind(this)}>increment</button> */}
        <button onClick={() => this.increment()}>increment</button>
        {/* <button onClick={this.increment}>increment</button> */}
      </div>
    );
  }
}

export default ClassCounter;
