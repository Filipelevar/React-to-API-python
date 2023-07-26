import React from "react";
import "./styles.css";

const Modal = ({ setModalOpen, modalContent, modalOpen }) => {
  if (!modalContent) {
    return;
  }
  return (
    <div
      id="modal-card"
      className={`modal fixed flex inset-0 items-center justify-center backdrop-brightness-50  ${
        modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className=" flex flex-col lg:flex-row border border-solid border-gray-900 h-5/6">
        <div className="backdrop-blur-3xl pb-8 rounded-t-lg lg:rounded-tr-none lg:rounded-s-lg relative w-4/12  ">
          <img
            src={modalContent.image}
            alt={modalContent.name}
            className="w-full h-full absolute top-0 left-0 object-cover blur border border-solid border-gray-900 brightness-50 "
          />

          <button
            onClick={() => setModalOpen(false)}
            className="btn m-4  z-50 relative rounded-lg border-2 border-white text-white w-20 h-11 "
            id="button"
          >
            Close
          </button>

          <div className="card lg:-translate-x-12 w-2/3 lg:w-full m-auto shadow-md ">
            <div>
              <img
                src={modalContent.image}
                alt={modalContent.name}
                className=" w-full h-full scroll mt-24"
              />
            </div>
            <div className="card_info_modal bg-neutral-800 border border-solid border-gray-900">
              <h2 className=" text-white">{modalContent.name}</h2>
              <p className=" text-white">{modalContent.species}</p>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-b-lg lg:rounded-tr-lg lg:rounded-bl-none flex flex-col rounded-2xl">
          <div className="mt-12 mx-60 ">
            <h3 className="cardInformation text-CBD736 pt-0 pl-0">About</h3>
            <p className="info_modal text-white">{`${modalContent.name} is a ${
              modalContent.gender
            } ${modalContent.species}. ${
              modalContent.gender === "Female" ? "She" : "He"
            } is ${modalContent.status}`}</p>

            <h3 className="cardInformation text-CBD736">Origin</h3>
            <p className="info_modal text-white ">{modalContent.origin_name}</p>

            <h3 className="cardInformation text-CBD736">Location</h3>
            <p className="info_modal text-white">
              {modalContent.location_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
