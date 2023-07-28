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
      <div className=" flex flex-col xl:flex-row xl:w-auto border border-solid border-gray-800 h-5/6">
        <div className="backdrop-blur-3xl pb-8 rounded-t-lg xl:rounded-tr-none xl:rounded-s-lg relative w-4/12  ">
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

          <div className="xl:-translate-x-12 w-2/3 xl:w-full m-auto shadow-md ">
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
        <div className="bg-black rounded-b-lg xl:rounded-tr-lg xl:rounded-bl-none flex flex-col rounded-2xl ">
          <div className="mt-12 ps-12 me-80 ">
            <h3 className="cardInformation tracking-widest text-xs pt-0 pl-0 mt-20 font-Nunito">
              About
            </h3>
            <p className="info_modal tracking-widest text-base mt-5 text-white font-Nunito">{`${
              modalContent.name
            } is a ${modalContent.gender} ${modalContent.species}. ${
              modalContent.gender === "Female" ? "She" : "He"
            } is ${modalContent.status}`}</p>

            <h3 className="cardInformation tracking-widest  mt-24 text-xs font-Nunito">
              Origin
            </h3>
            <p className="text-gray-500 mt-2 text-sm">Planet</p>
            <p className="info_modal text-2xl tracking-widest text-white font-Nunito ">
              {modalContent.origin_name}
            </p>

            <h3 className="cardInformation tracking-widest text-xs mt-36 font-Nunito">
              Location
            </h3>
            <p className="info_modal tracking-widest text-2xl mt-5 text-white font-Nunito">
              {modalContent.location_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
