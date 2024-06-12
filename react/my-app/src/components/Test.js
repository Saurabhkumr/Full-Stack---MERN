import react, { Component } from "react";
class Test extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      result: "",
    };
  }

  factorial = () => {
    let f = 1;
    let n = this.state.num;
    if (n === 1) this.setState({ result: 1 });
    else {
      for (let i = 1; i <= n; i++) {
        f *= i;
      }
    }
    this.setState({ result: f });
  };
  isPrime = () => {
    let n = this.state.num;
    if (n <= 1) this.setState({ result: "Not prime" });
    else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          this.setState({ result: "Not Prime" });
          return;
        }
      }
    }
    this.setState({ result: "Prime" });
  };
  isArm = () => {
    let s = 0;
    let n = this.state.num;
    let originalNum = n;
    while (n > 0) {
      const digit = n % 10;
      s += digit ** 3;
      n = Math.floor(n / 10);
    }
    if (s === originalNum) {
      this.setState({ result: "Armstrong number" });
    } else {
      this.setState({ result: "Not Armstrong number" });
    }
  };
  clear = () => {
    this.setState({ result: "" });
  };

  onchangeHandle = (e) => {
    this.setState({ num: Number(e.target.value) });
  };

  render() {
    return (
      <>
        <div className="container">
          <center>
            <label>Enter the number : </label>
            <input type="number" onChange={this.onchangeHandle}></input>
            <div className="button">
              <button onClick={this.factorial}>Factorial</button>
              <button onClick={this.isPrime}>Check Prime</button>
              <button onClick={this.isArm}>Check Armstrong</button>
              <button onClick={this.clear}>Clear</button>
            </div>
            <label>Result : </label>
            <input type="text" value={this.state.result}></input>
          </center>
        </div>
      </>
    );
  }
}
export default Test;
