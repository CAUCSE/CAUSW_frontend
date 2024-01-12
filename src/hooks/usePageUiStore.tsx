import { createContext, useContext } from 'react';

const Context = createContext<unknown>(null);

export interface withFetchPage {
  isFetched: boolean;
}

export const PageUiProvider: React.FC<{ store: unknown }> = ({ children, store }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
);

//refactor: T extends unknown Problem from ESlint
//change: export const usePageUiStore = <T extends unknown>(): T => useContext(Context) as T;
export function usePageUiStore<T>() {
  return useContext(Context) as T;
}
