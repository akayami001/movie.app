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
{
  /**
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import ResultItem from "../../components/resultItem/ResultItem.jsx";
import "./home.scss";
import { AuthData } from "../../auth/AuthWrapper.js";
import Topbar from "../../components/Topbar/Topbar.jsx";

const Search = () => {
  const { user } = AuthData();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const searchInputRef = useRef(null);

  const fetchSearchResults = async () => {
    try {
      if (searchText) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=90666bfac25a6d35ad77ed582ce6d683`
        );
        console.log(response.data.results);
        setContent(response.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchText]);

  const handleSearch = () => {
    fetchSearchResults();
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    searchInputRef.current.focus(); // Focus on the search input when the component mounts
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="navigation">
        <Topbar />
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for movies, TV shows, or actors"
          value={searchText}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          ref={searchInputRef}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul className="result-list">
        {content.map((result, index) => (
          <li key={index} className="result-item">
            <Link to={`/details/${result.id}`} key={result.id}>
              <ResultItem
                result={result}
                // Check if poster_path is available before using it
                posterUrl={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w200${result.poster_path}`
                    : ""
                }
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

*/
}

// pages/HomePage.js
