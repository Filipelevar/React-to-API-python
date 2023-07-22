import React from "react";
import "./styles.css";

const Pagination = ({ page, totalPages, handlePageChange }) => {
  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={page === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="19"
          viewBox="0 0 11 21"
          fill="none"
        >
          <path
            d="M10 0.999999L1 10.5L10 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
      {renderPagination()}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="19"
          viewBox="0 0 11 21"
          fill="none"
        >
          <path
            d="M0.999999 20L10 10.5L1 0.999998"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
