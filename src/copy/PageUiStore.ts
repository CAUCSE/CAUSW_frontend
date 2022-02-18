import { makeAutoObservable } from 'mobx';

export class PageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const PageUiStoreImpl = new PageUiStore();
