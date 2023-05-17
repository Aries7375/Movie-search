import React, { useEffect, useState } from "react";
import poster from "../../posters.json";
import useMovie from "../hook/useMovie";

const MovieData = () => {
  const { imgAsing, movieInfo, setMovieInfo, fetchId, navigate, bg, duration } =
    useMovie();
  useEffect(() => {
    fetchId();
  }, []);
  const runTime = duration(`${movieInfo?.Runtime}`);
  return (
    <div className="bg-[#032541] min-h-screen px-8 pb-8 text-[aliceblue] min-w-[280px] lg:flex lg:justify-center lg:items-center lg:p-10 lg:bg-[#051625]">
      <div className="lg:border-2 lg:border-solid lg:border-[#e5087f] lg:p-12 lg:rounded-xl lg:bg-[#032541]">
        <button className="text-2xl mt-2 mb-5" onClick={() => navigate(-1)}>
          <i className="bx bx-arrow-back"></i>
        </button>
        <div className="sm:flex">
          <img
            src={movieInfo && imgAsing(movieInfo)}
            alt=""
            className="m-auto mb-5 rounded-xl shadow-md shadow-black sm:max-w-[250px] sm:max-h-[400px] sm:m-0 fd:w-44"
          />
          <div className="pl-6 md:pl-8">
            <div>
              <h1 className="text-3xl text-center fd:text-xl">
                {movieInfo?.Title}{" "}
                <span className="text-xl ml-2">({movieInfo?.Year})</span>
              </h1>
              <div className="flex justify-center mt-5">
                <div
                  className="max-h-[64px] min-w-[64px] flex justify-center items-center rounded-full text-teal-500 mr-5 fd:max-h-[54px] fd:min-w-[54px]"
                  style={bg}
                >
                  {movieInfo?.Ratings[1]
                    ? movieInfo?.Ratings[1].Value.split("/")[0].split("%")[0] +
                      "%"
                    : movieInfo?.imdbRating}
                </div>
                <div>
                  <div className="flex gap-5 justify-center">
                    <h3 className="text-center fd:text-sm">
                      {movieInfo?.Released}
                    </h3>
                    <h3 className="fd:text-sm">{runTime}</h3>
                  </div>
                  <ul className="flex gap-4 mt-3 flex-wrap justify-center fd:gap-2">
                    {movieInfo?.Genre.split(",").map((gen) => (
                      <li
                        key={gen}
                        className="border-2 border-solid border-[#e5087f] py-1 px-2 rounded-xl text-sm fd:text-xs"
                      >
                        {gen}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ul className="mb-5 mt-7">
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">Director:</span>{" "}
                  {movieInfo?.Director}
                </li>
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">Actors:</span>{" "}
                  {movieInfo?.Actors}
                </li>
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">BoxOffice:</span>{" "}
                  {movieInfo?.BoxOffice}
                </li>
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">Awards:</span>{" "}
                  {movieInfo?.Awards}
                </li>
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">Country:</span>{" "}
                  {movieInfo?.Country}
                </li>
                <li className="md:pb-1">
                  <span className="text-[#e5087f]">Language:</span>{" "}
                  {movieInfo?.Language}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="mt-6 mb-3 text-2xl pl-3">Storyline</h3>
        <p className="px-3 md:w-3/4">{movieInfo?.Plot}</p>
      </div>
    </div>
  );
};

export default MovieData;
