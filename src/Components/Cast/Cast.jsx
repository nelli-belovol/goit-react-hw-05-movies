import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.scss';
import shortid from 'shortid';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      <ul className={s.movie__cast}>
        {cast &&
          cast.map(actor => {
            return (
              <li key={shortid.generate()}>
                {/* {actor.profile_path && (
               
                )} */}
                <img
                  width="200px"
                  height="300px"
                  src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                  alt={actor.name}
                />

                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
