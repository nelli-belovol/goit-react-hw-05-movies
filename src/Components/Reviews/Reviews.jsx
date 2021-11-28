import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import FetchMovies from 'api/movies';
import s from './Reviews.module.scss';

const api = new FetchMovies();

export default function Rewievs() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      <ul className={s.reviews__main}>
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
