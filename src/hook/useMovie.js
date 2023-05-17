import { useState } from "react";
import poster from "../../posters.json";
import { useParams, useNavigate } from "react-router-dom";

const useMovie = () => {
  //! Home
  const [movie, setMovie] = useState(localStorage.getItem("name"));
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState();
  const click = (data) => {
    localStorage.setItem("name", data.movie);
    const arr = data.movie.split("");
    arr[arr.length - 1] == " " ? arr.pop() : null;
    const name = arr.join("").replace(" ", "+");
    setMovie(name);
  };
  const fetchMovie = () => {
    if (movie?.length >= 3) {
      fetch(
        `https://www.omdbapi.com/?apikey=e064ad8e&s=${movie}&page=${currentPage}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => console.error(err));
    }
  };
  //! Movies List
  const imgAsing = (img) => {
    if (poster[img.imdbID]) return poster[img.imdbID];
    if (img.Poster == "N/A")
      return "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswerscdn.microsoft.com%2Fstatic%2Fimages%2Fimage-not-found.jpg";
    return img.Poster;
  };
  //! Movie Data
  const [movieInfo, setMovieInfo] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchId = () => {
    fetch(`https://www.omdbapi.com/?apikey=e064ad8e&i=${id}&plot=full`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setMovieInfo(json))
      .catch(() => console.error(err));
  };
  const bg = {
    background: `radial-gradient(closest-side, #081c22 79%, transparent 80% 100%), conic-gradient(#e5087f ${
      movieInfo?.Ratings[1]
        ? movieInfo?.Ratings[1].Value.split("/")[0].split("%")[0] + "%"
        : movieInfo?.imdbRating.split(".").join("") + "%"
    }, #da7f9e 0)`,
  };
  const duration = (dur) => {
    let number = Number(dur.split(" ")[0]);
    let hours = 0;
    while (number >= 60) {
      number -= 60;
      hours++;
    }
    const duration = `${hours > 0 ? hours + "h" : ""} ${
      number > 0 ? number + "m" : ""
    }`;
    return duration.trim();
  };
  return {
    click,
    movie,
    setMovie,
    currentPage,
    setCurrentPage,
    data,
    setData,
    fetchMovie,
    imgAsing,
    movieInfo,
    setMovieInfo,
    fetchId,
    id,
    navigate,
    bg,
    duration,
  };
};

export default useMovie;
