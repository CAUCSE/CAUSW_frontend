import { flow, makeObservable, observable } from 'mobx';
import { BoardRepoImpl as Repo } from './repositories/BoardRepo';

export class BoardStore {
  rootStore: Store.Root;
  boardId = '';
  boards: Map<string, Model.Board[]> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
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
}
