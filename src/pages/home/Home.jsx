import React from "react";
import Topbar from "../../components/Topbar/Topbar.jsx";
import SearchComponent from "../../components/searchComponent/SearchComponent.jsx";
import "./home.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="navigation">
        <Topbar />
      </div>
      <div className="search-comp">
        <SearchComponent />
      </div>
    </div>
  );
};

export default HomePage;
