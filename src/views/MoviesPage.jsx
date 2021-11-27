import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const setMoviesToState = async query => {
    const dataMovies = await api.searchMovies(query);
    setMovies(dataMovies);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setMoviesToState(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">Поиск</button>
      </form>
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
    </>
  );
}
