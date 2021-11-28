import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesPage.module.scss';
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
      <form onSubmit={handleSearchSubmit} className={s.form}>
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
      <ul className={s.movies__list}>
        {movies &&
          movies.map(movie => {
            return (
              <li className={s.movies__item} key={movie.id}>
                <Link to={`/movies/${movie.id}`} className={s.movies__link}>
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
