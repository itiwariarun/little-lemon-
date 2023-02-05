import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import BookingConfirmed from "./routes/BookingConfirmed";
import HeaderElement from "./components/HeaderElement";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Login from "./routes/Login";
import DonateR from "./routes/DonateR";
import OrderOnline from "./routes/OrderOnline";
import Ordered from "./routes/Ordered";

import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderElement />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/bookingconfirmed" element={<BookingConfirmed />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/donate" element={<DonateR />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ordernow" element={<OrderOnline />} />
        <Route path="/ordered" element={<Ordered />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
