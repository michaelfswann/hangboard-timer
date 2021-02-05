import React from 'react';

import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <MainNav />
        <AuthNav />
      </nav>
    </div>
  );
};

export default NavBar;
