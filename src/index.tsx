import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/themes';
import { GlobalStyle } from './styles/global-styles';
import { PageRouter } from './PageRouter';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.default}>
      <GlobalStyle />
      <PageRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
