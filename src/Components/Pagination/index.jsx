import React from "react";
import "./styles.css";

const Pagination = ({ page, totalPages, handlePageChange }) => {
  const MAX_PAGES = 5;

  const renderPagination = () => {
    const pages = [];
    let startPage = Math.max(1, page - Math.floor(MAX_PAGES / 2));
    let endPage = Math.min(totalPages, startPage + MAX_PAGES - 1);

    if (totalPages > MAX_PAGES) {
      if (endPage - startPage + 1 < MAX_PAGES) {
        startPage = Math.max(1, endPage - MAX_PAGES + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
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
          style={{ visibility: page === 1 ? "hidden" : "visible" }}
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
          style={{ visibility: page === totalPages ? "hidden" : "visible" }}
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
