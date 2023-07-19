import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SearchButton = () => {
  return (
    <div className="container-search-btn">
      <button className="search-btn">Search</button>
      <Link className="text1" to="/loading"></Link>;
    </div>
  );
};

export default SearchButton;
