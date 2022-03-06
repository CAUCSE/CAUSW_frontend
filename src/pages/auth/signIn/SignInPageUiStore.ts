import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class SignInPageUiStore {
  submitDisabled = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *signIn(body: User.SignInRequestDto): Generator {
    this.submitDisabled = true;

    try {
      yield Repo.signIn(body);

      return { success: true };
    } catch (err) {
      return err;
    } finally {
      this.submitDisabled = false;
    }
  }
}

export const PageUiStoreImpl = new SignInPageUiStore();
