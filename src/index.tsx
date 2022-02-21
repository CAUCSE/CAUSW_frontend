import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Global } from '@emotion/react';
import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './global-styles';
import { PageRouter } from './PageRouter';

render(
  <React.StrictMode>
    <PageRouter />
    <Global styles={GlobalStyle} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
