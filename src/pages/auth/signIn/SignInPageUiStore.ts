import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class SignInPageUiStore {
  isLoading = false;
  isDisabled = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.isLoading = false;
    this.isDisabled = false;
  }

  *signIn(body: User.SignInRequestDto): Generator {
    this.isLoading = true;
    this.isDisabled = true;

    try {
      yield Repo.signIn(body);

      return { success: true };
    } catch (err) {
      return err;
    } finally {
      this.reset();
    }
  }
}

export const PageUiStoreImpl = new SignInPageUiStore();
