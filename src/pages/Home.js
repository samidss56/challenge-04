import React, { useEffect, useState } from "react";
import { getMovieList } from "../api";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import { ArrowRight } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    const moviesToDisplay =
      searchResults.length > 0 ? searchResults : popularMovies;

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
        <header className="App-header d-flex">
          <Row>
            <Col md={6}>
              <h3 className="text-start mt-4" style={{ marginLeft: "6.5rem", color: "black" }}>
                <strong>Popular Movies</strong>
              </h3>
            </Col>
            <Col md={6}>
              <h6
                className="text-end mt-4 align-content-center text-danger"
                style={{ marginRight: "6.5rem" }}
              >
                See All Movies
                <ArrowRight className="icon-arrow"></ArrowRight>
              </h6>
            </Col>
          </Row>

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
