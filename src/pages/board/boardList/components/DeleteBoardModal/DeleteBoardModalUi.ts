import { makeAutoObservable } from 'mobx';

import { BoardRepoImpl as Repo } from '@/stores/repositories/BoardRepo';

export class DeleteBoardModalUi {
  visible = false;
  target?: Model.Board;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(target: Model.Board): void {
    console.log(target);
    this.visible = true;
    this.target = target;
  }

  close(): void {
    this.visible = false;
  }

  *deleteBoard(boardId: string): Generator {
    try {
      yield Repo.delete(boardId);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
