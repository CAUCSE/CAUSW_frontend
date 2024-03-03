import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class FindPasswordPageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *findPassword(body: User.FindPasswordReqestDto): Generator {
    try {
      yield Repo.findPassword(body);
      return { success: true };
    } catch (error) {
      return error;
    }
  }
}

export const PageUiStoreImpl = new FindPasswordPageUiStore();
