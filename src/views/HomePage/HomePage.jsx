import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.scss';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrending().then(setMovies);
  }, []);

  return (
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
  );
}
