import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class FindPasswordPageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
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
