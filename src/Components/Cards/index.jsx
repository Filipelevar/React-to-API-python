import React from "react";
import "./styles.css";

const CharacterCard = ({ character }) => {
  return (
    <div
      className="rounded-lg border-2 border-solid border-gray-600 cursor-pointer shadow-outline hover:shadow-md
     hover:border-yellow-400 focus:shadow-md focus:border-yellow-500 "
      id="div-card"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover rounded-t-lg "
      />

      <div className="relative " id="div-card2">
        <img
          src={character.image}
          alt={character.name}
          className=" w-full h-full object-cover absolute top-0 left-0 filter blur backdrop-filter backdrop-blur-md brightness-50"
          id="img-blur"
        />
        <h3
          className="ms-2 text-xl font-Nunito truncate relative z-10 text-white  "
          id="h3-img"
        >
          {character.name}
        </h3>
        <p className="ms-2 relative z-10 text-white" id="p-img">
          {character.species}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CharacterCard;
