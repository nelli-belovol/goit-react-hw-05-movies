import './App.css';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Cast from './Components/Cast';
import Reviews from './Components/Reviews';

import Layout from './Components/Layout';
import { Loading } from './Components/Loading';
// import HomePage from 'views/HomePage';
// import MoviesPage from 'views/MoviesPage';

const AsyncHomePage = lazy(() => import('./views/HomePage'));
const AsyncMoviesPage = lazy(() => import('./views/MoviesPage'));
const AsyncMovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AsyncHomePage />} />
          <Route path="/movies" element={<AsyncMoviesPage />} />
          <Route path="/movies/:movieId" element={<AsyncMovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
