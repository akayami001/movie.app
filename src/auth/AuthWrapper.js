import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState({ email: "", isAuthenticated: false });

  const login = (email, password) => {
    const storedPassword = localStorage.getItem("password");
    return new Promise((resolve, reject) => {
      if (password === storedPassword) {
        setUser({ email: email, isAuthenticated: true });
        localStorage.setItem("isLoggedIn", "true");
        resolve("success");
      } else {
        reject("Incorrect password");
        console.log(password);
      }
    });
  };

  const logout = () => {
    setUser({ email: "", isAuthenticated: false });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const authValues = { user, login, logout };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
