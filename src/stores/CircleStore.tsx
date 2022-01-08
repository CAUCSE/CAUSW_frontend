import { computed, flow, makeObservable, observable } from 'mobx';
import { CircleRepoImpl as Repo } from './repositories/CircleRepo';

export class CircleStore {
  rootStore: Store.Root;
  circleMap: Map<string, Model.Circle> = new Map();
  circle?: Model.Circle;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      fetch: flow.bound,
      circleMap: observable,
      circles: computed,
      circle: observable,
    });

    this.rootStore = rootStore;
  }

  get circles(): Model.Circle[] {
    return Array.from(this.circleMap.values());
  }

  *fetch(circleId?: string): Generator {
    if (!circleId) {
      const circles = (yield Repo.fetch()) as Model.Circle[];

      circles.forEach(circle => this.circleMap.set(circle.id, circle));
    } else {
      const circle = (yield Repo.fetchById(circleId)) as Model.Circle;

      this.circleMap.set(circle.id, circle);
      this.circle = circle;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  *join(circleId?: string): Generator {}
}
