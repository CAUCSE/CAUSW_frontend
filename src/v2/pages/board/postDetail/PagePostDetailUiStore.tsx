import { action, makeObservable, observable } from 'mobx';
import { createContext, useContext } from 'react';
import { VirtuosoHandle } from 'react-virtuoso';

import { CommentDeleteModalUi } from './components/CommentDeleteModal';
import { CommentInputUiStroe } from './components/CommentInput';
import { CommentMenuUi } from './components/CommentMenu';
import { PostDeleteModalUiStore } from './components/PostDeleteModal/PostDeleteModalUiStore';

class PagePostDetailUiStore {
  virtuosoRef?: React.MutableRefObject<VirtuosoHandle | null>;
  commentInput = new CommentInputUiStroe();

  postDeleteModal = new PostDeleteModalUiStore();
  commentMenuModal = new CommentMenuUi();
  commentDeleteModal = new CommentDeleteModalUi();

  constructor() {
    makeObservable(this, {
      virtuosoRef: observable,
      setVirtuosoRef: action.bound,
    });
  }

  setVirtuosoRef(ref: React.MutableRefObject<VirtuosoHandle | null>): void {
    this.virtuosoRef = ref;
  }
}

const pageUiStore = new PagePostDetailUiStore();
const Context = createContext(pageUiStore);

export const PageUiProvider: React.FC = ({ children }) => (
  <Context.Provider value={pageUiStore}>{children}</Context.Provider>
);
export const usePageUiStore = (): PagePostDetailUiStore => useContext(Context) ?? pageUiStore;
