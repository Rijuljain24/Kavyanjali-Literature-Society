import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <img
          className="contact-bg-img"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"
          alt="Background"
        />
        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-left">
            <div className="contact-info">
              <p className="contact-heading">Lorem ipsum amet dolor</p>
              <p className="contact-subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis volupta
              </p>
              <div className="contact-social-icons">
                {[
                  "Icon-twitter.png",
                  "Icon-facebook.png",
                  "Icon-google.png",
                  "Icon-instagram.png",
                ].map((icon, index) => (
                  <a key={index} className="contact-social-link" href="#">
                    <img
                      className="contact-icon"
                      src={`https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/${icon}`}
                      alt="Social Icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="contact-right">
            <form className="contact-form">
              <div className="contact-form-wrapper">
                <p className="contact-form-heading">Get a quote</p>
                <p className="contact-form-subheading">We will get back to you in 24 hours</p>
                <div className="contact-input-group">
                  <input className="contact-input" name="FirstName" placeholder="First Name" />
                  <input className="contact-input" name="LastName" placeholder="Last Name" />
                  <input className="contact-input" name="Email" placeholder="Email" />
                  <input className="contact-input" name="PhoneNumber" placeholder="Phone Number" />
                  <textarea className="contact-textarea" placeholder="Type message here"></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">Get quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
