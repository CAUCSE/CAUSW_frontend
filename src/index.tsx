import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Global } from '@emotion/react';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import { PageRouter } from './v2';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <PageRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
