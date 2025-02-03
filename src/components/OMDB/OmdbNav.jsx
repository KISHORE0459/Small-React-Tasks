import { useRef, useState } from "react";
import omdblogo from "../../assets/omdblogo.png";
import PropTypes from "prop-types";
import "../../styles/omdb/omdbnav.css";

const OmdbNav = ({ setMovies, setLoading }) => {
  const search = useRef("");
  const [count, setCount] = useState(-1);
  function fetchMovies() {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=f84fc31d&s=${search.current}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response != "False") {
          setMovies(data.Search);
          setCount(Number(data.Search.length));
          setLoading(false);
        } else {
          setMovies([]);
          setLoading(false);
          if (data.Error == "Movie not found!") {
            setCount(0);
          } else {
            setCount(-1);
          }
        }
      });
  }
  return (
    <nav id="omdbnav">
      <div id="logo">
        <img src={omdblogo} alt="" />
      </div>
      <div id="search">
        <input
          type="text"
          placeholder="Search For Movies"
          ref={search}
          onInput={(e) => {
            search.current = e.target.value;
            console.log(search);
          }}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              fetchMovies(search.current);
            }
          }}
        />
      </div>
      <div id="results">
        <h4>
          {count != -1 ? Number(count) + " results found" : "Search For Movies"}
        </h4>
      </div>
    </nav>
  );
};

OmdbNav.propTypes = {
  setMovies: PropTypes.func,
  setLoading: PropTypes.func,
};
export default OmdbNav;
