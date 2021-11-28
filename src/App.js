import './App.css';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import { Loading } from './Components/Loading';
// import HomePage from 'views/HomePage';
// import MoviesPage from 'views/MoviesPage';

const AsyncHomePage = lazy(() => import('./views/HomePage/HomePage'));
const AsyncMoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const AsyncMovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const AsyncCast = lazy(() => import('./Components/Cast/Cast'));
const AsyncReviews = lazy(() => import('./Components/Reviews/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AsyncHomePage />} />
          <Route path="/movies" element={<AsyncMoviesPage />} />
          <Route path="/movies/:movieId" element={<AsyncMovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<AsyncCast />} />
            <Route path="/movies/:movieId/reviews" element={<AsyncReviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
