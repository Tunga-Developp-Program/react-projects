import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=100";


function App() {
  const [movies, setMovies] = useState<any[]>([]);

  const [search_url, setSearchUrl] = useState(API_URL)

  useEffect(() => {
    fetch(search_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, [search_url]);

  return (
    <>
      <SearchForm search_url={search_url} setSearchUrl={setSearchUrl} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
