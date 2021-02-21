import { NavLink } from 'react-router-dom';
import React from 'react';

const MainNav = () => (
  <div className="nav-bar-links">
    <div className="link">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
    </div>
    <div className="link">
      <NavLink
        to="/data"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Data
      </NavLink>
    </div>
  </div>
);

export default MainNav;
