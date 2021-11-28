import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.scss';

export default function Layout() {
  return (
    <>
      <nav className={s.nav__container}>
        <NavLink to="/" className={s.nav__link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.nav__link}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
