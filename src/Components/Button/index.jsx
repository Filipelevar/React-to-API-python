import React from "react";
import "./styles.css";

const SearchButton = ({ onClick }) => {
  return (
    <div className="container-search-btn">
      <button className="search-btn" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;
