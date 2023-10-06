import "./App.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Talent from "./Components/Talent/Talent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talent" element={<Talent />} />
      </Routes>
    </Router>
  );
}

export default App;
