import React, { useReducer, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { AuthData } from "../../auth/AuthWrapper";
import Topbar from "../../components/Topbar/Topbar";

const Login = () => {
  const { login } = AuthData();
  const navigate = useNavigate();

  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { email: "", password: "" }
  );

  const [errorMessage, setErrorMessage] = useState(false);
  const emailInputRef = useRef(null);
  useEffect(() => {
    emailInputRef.current.focus(); // Focus on the email input when the component mounts
  }, []);

  const doLogin = async () => {
    const storedPassword = localStorage.getItem("password");
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    try {
      if (formData.password === storedPassword) {
        await login(formData.email, formData.password);
        console.log("Login success");
        navigate("/home");
      } else {
        setErrorMessage("Incorrect Password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && formData.email && formData.password) {
      doLogin();
    }
  };

  const isLoginDisabled = !(formData.email && formData.password.length > 6);

  return (
    <div className="page">
      <div className="navigation">
        <Topbar />
      </div>
      <h2>Login Page</h2>
      <div className="inputs">
        <div className="login-form">
          <div className="input">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              onKeyPress={handleKeyPress}
              ref={emailInputRef}
            />
          </div>
          <div className="input">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
            />
          </div>
          <button
            className="button"
            onClick={doLogin}
            disabled={isLoginDisabled}
          >
            Login
          </button>
          {errorMessage ? (
            <p className="error">
              Invalid email or password. Please try again.
            </p>
          ) : null}
          <p className="register-link">
            Not a user? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
