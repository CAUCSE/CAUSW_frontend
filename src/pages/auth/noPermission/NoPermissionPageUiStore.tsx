import { makeAutoObservable } from 'mobx';

export class NoPermissionPageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const PageUiStoreImpl = new NoPermissionPageUiStore();
