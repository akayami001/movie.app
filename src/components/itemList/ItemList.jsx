// components/ItemList.js
import React from "react";
import ResultItem from "./ResultItem"; // Replace with actual path

const ItemList = ({ results }) => {
  return (
    <ul className="item-list">
      {results.map((result, index) => (
        <li key={index} className="item">
          <ResultItem result={result} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
