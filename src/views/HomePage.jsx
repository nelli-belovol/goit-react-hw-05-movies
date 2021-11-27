import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrending().then(setMovies);
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
