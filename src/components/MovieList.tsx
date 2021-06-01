import React from "react";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieList = (props: any) => {
  function getclassNameByRate(vote: any) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <main id="main">
      {props.movies.map((movie: any) => (
        <div className="movie" key={movie.id}>
          <img src={`${IMGPATH}${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span className={getclassNameByRate(movie.vote_average)}>
              {movie.vote_average}
            </span>
          </div>
          <div className="overview">
            <h3>Overview:</h3>
            {movie.overview}
          </div>
        </div>
      ))}
    </main>
  );
};

export default MovieList;
