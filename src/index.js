import React from 'react';
import { render } from 'react-dom';

import Component from './component';
import Timer from './timer'

render(
  <div className="app">
    <Timer />
    <p>Building...</p>
    <Component />
  </div>,
  document.getElementById('root')
);
