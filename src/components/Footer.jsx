import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <footer aria-label="data">
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p aria-label="about us">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <section className="footer-content">
            <article className="locations">
              <h5>LOCATIONS</h5>
              <ul aria-label="location">
                <li aria-label="accra">Accra</li>
                <li aria-label="kumasi">Kumasi</li>
                <li aria-label="cape coast">Cape Coast</li>
                <li aria-label="tamale">Tamale</li>
              </ul>
            </article>
            <article className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul aria-label="time">
                <li aria-label="mon">Mon - Wed: 10:30AM - 12:00AM</li>
                <li aria-label="fri">Fri: 12:00PM - 1:00AM</li>
                <li aria-label="sat">Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </article>
            <article className="contact">
              <h5>CONTACT US</h5>
              <ul aria-label="contact">
                <li aria-label="address">
                  96 Abafom Road, North Ridge - Accra
                </li>
                <li aria-label="tel">Tel: 020 7928 0678</li>
                <li aria-label="email">Email: info@littlelemon.com</li>
              </ul>
            </article>
          </section>
          <footer className="copyright">
            <p aria-label="copyright">
              © 2023 Little Lemon Ltd. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
