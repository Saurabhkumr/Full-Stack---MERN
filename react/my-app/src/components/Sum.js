import React from "react";
import { useState } from "react";
function Sum() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sum, setSum] = useState();
  function add() {
    setSum(num1 + num2);
  }
  return (
    <div>
      <label>Number 1 : </label>
      <input value={num1} onChange={(e) => setNum1(+e.target.value)}></input>
      <label>Number 2 : </label>
      <input value={num2} onChange={(e) => setNum2(+e.target.value)}></input>
      <buttom onClick={add}>Sum</buttom>
      <p>sum is {sum}</p>
    </div>
  );
}
export default Sum;
