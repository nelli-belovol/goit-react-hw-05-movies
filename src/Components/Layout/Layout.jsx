import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.scss';

export default function Layout() {
  return (
    <>
      <nav className={s.nav__container}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${s.nav__link} ${isActive ? s.nav__linkactive : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${s.nav__link} ${isActive ? s.nav__linkactive : ''}`
          }
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
