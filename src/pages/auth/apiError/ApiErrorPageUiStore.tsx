import { makeAutoObservable } from 'mobx';

export class ApiErrorPageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const PageUiStoreImpl = new ApiErrorPageUiStore();
