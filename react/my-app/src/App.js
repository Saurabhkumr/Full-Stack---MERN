import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Sum from "./components/Sum";

function App() {
  return (
    <div>
      <Router>
        <h1>Welcome</h1>
        <Link to="/">Home</Link>
        <Link to="/Sum">Find Sum</Link>
        <Link to="/Test">Calculate</Link>
        <Routes>
          <Route exact path="/" element={<HomeComp />}></Route>
          <Route exact path="/Sum" element={<Sum />}></Route>
          <Route exact path="/Test" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
