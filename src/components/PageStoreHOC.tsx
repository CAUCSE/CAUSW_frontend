import { PageRoot } from './Layout';

import { PageUiProvider } from '@/hooks';

export const PageStoreHOC =
  (
    PageComponent: React.ReactNode,
    { store } = {} as {
      store?: unknown;
    },
  ): React.FC =>
  () =>
    (
      <PageUiProvider store={store}>
        <PageRoot>{PageComponent}</PageRoot>
      </PageUiProvider>
    );
