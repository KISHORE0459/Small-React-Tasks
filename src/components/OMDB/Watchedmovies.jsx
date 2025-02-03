import PropTypes from "prop-types";
// import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "../../styles/omdb/omdb.css";
import { useEffect, useState } from "react";

const Watchedmovies = ({ watched, setWatched }) => {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    var likecount = watched.filter((movie) => movie.like === true);
    setLikes(likecount.length);
  }, [watched]);
  return (
    <div id="watched-container">
      <h3>Watch List</h3>
      <div id="watched-details">
        <h3>Total Movies : {watched.length}</h3>
        <h3>
          Liked Movies : {likes} <FaHeart style={{ color: "red" }} />
        </h3>
      </div>
      {watched !== null &&
        watched.map((watch) => (
          <Moviebox
            movie={watch}
            watched={watched}
            setWatched={setWatched}
            key={watch.imdbID + "watched"}
          />
        ))}
    </div>
  );
};

Watchedmovies.propTypes = {
  watched: PropTypes.array,
  setWatched: PropTypes.func,
};

function removeWatchedMovies(movie, watched, setWatched) {
  setWatched(watched.filter((mv) => mv.imdbID !== movie.imdbID));
}

function like(movie, watched, setWatched) {
  var updatedlist = watched.map((mv) =>
    mv.imdbID === movie.imdbID
      ? { ...movie, like: movie.like ? false : true }
      : mv
  );
  setWatched(updatedlist);
}
function Moviebox({ movie, watched, setWatched }) {
  return (
    <div className="movie-ctn">
      <div className="movie-img">
        <img src={movie.Poster} alt="" />
      </div>
      <div className="detail-ctn">
        <div className="title">
          <h3>{movie.Title}</h3>
        </div>
        <div className="details">
          <h4>{movie.Year}</h4>
          <h4>Type : {movie.Type}</h4>
          <div
            className="like"
            onClick={() => {
              like(movie, watched, setWatched);
            }}
          >
            <FaHeart style={{ color: movie.like ? "red" : "white" }} />
          </div>
        </div>
      </div>
      <div className="addtowatch">
        <button
          onClick={() => {
            removeWatchedMovies(movie, watched, setWatched);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
Moviebox.propTypes = {
  movie: PropTypes.object,
  watched: PropTypes.array,
  setWatched: PropTypes.func,
};

export default Watchedmovies;
