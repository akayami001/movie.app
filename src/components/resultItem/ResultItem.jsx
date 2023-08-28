import { unavailable } from "../config";
import "./resultItem.scss";

const ResultItem = ({ result, onClick }) => {
  const { poster_path, name, overview } = result;
  console.log(result);
  return (
    <>
      <li className="card-item" onClick={onClick}>
        <img
          className="card-image"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : unavailable
          }
          alt={name}
        />
        <div className="card-content">
          <h2 className="card-title">{result.name || result.title}</h2>
          <p className="card-desc">{overview}</p>
        </div>
      </li>
    </>
  );
};

export default ResultItem;
