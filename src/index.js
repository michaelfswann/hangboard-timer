import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import Application from './application';
//import Timer from './timer'
render(
  <Router>
    <Auth0ProviderWithHistory>
      <div className="app">
        <Application />
      </div>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
