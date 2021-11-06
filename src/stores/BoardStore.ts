import { computed, flow, makeObservable, observable } from 'mobx';
import { BoardRepoImpl as Repo } from './repositories/BoardRepo';

export class BoardStore {
  rootStore: Store.Root;
  boardId = '';
  boards: Map<string, any> = new Map();
  // boardMap: Map<string, BoardResponseDto> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      //   boardId: observable,
      //   boardMap: observable,
      //   boardName: computed,

      boards: observable,
      fetch: flow.bound,
    });

    this.rootStore = rootStore;
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

  get boardName(): string {
    // return this.boardMap.get(this.boardId)?.name ?? '';
    return '123';
  }

  get writable(): boolean {
    // return this.boardMap.get(this.boardId)?.writable ?? false;
    return true;
  }
}
