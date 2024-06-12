import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Sum from "./components/Sum";
import Home from "./components/Home";
import Sumcls from "./components/Sumcls";

function App() {
  return (
    <div>
      <Router>
        <h1>Welcome</h1>
        <Link to="/">Home</Link>
        <Link to="/Sum">Find Sum</Link>
        <Link to="/Sumcls">Find Sum suing class</Link>
        <Link to="/Test">Calculate</Link>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Sum" element={<Sum />}></Route>
          <Route exact path="/Sumcls" element={<Sumcls />}></Route>
          <Route exact path="/Test" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
