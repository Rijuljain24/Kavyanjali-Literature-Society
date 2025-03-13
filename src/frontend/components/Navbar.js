import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./navbar.css";
import kvjLogo from "./assets/KavLogo.jpg"; // Import the logo image

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">  {/* Navigate to Landing Page when logo is clicked */}
                    <img src={kvjLogo} alt="Kvj Logo" />
                </Link>
            </div>
            <div className="navbar-menu">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/services" className="navbar-item">Services</Link>
                <Link to="/merch" className="navbar-item">Merch</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
            </div>
            <div className="navbar-actions">
                <Link to="/signup">
                    <button className="login-btn">Login/SignUp</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
