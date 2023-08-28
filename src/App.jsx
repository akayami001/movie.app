import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper.js";

import Search from "./pages/home/Home.jsx";
import DetailPage from "./components/detailPage/DetailPage.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PrivateRoutes from "./utils/PrivateRoutes.js";

function App() {
  return (
    <Router>
      <AuthWrapper>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Search />} />
            <Route path="/details/:resultId" element={<DetailPage />} />
          </Route>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthWrapper>
    </Router>
  );
}

export default App;
