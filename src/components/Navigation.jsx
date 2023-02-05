import React from "react";
import "./styles/Navigation.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav aria-label="header" className="navigation">
      <NavLinks />
    </nav>
  );
};

export default Navigation;
