import React from 'react';
import { render } from 'react-dom';

import Component from './component';

render(
  <div className="app">
    <p>Building...</p>
    <Component />
  </div>,
  document.getElementById('root')
);
