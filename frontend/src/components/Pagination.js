import React from "react";

const Pagination = ({ totalWords, wordsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="mt-auto mx-auto flex flex-rows gap-[20px] w-[200px]">
      {pages.map((page, i) => {
        return (
          <button
            className="bg-gray-900 box-content mt-3 w-[40px] h-[40px] flex items-center justify-center rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
