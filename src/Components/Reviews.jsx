import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import FetchMovies from 'api/movies';
const api = new FetchMovies();

export default function Cast() {
  const { movieId } = useParams();

  const [data, setData] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getMovieReviews(movieId).then(data => {
      setData(data);
    });

    setReviews(data.results);
  }, [movieId, data.results]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => {
            return (
              <li key={shortid.generate()}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        {!reviews && <p>We don't have any reviews for this movie</p>}
      </ul>
    </>
  );
}
