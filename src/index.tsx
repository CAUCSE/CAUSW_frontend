import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Global } from '@emotion/react';
import React from 'react';
import { render } from 'react-dom';
import { Toast } from './components';
import { GlobalStyle } from './global-styles';
import { PageRouter } from './PageRouter';
import { RootStoreProvider } from './stores/RootStore';

render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <RootStoreProvider>
      <PageRouter />
      <Toast />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
