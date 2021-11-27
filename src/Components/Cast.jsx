import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState();

  useEffect(() => {
    api.getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(actor => {
          return (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </>
          );
        })}
      </ul>
    </>
  );
}
