import "./App.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Talent from "./Components/Talent/Talent";
import Cart from "./Components/Cart/Cart";
import PaymentStatus from "./Components/Payment/PaymentStatus/PaymentStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talent" element={<Talent />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment-status" element={<PaymentStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
