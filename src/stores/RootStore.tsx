import React from 'react';
import { AuthStore } from './AuthStore';
import { BoardStore } from './BoardStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;
  board: Store.Board;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
    this.board = new BoardStore(this);
  }
}

const RootStoreInstance = new RootStore();
const RootStoreContext = React.createContext(RootStoreInstance);

export const useRootStore = (): RootStore => React.useContext(RootStoreContext);
