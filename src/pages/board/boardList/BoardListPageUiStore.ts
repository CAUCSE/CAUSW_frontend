import { makeAutoObservable } from 'mobx';

import { BoardRepoImpl as Repo } from '@/stores/repositories/BoardRepo';

export class BoardListPageUiStore {
  boards: Map<string, Model.Board[]> = new Map();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    const boards = (yield Repo.fetch()) as Model.Board[];
    this.boards = new Map();

    boards.forEach((board: Model.Board) => {
      const arr = this.boards.get(board.category);

      if (arr) arr.push(board);
      else this.boards.set(board.category, [board]);
    });
  }
}

export const PageUiStoreImpl = new BoardListPageUiStore();
