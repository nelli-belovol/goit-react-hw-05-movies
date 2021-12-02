import React from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.scss';

export default function MoviesList({ movies }) {
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
