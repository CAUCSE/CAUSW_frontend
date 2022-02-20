import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class SettingPasswordPageUiStore {
  submitDisabled = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *update(body: User.PasswordUpdateRequestDto): Generator {
    this.submitDisabled = true;

    try {
      yield Repo.updatePassword(body);
      return { success: true };
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }
}

export const PageUiStoreImpl = new SettingPasswordPageUiStore();
