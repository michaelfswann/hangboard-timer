import React from 'react';
import { render } from 'react-dom';

import Component from './component';
//import Timer from './timer'

render(
  <div className="app">
    <Component />
  </div>,
  document.getElementById('root')
);
