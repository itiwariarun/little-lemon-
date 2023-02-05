import React from "react";
import "../components/styles/Specials.css";
import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";
const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>This Week's Specials</h1>
        <Link to="/ordernow" className="btn-container">
          <button type="button" className="btn btn-menu">
            Online Menu
          </button>
        </Link>
      </div>
      <SpecialsCard />
    </div>
  );
};

export default Specials;
