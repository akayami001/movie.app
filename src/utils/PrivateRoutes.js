import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );
  // let auth = { token: false };
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} exact />;
};

export default PrivateRoutes;
