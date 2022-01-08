import { flow, makeObservable, observable } from 'mobx';
import { CircleRepoImpl as Repo } from './repositories/CircleRepo';

export class CircleStore {
  rootStore: Store.Root;
  circle: Model.Circle[] = [];

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      fetch: flow.bound,
      circle: observable,
    });

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.circle = (yield Repo.fetch()) as Model.Circle[];
  }
}
