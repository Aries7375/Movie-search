import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MoviesList from "./MoviesList";
import useMovie from "../hook/useMovie";

const Home = () => {
  const { click, movie, currentPage, setCurrentPage, data, fetchMovie } =
    useMovie();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    fetchMovie();
  }, [movie, currentPage]);
  return (
    <div className="bg-[#032541] min-h-screen min-w-[280px] lg:p-16 lg:bg-[#051625]">
      <div className="pt-8 lg:border-2 lg:border-solid lg:border-[#e5087f] lg:p-12 lg:rounded-xl lg:bg-[#032541] lg:min-h-[600px]">
        <h1 className="text-[aliceblue] text-4xl text-center mb-8 fd:text-3xl">
          Movie search
        </h1>
        <form
          className="flex justify-center items-center  h-12 rounded-xl fd:h-10"
          onChange={handleSubmit(click)}
        >
          <div className="h-full bg-[#333333] rounded-xl">
            <input
              type="search"
              name=""
              id=""
              placeholder="Star Wars"
              className="text-white bg-transparent py-1 px-3 h-full rounded-xl outline-none"
              {...register("movie")}
            />
            <button
              className="text-white text-xl h-full bg-[crimson] px-[15px] rounded-xl active:bg-[#ac0827] fd:px-3 cursor-pointer"
              onClick={() => localStorage.setItem("name", "")}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </form>
        {movie != null && movie.length >= 3 ? (
          <MoviesList
            data={data}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          <h1 className="text-white text-2xl text-center px-5 mt-9">
            No titles were found for this search
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
