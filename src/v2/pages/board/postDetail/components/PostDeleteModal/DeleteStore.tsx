import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export class DeleteStore {
  visible = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setVisible(flag?: boolean): void {
    this.visible = flag ?? !this.visible;
  }
}

const store = new DeleteStore();
const Context = createContext(store);

export const DeleteStoreProvider: React.FC = ({ children }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
);
export const useDeleteStore = (): DeleteStore => useContext(Context);
