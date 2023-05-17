import React from "react";
import useMovie from "../hook/useMovie";

const Pagination = ({ setCurrentPage, pages, currentPage }) => {
  const pagesPerBlock = 5;
  const currentBlock = Math.ceil(currentPage / pagesPerBlock);
  const maxBlock = Math.ceil(pages / pagesPerBlock);
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  const arrPages = [];
  const finalPage =
    maxBlock == currentBlock ? pages : currentBlock * pagesPerBlock;
  for (let i = initialPage; i <= finalPage; i++) {
    arrPages.push(i);
  }
  const capturePage = (e) => {
    setCurrentPage(e);
  };
  const previousPage = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage + 1 <= pages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="absolute bottom-12 max-w-[900px] w-full mx-auto px-3">
      <ul className="flex justify-evenly">
        <li
          className="h-[37px] aspect-square flex justify-center items-center rounded-md cursor-pointer bg-[#e5087f] text-white fd:h-[30px]"
          onClick={previousPage}
        >
          <i className="fa-solid fa-angles-left"></i>
        </li>
        {arrPages.map((page) => (
          <li
            key={page}
            className={`h-[37px] aspect-square flex justify-center items-center fd:h-[30px] rounded-md hover:bg-[#b84c86] cursor-pointer border-2 border-solid border-[#e5087f] text-white ${
              currentPage == page && "bg-[#e5087f]"
            }`}
            onClick={() => capturePage(page)}
          >
            {page}
          </li>
        ))}
        <li
          className="h-[37px] aspect-square flex justify-center items-center rounded-md cursor-pointer bg-[#e5087f] text-white  fd:h-[30px]"
          onClick={nextPage}
        >
          <i className="fa-solid fa-angles-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
