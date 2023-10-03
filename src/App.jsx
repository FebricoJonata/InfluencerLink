import "./App.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membership from "./Components/Membership/Membership";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talent" element={<Membership />} />
      </Routes>
    </Router>
  );
}

export default App;
