import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CalcTax from "./components/TaxCalcFun";
import reportWebVitals from "./reportWebVitals";
import SalComp from "./components/ClsTaxClac";
import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* functional components */}
    {/* <CalcTax eid="104" ename="saurabh" sal="550000"></CalcTax> */}

    {/* class components */}
    {/* <SalComp></SalComp> */}
    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
