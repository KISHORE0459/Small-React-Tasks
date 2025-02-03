import PropTypes from "prop-types";
import "../../styles/omdb/omdb.css";
import loadinggif from "../../assets/loadinggif2.gif";

const Listmovies = ({ movies, watched, setWatched, setMovies, loading }) => {
  if (loading) {
    return (
      <div id="movie-container">
        <img src={loadinggif} alt="" id="loading" />
      </div>
    );
  }
  return (
    <div id="movie-container">
      {movies !== null &&
        movies.map((movie) => (
          <Moviebox
            movie={movie}
            movies={movies}
            watched={watched}
            setWatched={setWatched}
            setMovies={setMovies}
            key={movie.imdbID}
          />
        ))}
    </div>
  );
};

Listmovies.propTypes = {
  movies: PropTypes.array,
  watched: PropTypes.array,
  setWatched: PropTypes.func,
  setMovies: PropTypes.func,
  loading: PropTypes.bool,
};

function setWatchedMovies(movie, movies, setWatched, setMovies) {
  setWatched((watched) => [...watched, { ...movie, rating: 1, like: false }]);
  setMovies(movies.filter((m) => m.imdbID != movie.imdbID));
}

function Moviebox({ movie, movies, watched, setWatched, setMovies }) {
  let watchstatus = true;
  console.log(watched);
  watched.map((wm) => {
    if (wm.imdbID === movie.imdbID) {
      watchstatus = false;
    }
  });
  return (
    watchstatus && (
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
          </div>
        </div>
        <div className="addtowatch">
          <button
            onClick={() => {
              setWatchedMovies(movie, movies, setWatched, setMovies);
            }}
          >
            +
          </button>
        </div>
      </div>
    )
  );
}
Moviebox.propTypes = {
  movie: PropTypes.object,
  movies: PropTypes.array,
  watched: PropTypes.array,
  setWatched: PropTypes.func,
  setMovies: PropTypes.func,
  watchstatus: PropTypes.bool,
};

export default Listmovies;
