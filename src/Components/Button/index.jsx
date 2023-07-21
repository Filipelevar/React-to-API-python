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

// import React from "react";
// import { Link } from "react-router-dom";
// import "./styles.css";

// const SearchButton = () => {
//   return (
//     <Link className="container-search-btn" to="/search">
//       <button className="search-btn">Search</button>
//     </Link>
//   );
// };

// export default SearchButton;
