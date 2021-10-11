import React from 'react';
import { AuthStore } from './AuthStore';
import { BoardStore } from './BoardStore';
import { PostStore } from './PostStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;
  board: Store.Board;
  post: Store.Post;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
    this.board = new BoardStore(this);
    this.post = new PostStore(this);
  }
}

const RootStoreInstance = new RootStore();
const RootStoreContext = React.createContext(RootStoreInstance);

export const useRootStore = (): RootStore => React.useContext(RootStoreContext);
