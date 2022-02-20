import { createContext, useContext } from 'react';

import { AuthStore } from './AuthStore';
import { CircleStore } from './CircleStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;
  circle: Store.Circle;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
    this.circle = new CircleStore(this);
  }
}

export const RootStoreInstance = new RootStore();
const RootStoreContext = createContext(RootStoreInstance);

export const useRootStore = (): RootStore => useContext(RootStoreContext);
