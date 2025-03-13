import React from "react";
import {FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Kavyanjali Literature Society</h2>
        <p>Spreading the fragrance of literature.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kavyanjaligeu/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://instagram.com/kavyanjali.geu" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}Kavyanjali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
