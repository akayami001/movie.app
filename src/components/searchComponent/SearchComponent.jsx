// components/SearchComponent.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ResultItem from "../resultItem/ResultItem.jsx";
import { img_200, unavailable } from "../config.js";
import "./searchComponent.scss";

const SearchComponent = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const searchInputRef = useRef(null);

  const fetchSearchResults = async () => {
    try {
      if (searchText) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=90666bfac25a6d35ad77ed582ce6d683`
        );
        setContent(response.data.results);
        console.log(response.data.results);
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
    navigate("/home");
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
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
        <ul className="result-list">
          {content.map((result, index) => (
            <li key={index} className="result-item">
              <Link to={`/details/${result.id}`} key={result.id}>
                <ResultItem
                  result={result}
                  // Check if poster_path is available before using it
                  posterUrl={
                    result.poster_path
                      ? `https://image.tmdb.org/t/p/{result.poster_path}`
                      : ""
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
