import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams, Outlet } from 'react-router-dom';
import shortid from 'shortid';
import FetchMovies from 'api/movies';

const api = new FetchMovies();

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.getMovieDetails(movieId).then(setMovie);
    setGenres(movie.genres);
  }, [movieId, movie.genres]);

  return (
    <>
      <Link to="/">Go back</Link>

      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          {genres &&
            genres.map(genre => {
              return <span key={shortid.generate()}>{genre.name} </span>;
            })}

          <img
            src={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`
            }
            alt={movie.title}
          />
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
}
