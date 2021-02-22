import React from 'react';

import { NavLink } from 'react-router-dom'


import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar-links">
      <div className="link">
        <NavLink
          to="/"
          
        >
          Timer
        </NavLink>
      </div>
      {isAuthenticated && (
        <div className="link">
          <NavLink
            to="/data"
            
            
          >
            Data
          </NavLink>
          
        </div>
      )}
    </div>
  );
};

export default MainNav;
