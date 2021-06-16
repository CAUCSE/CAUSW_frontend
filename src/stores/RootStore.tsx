import React from 'react';
import { AuthStore } from './AuthStore';

export class RootStore {
  auth: Store.Auth;

  constructor() {
    this.auth = new AuthStore(this);
  }
}

const RootStoreInstance = new RootStore();
const RootStoreContext = React.createContext(RootStoreInstance);

export const useRootStore = (): RootStore => React.useContext(RootStoreContext);
