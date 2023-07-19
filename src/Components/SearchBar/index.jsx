import React from "react";
import "./styles.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        id="search-bar-input"
        type="text"
        placeholder="Search characters"
      />
    </div>
  );
};

export default SearchBar;
