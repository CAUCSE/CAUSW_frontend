import { createContext, useContext } from 'react';

import { AuthStore } from './AuthStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
  }
}

export const RootStoreInstance = new RootStore();
const RootStoreContext = createContext(RootStoreInstance);

export const RootStoreProvider: React.FC = ({ children }) => (
  <RootStoreContext.Provider value={RootStoreInstance}>{children}</RootStoreContext.Provider>
);
export const useRootStore = (): RootStore => useContext(RootStoreContext);
