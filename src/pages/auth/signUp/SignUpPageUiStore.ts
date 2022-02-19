import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class SignUpPageUiStore {
  submitDisabled = false;
  chekedEmail = '';
  isDuplicatedEmail?: boolean;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *signUp(body: User.CreateDto): Generator {
    this.submitDisabled = true;

    // 이메일 중복 검사
    this.chekedEmail = body.email;
    this.isDuplicatedEmail = (yield Repo.isDuplicatedEmail(body.email)) as boolean;

    if (this.isDuplicatedEmail === false) {
      try {
        yield Repo.signUp(body);
        return { success: true };
      } catch (err) {
        return err;
      }
    }

    this.submitDisabled = false;
    return { success: false };
  }
}

export const PageUiStoreImpl = new SignUpPageUiStore();
