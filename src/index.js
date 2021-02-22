import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import App from './app';
//import Timer from './timer'
render(
  <Router >
    <Auth0ProviderWithHistory>
      <div className="app">
        <App />
      </div>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
