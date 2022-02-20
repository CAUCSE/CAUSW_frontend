import { makeAutoObservable } from 'mobx';

import { CircleJoinModalUi } from './components';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleJoinPageUiStore {
  circle?: Model.Circle;

  // 모달
  joinModal = new CircleJoinModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        joinModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.circle = undefined;
  }

  *fetch(circleId: string): Generator {
    this.circle = (yield Repo.fetchById(circleId)) as Model.Circle;
  }

  *join(circle: Model.Circle): Generator {
    return yield Repo.join(circle.id);
  }
}

export const PageUiStoreImpl = new CircleJoinPageUiStore();
