import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import { Container } from "react-bootstrap";
import "./App.css";
import Main from "./components/Main/Main";
import { Navbar } from "./index";

const API_URL = "http://www.omdbapi.com?apikey=aade6fc0";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("halloween");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        searchMovies={searchMovies}
        setSearchTerm={setSearchTerm}
      />
      {/* <Main /> */}
        <Container>
          <div className="cardholder" id='Movies'>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
          </div>
        </Container>re
    </>
  );
};

export default App;
