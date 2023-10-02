import React, { useEffect, useState } from "react";
import { getMovieList } from "../api";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Carousel";
import NavbarComponent from "../components/Navbar";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    const moviesToDisplay = searchResults.length > 0 ? searchResults : popularMovies;

    return moviesToDisplay.map((movie, i) => {
      return (
        <Link to={`/detail/${movie.id}`} key={i}>
          <div className="Movie-wrapper mb-4 mx-1" key={i}>
            <img
              className="Movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              alt=""
              style={{ width: "200px", borderRadius: "10px" }}
            />
          </div>
        </Link>
      );
    });
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <NavbarComponent onSearchResults={handleSearchResults} />

      <HomeCarousel />

      <div className="App">
        <header className="App-header">
          <h3 className="text mt-4">
            {" "}
            <strong>Popular Movies</strong>
          </h3>
          <br />
          <div className="Movie-container">
            <PopularMovieList />
          </div>
        </header>
      </div>

      <Footer />
    </>
  );
};

export default Home;
