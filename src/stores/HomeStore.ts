import { flow, makeObservable, observable } from 'mobx';
import { HomeRepoImpl as Repo } from './repositories/HomeRepo';

type HomeBoard = { board: Model.Board; posts: Model.Post[] };

export class HomeStore {
  rootStore: Store.Root;
  boards: HomeBoard[] = [];

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boards: observable,
      fetch: flow.bound,
    });

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.boards = (yield Repo.fetch()) as HomeBoard[];
  }
}
