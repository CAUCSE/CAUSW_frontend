import { createContext, useContext } from 'react';

import { CommentDeleteModalUi } from './components/CommentDeleteModal';
import { CommentInputUiStroe } from './components/CommentInput';
import { CommentMenuUi } from './components/CommentMenu';
import { PostDeleteModalUiStore } from './components/PostDeleteModal/PostDeleteModalUiStore';

class PagePostDetailUiStore {
  commentInput = new CommentInputUiStroe();

  postDeleteModal = new PostDeleteModalUiStore();
  commentMenuModal = new CommentMenuUi();
  commentDeleteModal = new CommentDeleteModalUi();
}

const pageUiStore = new PagePostDetailUiStore();
const Context = createContext(pageUiStore);

export const PageUiProvider: React.FC = ({ children }) => (
  <Context.Provider value={pageUiStore}>{children}</Context.Provider>
);
export const usePageUiStore = (): PagePostDetailUiStore => useContext(Context) ?? pageUiStore;
