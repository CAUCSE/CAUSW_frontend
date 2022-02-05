import { action, flow, makeAutoObservable } from 'mobx';

import { CircleRepoImpl as Repo, FindBoardsRes } from './repositories/CircleRepo';

export class CircleStore {
  rootStore: Store.Root;
  circleMap: Map<string, Model.Circle> = new Map();
  circle?: Model.Circle;
  boards: Model.CircleBoard[] = [];

  constructor(rootStore: Store.Root) {
    makeAutoObservable(this, {
      reset: action.bound,
      fetch: flow.bound,
      fetchMain: flow.bound,
      join: flow.bound,
    });

    this.rootStore = rootStore;
  }

  get circles(): Model.Circle[] {
    return Array.from(this.circleMap.values());
  }

  reset(): void {
    this.circle = undefined;
    this.boards = [];
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

  *fetchMain(circleId: string): Generator {
    const { circle, boards } = (yield Repo.findBoards(circleId)) as FindBoardsRes;

    this.circleMap.set(circle.id, circle);
    this.circle = circle;
    this.boards = boards;
  }

  *join(circle: Model.Circle): Generator {
    return yield Repo.join(circle.id);
  }
}
