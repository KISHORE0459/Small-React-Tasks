import { useEffect, useState } from "react";
import OmdbNav from "./OmdbNav";
import Listmovies from "./Listmovies";
import "../../styles/omdb/omdb.css";
import Watchedmovies from "./Watchedmovies";
const Ombd = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storedWatchedMovies = sessionStorage.getItem("WatchedMovies");
    return storedWatchedMovies ? JSON.parse(storedWatchedMovies) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("working");
    sessionStorage.setItem("WatchedMovies", JSON.stringify(watched));
  }, [watched]);

  return (
    <div id="ctn-ctn">
      <OmdbNav setMovies={setMovies} setLoading={setLoading} />
      <div id="ctn">
        <Listmovies
          movies={movies}
          watched={watched}
          setWatched={setWatched}
          setMovies={setMovies}
          loading={loading}
        />
        <Watchedmovies watched={watched} setWatched={setWatched} />
      </div>
    </div>
  );
};

export default Ombd;

// 815564b6
