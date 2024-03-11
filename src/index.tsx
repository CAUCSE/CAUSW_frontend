import { Global } from '@emotion/react';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import { Toast } from './components';
import { GlobalStyle } from './global-styles';
import { PageRouter } from './PageRouter';
import { RootStoreProvider } from './stores/RootStore';

const gaTrackingId = import.meta.env.VITE_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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

/* async function enableMocking() {
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
}); */
