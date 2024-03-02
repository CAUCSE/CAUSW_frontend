import { makeAutoObservable } from 'mobx';

import { BoardRepoImpl as Repo } from '@/stores/repositories/BoardRepo';

export class BoardCreatePageUiStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
  *create(body: Board.CreateRequestDto): Generator {
    try {
      (yield Repo.create(body)) as Model.Board;
      return { success: true };
    } catch (error) {
      return error;
    }
  }
}

export const PageUiStoreImpl = new BoardCreatePageUiStore();
