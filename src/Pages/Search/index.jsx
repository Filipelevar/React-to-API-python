import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../style.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("name");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://apipython-gp9i.onrender.com/search?name=${searchTerm}&page=1`
        );
        setSearchResults(response.data.characters);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin_name}</p>
              <p>Location: {character.location_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

// import React from "react";
// import imagemLogo from "../../Assets/image 1.svg";
// import "../../style.css";
// import Button from "../../Components/Button/index";
// import SearchBar from "../../Components/SearchBar";

// const HomeScreen = () => {
//   return (
//     <div className="container">
//       <img src={imagemLogo} alt="" className="imagem-logo" />
//       <div className="container-btn-search">
//         <div className="div-search-bar">
//           <SearchBar></SearchBar>
//         </div>
//         <div className="div-button">
//           <Button></Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;
