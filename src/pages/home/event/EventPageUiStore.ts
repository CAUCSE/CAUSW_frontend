import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class EventPageUiStore {
  submitDisabled = false;
  chekedEmail = '';
  isDuplicatedEmail?: boolean;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *signUp(body: User.CreateDto): Generator {
    this.submitDisabled = true;

    try {
      // 이메일 중복 검사
      this.chekedEmail = body.email;
      this.isDuplicatedEmail = (yield Repo.isDuplicatedEmail(body.email)) as boolean;

      yield Repo.signUp(body);
      return { success: true };
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }
}

export const PageUiStoreImpl = new SignUpPageUiStore();
