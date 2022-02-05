import { createContext, useContext } from 'react';

import { AuthStore } from './AuthStore';
import { BoardStore } from './BoardStore';
import { CircleStore } from './CircleStore';
import { HomeStore } from './HomeStore';
import { PostStore } from './PostStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;
  home: Store.Home;
  circle: Store.Circle;
  board: Store.Board;
  post: Store.Post;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
    this.home = new HomeStore(this);
    this.circle = new CircleStore(this);
    this.board = new BoardStore(this);
    this.post = new PostStore(this);
  }
}

const RootStoreInstance = new RootStore();
const RootStoreContext = createContext(RootStoreInstance);

export const useRootStore = (): RootStore => useContext(RootStoreContext);
