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

//refactor: module type problem (solve react-router-dom problem)
//addtion: {children: React.ReactNode;}
export const RootStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <RootStoreContext.Provider value={RootStoreInstance}>{children}</RootStoreContext.Provider>
);
export const useRootStore = (): RootStore => useContext(RootStoreContext);
