import React, { useState } from "react";
import imagemLogo from "../../Assets/image 1.svg";
import "../../style.css";
import Button from "../../Components/Button/index";
import SearchBar from "../../Components/SearchBar";
import ErrorPage from "../../Components/ErrorPage";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isSearchTerm, setIsSearchTerm] = useState(false);

  const handleButtonClick = () => {
    if (searchTerm === "") {
      setIsSearchTerm(true);
      return;
    }
    navigate(`/search/${encodeURIComponent(searchTerm)}/1`);
  };

  if (isSearchTerm) return <ErrorPage setIsSearchTerm={setIsSearchTerm} />;

  return (
    <div className="container mx-auto my-4">
      <img src={imagemLogo} alt="" className="imagem-logo" />
      <form className="container-btn-search">
        <div className="div-search-bar">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className="div-button">
          <Button onClick={handleButtonClick} />
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
