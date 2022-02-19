import { createContext, useContext } from 'react';

import { AuthStore } from './AuthStore';
import { BoardStore } from './BoardStore';
import { CircleStore } from './CircleStore';
import { CommentStore } from './CommentStore';
import { PostStore } from './PostStore';
import { ReplyCommentStore } from './ReplyCommentStore';
import { UiStore } from './UiStore';

export class RootStore {
  auth: Store.Auth;
  ui: Store.Ui;
  circle: Store.Circle;
  board: Store.Board;
  post: Store.Post;
  comment: Store.Comment;
  replyComment: Store.ReplyComment;

  constructor() {
    this.auth = new AuthStore(this);
    this.ui = new UiStore(this);
    this.circle = new CircleStore(this);
    this.board = new BoardStore(this);
    this.post = new PostStore(this);
    this.comment = new CommentStore(this);
    this.replyComment = new ReplyCommentStore(this);
  }
}

export const RootStoreInstance = new RootStore();
const RootStoreContext = createContext(RootStoreInstance);

export const useRootStore = (): RootStore => useContext(RootStoreContext);
