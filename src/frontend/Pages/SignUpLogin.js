import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SignUpLogin.css"; // Import the CSS file

const SignUpLogin = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="body-wrapper">  {/* Wrapped the body in a div */}
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
        
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <div className="heading-container">
              <h1>Create Account</h1>
            </div>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="text-container">
              <span>or use your email for registration</span>
            </div>
            <div className="input-container">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <div className="heading-container">
              <h1>Sign in</h1>
            </div>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="text-container">
              <span>or use your account</span>
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="link-container">
              <a href="#">Forgot your password?</a>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          <div className="overlay-login-signup">
            <div className="overlay-panel overlay-left">
              <div className="heading-container">
                <h1>Welcome Back!</h1>
              </div>
              <div className="text-container">
                <p>To keep connected with us please login with your personal info</p>
              </div>
              <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="heading-container">
                <h1>Hello, Friend!</h1>
              </div>
              <div className="text-container">
                <p>Enter your personal details and start your journey with us</p>
              </div>
              <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default SignUpLogin;
