import React from "react";

const Form = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       num1: 0,
//       num2: 0,
//       result: 0,
//     };
//   }
//   changemsg = () => {
//     const result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
//     this.setState({ result });
//   };

//   // Arrow functions for event handlers
//   changehandle1 = (e) => {
//     this.setState({ num1: e.target.value });
//   };

//   changehandle2 = (e) => {
//     this.setState({ num2: e.target.value });
//   };
//   render() {
//     return (
//       <div>
//         Enter first number :
//         <input
//           type="number"
//           value={this.state.num1}
//           onChange={this.changehandle1}
//         ></input>
//         Enter second number :
//         <input
//           type="number"
//           value={this.state.num2}
//           onChange={this.changehandle2}
//         ></input>
//         <button onClick={this.changemsg}>calculate</button>
//         <input value={this.state.result}></input>
//       </div>
//     );
//   }
// }

export default Form;
