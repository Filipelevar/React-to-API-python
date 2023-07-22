import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../style.css";
import imagemLogo from "../../Assets/image 1.svg";
import Button from "../../Components/Button/index";
import SearchBar from "../../Components/SearchBar";
import CharacterCard from "../../Components/Cards/index";
import Pagination from "../../Components/Pagination/index";
import LoadingPage from "../../Components/LoadingPage/index";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { name, page } = useParams();
  const [searchTerm, setSearchTerm] = useState(name);
  const [loading, setLoading] = useState(true);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      window.location.href = `/search/${encodeURIComponent(
        searchTerm
      )}/${newPage}`;
    }
  };
  const handleSearch = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://apipython-gp9i.onrender.com/search?name=${searchTerm}&page=${page}`
      );
      setSearchResults(response.data.characters);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    setSearchTerm(name);
    setLoading(true);
    handleSearch();
  }, [name, handleSearch]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={imagemLogo} alt="" className="imagem-logo" />
      <div className="container-btn-search">
        <div className="div-search-bar">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className="div-button">
          <Button />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-20">
        {searchResults.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="mt-10">
        <Pagination
          page={Number(page)}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Search;
