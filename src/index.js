import React from 'react';
import { render } from 'react-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import Application from './application';
//import Timer from './timer'
render(
  <Auth0ProviderWithHistory>
    <div className="app">
      <Application />
    </div>
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
