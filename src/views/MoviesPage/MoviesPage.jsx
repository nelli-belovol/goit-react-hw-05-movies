import React, { useState, useEffect } from 'react';

import s from './MoviesPage.module.scss';
import { useSearchParams } from 'react-router-dom';

import MoviesList from '../../Components/MoviesList/MoviesList';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();

    setSearchParams({ search: value });
  };

  useEffect(() => {
    if (searchParams.get('search') === null) {
      return;
    } else {
      api
        .searchMovies(searchParams.get('search'))
        .then(dataMovies => setMovies(dataMovies));
    }
  }, [searchParams]);

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
      {searchParams.get('search') && <MoviesList movies={movies} />}
    </>
  );
}
