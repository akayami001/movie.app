import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import "./topbar.scss";
import logo from "../../utils/logo/logo.png";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="navigation">
      <div className="link">
        <Link to="/home">MovieApp</Link>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
