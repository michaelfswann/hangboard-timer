import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/loading';
import Home from './views/home';
import Data from './views/data';

import ProtectedRoute from './auth/protected-route';
import NavBar from './components/navbar';

import './app.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="application-main-div">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/data" component={Data} />
      </Switch>
    </div>
  );
};

export default App;
