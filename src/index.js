import React from 'react';
import { render } from 'react-dom';

import Application from './application';
//import Timer from './timer'

render(
  <div className="app">
    <Application />
  </div>,
  document.getElementById('root')
);
