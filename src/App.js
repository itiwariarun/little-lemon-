import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import BookingConfirmed from "./routes/BookingConfirmed";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/bookingconfirmed" element={<BookingConfirmed />} />
      </Routes>
    </>
  );
}

export default App;
