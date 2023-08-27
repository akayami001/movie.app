import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper.js";

import Search from "./pages/home/Home.jsx";
import DetailPage from "./components/detailPage/DetailPage.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    <Router>
      <AuthWrapper>
        <Routes>
          {isLoggedIn ? (
            <Route>
              <Route path="/home" element={<Search />} />
              <Route path="/details/:resultId" element={<DetailPage />} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          )}
        </Routes>
      </AuthWrapper>
    </Router>
  );
}

export default App;
