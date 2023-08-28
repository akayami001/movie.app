import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import Topbar from "../../components/Topbar/Topbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  useEffect(() => {
    emailInputRef.current.focus(); // Focus on the email input when the component mounts
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const doRegister = (e) => {
    e.preventDefault();
    if (email && password.length > 6) {
      // Store registration data in local storage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      console.log("User registered:", email);
      navigate("/login");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && email && password.length > 6) {
      doRegister(e);
    }
  };

  const isRegisterDisabled = !(email && password.length > 6);

  return (
    <div className="register-container">
      <div className="navigation">
        <Topbar />
      </div>
      <h2>Register Page</h2>
      <div className="inputs">
        <div className="register-form">
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              ref={emailInputRef}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button
            className="register-button"
            onClick={doRegister}
            disabled={isRegisterDisabled}
          >
            Register
          </button>
          {isRegisterDisabled && (
            <p className="error-message">
              Please enter a valid email and a password with at least 7
              characters.
            </p>
          )}
          <p className="login-link">
            Already a user? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
