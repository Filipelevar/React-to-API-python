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
import Modal from "../../Components/Modal/index";
import ErrorPage from "../../Components/ErrorPage";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { name, page } = useParams();
  const [searchTerm, setSearchTerm] = useState(name);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState();
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      window.location.href = `/search/${encodeURIComponent(
        searchTerm
      )}/${newPage}`;
    }
  };

  const handleSearch = useCallback(
    async (term) => {
      try {
        const response = await axios.get(
          `https://apipython-gp9i.onrender.com/search?name=${term}&page=${page}`
        );
        setSearchResults(response.data.characters);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    },
    [page]
  );

  const handleSubmit = useCallback(() => {
    navigate(`/search/${encodeURIComponent(searchTerm)}/1`);
  }, [searchTerm, navigate]);

  useEffect(() => {
    setLoading(true);
    setSearchTerm(name);
    handleSearch(name);
  }, [name, handleSearch]);

  if (loading) {
    return <LoadingPage />;
  }

  if (searchResults.length === 0) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <img src={imagemLogo} alt="" className="imagem-logo" />
        <form
          className="container-btn-search"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="div-search-bar">
            <SearchBar onSearch={setSearchTerm} />
          </div>
          <div className="div-button">
            <Button type="submit" />
          </div>
        </form>
        <div id="card-res" className="grid grid-cols-4 gap-6 mt-20">
          {searchResults.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => {
                setSelectCharacter(character);
                setModalOpen(true);
              }}
            ></CharacterCard>
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
      <Modal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        modalContent={selectCharacter}
      />
    </>
  );
};

export default Search;
