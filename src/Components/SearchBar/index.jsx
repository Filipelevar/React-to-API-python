import React from "react";
import "./styles.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        id="search-bar-input"
        type="text"
        onChange={handleInputChange}
        placeholder="Search characters"
      />
    </div>
  );
};

export default SearchBar;
