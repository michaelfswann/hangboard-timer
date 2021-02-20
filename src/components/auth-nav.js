import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

import Profile from './profile';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div className="nav-bar-not-auth">
          <div>
            <LoginButton />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <div className="nav-bar-auth">
          <div>
            <LogoutButton />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthNav;

//
