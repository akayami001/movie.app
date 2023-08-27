import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detailPage.scss";
import Topbar from "../Topbar/Topbar";
import SearchComponent from "../searchComponent/SearchComponent";

const DetailPage = () => {
  const { resultId } = useParams(); // Get the resultId from the route parameter
  const [resultDetails, setResultDetails] = useState(null);

  useEffect(() => {
    const fetchResultDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${resultId}?api_key=90666bfac25a6d35ad77ed582ce6d683`
        );
        setResultDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResultDetails();
  }, [resultId]);

  if (!resultDetails) {
    return <div>Loading...</div>;
  }

  // Render detailed information about the selected result
  return (
    <div className="detail-page-container">
      <div className="navigation">
        <Topbar />
      </div>
      <div className="search-comp">
        <SearchComponent />
      </div>
      <div className="detail-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${resultDetails.poster_path}`}
          alt={resultDetails.title || resultDetails.name}
        />
        <div className="details">
          <h2>{resultDetails.title || resultDetails.name}</h2>
          <p>Media Type: {resultDetails.media_type}</p>
          <p>Original Language: {resultDetails.original_language}</p>
          <p>Overview: {resultDetails.overview}</p>
          <p>Popularity: {resultDetails.popularity}</p>
          <p>Release Date: {resultDetails.release_date}</p>
          <p>Vote Average: {resultDetails.vote_average} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
