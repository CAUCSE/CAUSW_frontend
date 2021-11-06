import { flow, makeObservable } from 'mobx';
import { CircleRepoImpl as Repo } from './repositories/CircleRepo';

export class CircleStore {
  rootStore: Store.Root;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      fetch: flow.bound,
    });

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    const data = yield Repo.fetch();
  }
}
