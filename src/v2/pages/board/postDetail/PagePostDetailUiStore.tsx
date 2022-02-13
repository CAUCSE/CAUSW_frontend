import { createContext, useContext } from 'react';

import { PostDeleteModalUiStore } from './components/PostDeleteModal/PostDeleteModalUiStore';

class PagePostDetailUiStore {
  postDeleteModal = new PostDeleteModalUiStore();

  // constructor() {
  //   this.postDeleteModal;
  // }
}

const pageUiStore = new PagePostDetailUiStore();
const Context = createContext(pageUiStore);

export const PageUiProvider: React.FC = ({ children }) => (
  <Context.Provider value={pageUiStore}>{children}</Context.Provider>
);
export const usePageUiStore = (): PagePostDetailUiStore => useContext(Context) ?? pageUiStore;
