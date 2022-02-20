import { makeAutoObservable } from 'mobx';

import { CircleDeleteModalUi, CircleInfoModalUi } from './components';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleMainPageUiStore {
  circle?: Model.Circle;
  boards: Model.CircleBoard[] = [];

  // 모달
  infoModal: CircleInfoModalUi = new CircleInfoModalUi();
  deleteModal: CircleDeleteModalUi = new CircleDeleteModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        infoModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.circle = undefined;
    this.boards = [];
  }

  *fetch(circleId: string): Generator {
    const { circle, boards } = (yield Repo.findBoards(circleId)) as Circle.FindBoards;

    this.circle = circle;
    this.boards = boards;
  }

  *leave(circleId: string): Generator {
    return yield Repo.leaveUser(circleId);
  }
}

export const PageUiStoreImpl = new CircleMainPageUiStore();
