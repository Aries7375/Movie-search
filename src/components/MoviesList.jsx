import React from "react";
import { useNavigate } from "react-router-dom";
import poster from "../../posters.json";
import Pagination from "./Pagination";
import useMovie from "../hook/useMovie";

const MoviesList = ({ data, setCurrentPage, currentPage }) => {
  const { imgAsing } = useMovie();
  const navigate = useNavigate();
  const pages = Math.ceil(data?.totalResults / 10);
  if (data?.Response == "False") {
    return (
      <h1 className="text-white text-2xl text-center px-5 mt-9">
        No titles were found for this search
      </h1>
    );
  }
  return (
    <div className="px-8 py-12 flex flex-col items-center md:flex-row md:flex-wrap md:justify-around lg:px-14 xl:px-24 2xl:px-36 relative">
      {data?.Search.map((img) => (
        <div
          key={img.imdbID}
          className="pb-6 cursor-pointer p-4 text-center mb-28 bg-movieBg min-h-[350px] rounded-lg shadow-md shadow-black max-w-[326px] sm:w-[315px] md:mr-7 lg:w-64"
          onClick={() => navigate(`/${img.imdbID}`)}
        >
          <img
            src={imgAsing(img)}
            className="m-auto rounded-lg shadow-md shadow-black"
          ></img>
          <h1 className="text-white text-2xl mt-3 fd:text-2xl lg:text-2xl overflow-hidden">
            {img.Title}
          </h1>
          <p className="text-white text-lg mt-2 fd:text-base lg:text-base">
            {img.Year}
          </p>
        </div>
      ))}
      <button
        className="fixed text-white bottom-[10px] right-5 text-lg"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="fa-solid fa-arrow-up-long"></i>
      </button>
      <Pagination
        setCurrentPage={setCurrentPage}
        pages={pages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MoviesList;
