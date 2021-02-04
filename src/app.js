import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/loading';
import Home from './views/home';
import ProtectedRoute from './auth/protected-route';

import './app.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} /> */}
    </Switch>
  );
};

export default App;
