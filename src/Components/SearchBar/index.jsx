import React, { useState } from "react";
import "./styles.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        id="search-bar-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search characters"
      />
    </div>
  );
};

export default SearchBar;

// import React from "react";
// import "./styles.css";

// const SearchBar = () => {
//   return (
//     <div className="search-bar">
//       <input
//         id="search-bar-input"
//         type="text"
//         placeholder="Search characters"
//       />
//     </div>
//   );
// };

// export default SearchBar;
