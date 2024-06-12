import React, { Component } from "react";
class Sumcls extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
  }
  addnum = () => {
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };

  render() {
    return (
      <div>
        <label>Number 1 : </label>
        <input
          value={this.state.num1}
          onChange={(e) => this.setState({ num1: e.target.value })}
        ></input>
        <label>Number 2 : </label>
        <input
          value={this.state.num2}
          onChange={(e) => this.setState({ num2: e.target.value })}
        ></input>
        <button onClick={this.addnum}>Sum</button>
        <p>sum is {this.state.result}</p>
      </div>
    );
  }
}

export default Sumcls;
