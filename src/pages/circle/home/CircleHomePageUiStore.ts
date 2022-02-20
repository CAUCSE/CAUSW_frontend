import { makeAutoObservable } from 'mobx';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleHomePageUiStore {
  circleMap: Map<string, Model.Circle> = new Map();

  get circles(): Model.Circle[] {
    return Array.from(this.circleMap.values());
  }

  get joinedCircles(): Model.Circle[] {
    return Array.from(this.circleMap.values()).filter(({ isJoined }) => isJoined);
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    const circles = (yield Repo.fetch()) as Model.Circle[];

    circles.forEach(circle => this.circleMap.set(circle.id, circle));
  }
}

export const PageUiStoreImpl = new CircleHomePageUiStore();
