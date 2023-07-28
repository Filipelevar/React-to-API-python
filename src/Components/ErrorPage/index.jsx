import React from "react";
import { Link } from "react-router-dom";
import RotatingText from "./RotatingText";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ErrorPage = ({ setIsSearchTerm }) => {
  const handleClick = () => {
    setIsSearchTerm(false);
    navigate(`/`);
  };
  const navigate = useNavigate();

  return (
    <div className="background-img">
      <div className="space"></div>
      <div className="wrapper">
        <div className="img-wrapper">
          <RotatingText>4{"<"}4</RotatingText>
        </div>
        <p className="error-message">
          The character you are trying to search has been
          <br /> moved to another universe.
        </p>
        <Link to="/">
          <button
            onClick={() => handleClick}
            className="button-error"
            type="button"
          >
            GET ME HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
