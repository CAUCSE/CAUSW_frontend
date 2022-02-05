import { createContext, useContext } from 'react';
import { action, makeAutoObservable } from 'mobx';

export class JoinStore {
  visible = false;
  status: Circle.JoinStatus = 'NONE';

  constructor() {
    makeAutoObservable(this, {
      setVisible: action.bound,
      setStatus: action.bound,
    });
  }

  setVisible(flag?: boolean): void {
    this.visible = flag ?? !this.visible;
  }

  setStatus(status: Circle.JoinStatus): void {
    this.status = status;
  }

  get isDone(): boolean {
    return this.status === 'DONE';
  }
  get isAwait(): boolean {
    return this.status === 'AWAIT';
  }
  get isBlock(): boolean {
    return this.status === 'BLOCK';
  }
}

const store = new JoinStore();
const Context = createContext(store);

export const JoinStoreProvider: React.FC = ({ children }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
);
export const useJoinStore = (): JoinStore => useContext(Context);
