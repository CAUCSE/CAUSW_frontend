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

/* mocking
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
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
}); 
*/
