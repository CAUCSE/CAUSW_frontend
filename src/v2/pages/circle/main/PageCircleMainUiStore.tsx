import { createContext, useContext } from 'react';

import { CircleInfoModalUiStore } from './components/CircleInfoModal/CircleInfoModalUiStore';

class PageCircleMainUiStore {
  infoModal: CircleInfoModalUiStore;

  constructor() {
    this.infoModal = new CircleInfoModalUiStore();
  }
}

const pageUiStore = new PageCircleMainUiStore();
const Context = createContext(pageUiStore);

export const PageUiProvider: React.FC = ({ children }) => (
  <Context.Provider value={pageUiStore}>{children}</Context.Provider>
);
export const usePageUiStore = (): PageCircleMainUiStore => useContext(Context) ?? pageUiStore;
