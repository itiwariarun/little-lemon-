import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2">
      <div>img</div>
      <div>
        <ul>
          <li>
            <a href="/home">Homepage</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
