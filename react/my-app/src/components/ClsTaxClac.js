import React, { Component } from "react";

class SalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      eid: "",
      amount: "",
      taxRate: 0.3,
      taxAmount: 0,
    };
  }
  handleNameChange = (event) => {
    this.setState({ ename: event.target.value });
  };
  handleIdChange = (event) => {
    this.setState({ eid: event.target.value });
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleTaxRateChange = (event) => {
    this.setState({ taxRate: event.target.value });
  };

  calculateTax = () => {
    const { amount, taxRate } = this.state;
    const taxAmount = parseFloat(amount) * parseFloat(taxRate);
    this.setState({ taxAmount: taxAmount.toFixed(2) });
  };

  render() {
    const { amount, taxRate, taxAmount, ename, eid } = this.state;

    return (
      <div>
        <center>
          <forn>
            <h2>Tax Calculator Using Class Component</h2>
            <div>
              <label>
                Enter Name:
                <input
                  type="text"
                  value={this.state.ename}
                  onChange={this.handleNameChange}
                />
              </label>
            </div>
            <div>
              <label>
                Enter Id:
                <input
                  type="text"
                  value={this.state.eid}
                  onChange={this.handleIdChange}
                />
              </label>
            </div>
            <div>
              <label>
                Enter Amount:
                <input
                  type="number"
                  value={amount}
                  onChange={this.handleAmountChange}
                />
              </label>
            </div>
            <div>
              <label>
                Tax Rate (as a decimal):
                <input
                  type="number"
                  step="0.01"
                  value={taxRate}
                  onChange={this.handleTaxRateChange}
                />
              </label>
            </div>
            <div>
              <button onClick={this.calculateTax}>Calculate Tax</button>
            </div>
            {taxAmount > 0 && (
              <div>
                <p>Eno : {eid}</p>
                <p>Ename : {ename}</p>
                <p>Tax Amount: Rs{taxAmount}</p>
              </div>
            )}
          </forn>
        </center>
      </div>
    );
  }
}

export default SalComp;
