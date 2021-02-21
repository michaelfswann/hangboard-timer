import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const displayName = user.name.split(' ')[0];

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profile-picture" src={user.picture} alt={user.name} />
        <h2>{displayName}</h2>
      </div>
    )
  );
};

export default Profile;
