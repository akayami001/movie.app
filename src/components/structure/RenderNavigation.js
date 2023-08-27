import { Routes, Route, Link } from "react-router-dom";
import { nav } from "./navigation.js";
import { AuthData } from "../../auth/AuthWrapper.js";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return true;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const MenuItem = (r) => {
    return (
      <div className="menuItem">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };
  const { user, logout } = AuthData();
  return (
    <div className="menu">
      {nav.map((r, i) => {
        if (r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return true;
      })}
      {user.isAuthenticated ? (
        <div className="menuItem">
          <Link to={"/"} onClick={logout}>
            Logout
          </Link>
        </div>
      ) : (
        <div className="menuItem">
          <Link to={"/login"} onClick={logout}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};
