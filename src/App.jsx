import "./App.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Talent from "./Components/Talent/Talent";
import Cart from "./Components/Cart/Cart";
import PaymentStatus from "./Components/Payment/PaymentStatus/PaymentStatus";
import Payment from "./Components/Payment/Payment";
import TalentDetail from "./Components/Talent/TalentDetail/TalentDetail";
import Profile from "./Components/profile-module/profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talent" element={<Talent />} />
        <Route path="talent-detail" element={<TalentDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment-status" element={<PaymentStatus />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
