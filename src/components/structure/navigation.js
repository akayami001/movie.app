import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Search from "../../pages/home/Home.jsx";
import DetailPage from "../detailPage/DetailPage";

export const nav = [
  {
    path: "/search",
    name: "Search",
    element: <Search />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/details/:resultId",
    name: "DetailPage",
    element: <DetailPage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/",
    name: "Register",
    element: <Register />,
    isMenu: true,
    isPrivate: false,
  },
];
export default nav;
