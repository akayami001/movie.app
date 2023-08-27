import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import Topbar from "../../components/Topbar/Topbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = (e) => {
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
      handleRegisterClick(e);
    }
  };

  const isRegisterDisabled = !(email && password.length > 6);

  return (
    <div className="register-container">
      <div className="navigation">
        <Topbar />
      </div>
      <form className="register-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          onKeyPress={handleKeyPress}
        />
        <button
          className="register-button"
          onClick={handleRegisterClick}
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
      </form>
    </div>
  );
};

export default Register;
