import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class SignUpPageUiStore {
  chekedEmail = '';
  isDuplicatedEmail?: boolean;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // eslint-disable-next-line require-yield
  *signUp(body: User.CreateDto): Generator {
    console.debug(body);

    // 이메일 중복 검사
    this.chekedEmail = body.email;
    // this.isDuplicatedEmail = (yield Repo.isDuplicatedEmail(body.email)) as boolean;
    this.isDuplicatedEmail = !this.isDuplicatedEmail;
  }
}

export const PageUiStoreImpl = new SignUpPageUiStore();
