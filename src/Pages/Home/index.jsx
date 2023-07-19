import React from "react";
import imagemLogo from "../../Assets/image 1.svg";
import "../../style.css";
import Button from "../../Components/Button/index";
import SearchBar from "../../Components/SearchBar";

const HomeScreen = () => {
  return (
    <div className="container">
      <img src={imagemLogo} alt="" className="imagem-logo" />
      <div className="container-btn-search">
        <div className="div-search-bar">
          <SearchBar></SearchBar>
        </div>
        <div className="div-button">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
