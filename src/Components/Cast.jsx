import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function Cast() {
  const { movieId } = useParams();

  const [data, setData] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.getMovieCredits(movieId).then(data => setData(data));
    setCast(data.cast);
  }, [movieId, data.cast]);

  return (
    <>
      <ul>
        {cast &&
          cast.map(actor => {
            return (
              <li key={shortid.generate()}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}

                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
