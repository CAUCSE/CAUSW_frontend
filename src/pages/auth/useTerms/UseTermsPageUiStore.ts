import { makeAutoObservable } from 'mobx';

export class UseTermsPageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const PageUiStoreImpl = new UseTermsPageUiStore();
