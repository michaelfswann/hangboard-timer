import React from 'react';
import { render } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENTID = process.env.REACT_APP_AUTH0_CLIENT_ID;

import Application from './application';
//import Timer from './timer'
render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENTID}
    redirectUri={window.location.origin}
  >
    <div className="app">
      <Application />
    </div>
  </Auth0Provider>,
  document.getElementById('root')
);
