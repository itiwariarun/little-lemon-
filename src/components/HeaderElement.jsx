import React from "react";
import "./styles/HeaderElement.css";
import Logo from "../components/assets/logo.jpg";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header aria-label="header" className="header">
      <div className="header-wrapper">
        <figure aria-label="logo" className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </figure>
        <Navigation />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
