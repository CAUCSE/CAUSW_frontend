import React from 'react';
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

const RootStoreInstance = new RootStore();
const RootStoreContext = React.createContext(RootStoreInstance);

export const useRootStore = (): RootStore => React.useContext(RootStoreContext);
