import React, { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom';
import s from './MovieDetailsPage.module.scss';
import shortid from 'shortid';

import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    api.getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <button onClick={goBack} className={s.button__back} type="button">
        Go back
      </button>

      {movie && (
        <>
          <div className={s.movie__main}>
            <img
              className={s.movie__img}
              width="220px"
              height="330px"
              src={
                movie.poster_path &&
                `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`
              }
              alt={movie.title}
            />
            <div className={s.main__info}>
              <h2>{movie.title}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map(genre => {
                  return <span key={shortid.generate()}>{genre.name} </span>;
                })}
            </div>
          </div>
          <div className={s.movie__addInfo}>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
