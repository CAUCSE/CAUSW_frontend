import { createContext, useContext } from 'react';

const Context = createContext<unknown>(null);

export const PageUiProvider: React.FC<{ store: unknown }> = ({ children, store }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
);
export const usePageUiStore = <T extends unknown>(): T => useContext(Context) as T;
